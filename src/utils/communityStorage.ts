// utils/communityStorage.ts

import { Post, Reply } from '@/src/types/community';

const POSTS_KEY = 'extramile_community_posts';

export const communityStorage = {
  // Get all posts
  getAllPosts: (): Post[] => {
    if (typeof window === 'undefined') return [];
    const posts = localStorage.getItem(POSTS_KEY);
    return posts ? JSON.parse(posts) : [];
  },

  // Save posts
  savePosts: (posts: Post[]): void => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
  },

  // Create a new post
  createPost: (userId: string, userName: string, content: string): Post => {
    const newPost: Post = {
      id: Date.now().toString(),
      userId,
      userName,
      content,
      timestamp: new Date(),
      likes: [],
      replies: []
    };

    const posts = communityStorage.getAllPosts();
    posts.unshift(newPost); // Add to beginning for recent first
    communityStorage.savePosts(posts);
    return newPost;
  },

  // Like/Unlike a post
  toggleLikePost: (postId: string, userId: string): void => {
    const posts = communityStorage.getAllPosts();
    const post = posts.find(p => p.id === postId);
    
    if (post) {
      const likeIndex = post.likes.indexOf(userId);
      if (likeIndex > -1) {
        post.likes.splice(likeIndex, 1); // Unlike
      } else {
        post.likes.push(userId); // Like
      }
      communityStorage.savePosts(posts);
    }
  },

  // Add a reply to a post
  addReply: (postId: string, userId: string, userName: string, content: string): Reply => {
    const posts = communityStorage.getAllPosts();
    const post = posts.find(p => p.id === postId);
    
    if (post) {
      const newReply: Reply = {
        id: Date.now().toString(),
        postId,
        userId,
        userName,
        content,
        timestamp: new Date(),
        likes: []
      };
      
      post.replies.push(newReply);
      communityStorage.savePosts(posts);
      return newReply;
    }
    
    throw new Error('Post not found');
  },

  // Like/Unlike a reply
  toggleLikeReply: (postId: string, replyId: string, userId: string): void => {
    const posts = communityStorage.getAllPosts();
    const post = posts.find(p => p.id === postId);
    
    if (post) {
      const reply = post.replies.find(r => r.id === replyId);
      if (reply) {
        const likeIndex = reply.likes.indexOf(userId);
        if (likeIndex > -1) {
          reply.likes.splice(likeIndex, 1); // Unlike
        } else {
          reply.likes.push(userId); // Like
        }
        communityStorage.savePosts(posts);
      }
    }
  },

  // Get paginated posts
  getPaginatedPosts: (page: number, perPage: number = 10): { posts: Post[], totalPages: number } => {
    const allPosts = communityStorage.getAllPosts();
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const posts = allPosts.slice(startIndex, endIndex);
    const totalPages = Math.ceil(allPosts.length / perPage);
    
    return { posts, totalPages };
  }
};