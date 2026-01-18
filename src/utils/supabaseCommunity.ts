// utils/supabaseCommunity.ts

import { supabase } from '@/lib/supabase';
import { Post, Reply } from '@/src/types/community';

export const communityService = {
  // Get paginated posts with likes and replies
  getPosts: async (page: number = 1, perPage: number = 10) => {
    try {
      const start = (page - 1) * perPage;
      const end = start + perPage - 1;

      // Get total count
      const { count } = await supabase
        .from('posts')
        .select('*', { count: 'exact', head: true });

      // Get posts
      const { data: posts, error: postsError } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false })
        .range(start, end);

      if (postsError) throw postsError;

      // Get likes for these posts
      const postIds = posts?.map(p => p.id) || [];
      const { data: likes } = await supabase
        .from('post_likes')
        .select('post_id, user_id')
        .in('post_id', postIds);

      // Get replies for these posts
      const { data: replies } = await supabase
        .from('replies')
        .select('*')
        .in('post_id', postIds)
        .order('created_at', { ascending: true });

      // Get reply likes
      const replyIds = replies?.map(r => r.id) || [];
      const { data: replyLikes } = await supabase
        .from('reply_likes')
        .select('reply_id, user_id')
        .in('reply_id', replyIds);

      // Format posts
      const formattedPosts: Post[] = (posts || []).map(post => {
        const postLikes = likes?.filter(l => l.post_id === post.id).map(l => l.user_id) || [];
        const postReplies: Reply[] = (replies?.filter(r => r.post_id === post.id) || []).map(reply => ({
          id: reply.id,
          postId: reply.post_id,
          userId: reply.user_id,
          userName: reply.user_name,
          content: reply.content,
          timestamp: new Date(reply.created_at),
          likes: replyLikes?.filter(l => l.reply_id === reply.id).map(l => l.user_id) || [],
        }));

        return {
          id: post.id,
          userId: post.user_id,
          userName: post.user_name,
          content: post.content,
          timestamp: new Date(post.created_at),
          likes: postLikes,
          replies: postReplies,
        };
      });

      const totalPages = Math.ceil((count || 0) / perPage);

      return { posts: formattedPosts, totalPages };
    } catch (error) {
      console.error('Get posts error:', error);
      return { posts: [], totalPages: 0 };
    }
  },

  // Create a new post
  createPost: async (userId: string, userName: string, content: string) => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .insert([{ user_id: userId, user_name: userName, content }])
        .select()
        .single();

      if (error) throw error;

      return {
        id: data.id,
        userId: data.user_id,
        userName: data.user_name,
        content: data.content,
        timestamp: new Date(data.created_at),
        likes: [],
        replies: [],
      };
    } catch (error) {
      console.error('Create post error:', error);
      throw error;
    }
  },

  // Toggle like on a post
  toggleLikePost: async (postId: string, userId: string) => {
    try {
      // Check if already liked
      const { data: existing } = await supabase
        .from('post_likes')
        .select('id')
        .eq('post_id', postId)
        .eq('user_id', userId)
        .single();

      if (existing) {
        // Unlike
        await supabase
          .from('post_likes')
          .delete()
          .eq('post_id', postId)
          .eq('user_id', userId);
      } else {
        // Like
        await supabase
          .from('post_likes')
          .insert([{ post_id: postId, user_id: userId }]);
      }

      return { success: true };
    } catch (error) {
      console.error('Toggle like error:', error);
      return { success: false };
    }
  },

  // Add a reply to a post
  addReply: async (postId: string, userId: string, userName: string, content: string) => {
    try {
      const { data, error } = await supabase
        .from('replies')
        .insert([{ post_id: postId, user_id: userId, user_name: userName, content }])
        .select()
        .single();

      if (error) throw error;

      return {
        id: data.id,
        postId: data.post_id,
        userId: data.user_id,
        userName: data.user_name,
        content: data.content,
        timestamp: new Date(data.created_at),
        likes: [],
      };
    } catch (error) {
      console.error('Add reply error:', error);
      throw error;
    }
  },

  // Toggle like on a reply
  toggleLikeReply: async (replyId: string, userId: string) => {
    try {
      const { data: existing } = await supabase
        .from('reply_likes')
        .select('id')
        .eq('reply_id', replyId)
        .eq('user_id', userId)
        .single();

      if (existing) {
        await supabase
          .from('reply_likes')
          .delete()
          .eq('reply_id', replyId)
          .eq('user_id', userId);
      } else {
        await supabase
          .from('reply_likes')
          .insert([{ reply_id: replyId, user_id: userId }]);
      }

      return { success: true };
    } catch (error) {
      console.error('Toggle reply like error:', error);
      return { success: false };
    }
  },
};