import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import PostCard from './PostCard';
import { Post } from '../types/community';
import { communityService } from '../utils/supabaseCommunity';

interface CommunityPageProps {
  currentUserId: string;
  currentUserName: string;
  isAuthenticated: boolean;
  onLoginRequired: () => void;
}

export default function CommunityPage({ 
  currentUserId, 
  currentUserName, 
  isAuthenticated,
  onLoginRequired 
}: CommunityPageProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [newPostContent, setNewPostContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const POSTS_PER_PAGE = 10;

  useEffect(() => {
    loadPosts();
  }, [currentPage]);

  const loadPosts = async () => {
    setIsLoading(true);
    const { posts: loadedPosts, totalPages: total } = await communityService.getPosts(currentPage, POSTS_PER_PAGE);
    setPosts(loadedPosts);
    setTotalPages(total);
    setIsLoading(false);
  };

  const handleCreatePostClick = () => {
    if (!isAuthenticated) {
      onLoginRequired();
      return;
    }
    setShowCreatePost(true);
  };

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAuthenticated) {
      onLoginRequired();
      return;
    }
    
    if (newPostContent.trim()) {
      try {
        await communityService.createPost(currentUserId, currentUserName, newPostContent);
        setNewPostContent('');
        setShowCreatePost(false);
        setCurrentPage(1);
        loadPosts();
      } catch (error) {
        console.error('Failed to create post:', error);
      }
    }
  };

  const handleLikePost = async (postId: string) => {
    if (!isAuthenticated) {
      onLoginRequired();
      return;
    }
    await communityService.toggleLikePost(postId, currentUserId);
    loadPosts();
  };

  const handleReply = async (postId: string, content: string) => {
    if (!isAuthenticated) {
      onLoginRequired();
      return;
    }
    try {
      await communityService.addReply(postId, currentUserId, currentUserName, content);
      loadPosts();
    } catch (error) {
      console.error('Failed to add reply:', error);
    }
  };

  const handleLikeReply = async (postId: string, replyId: string) => {
    if (!isAuthenticated) {
      onLoginRequired();
      return;
    }
    await communityService.toggleLikeReply(replyId, currentUserId);
    loadPosts();
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Community</h2>
        <p className="text-gray-600">Connect with other ExtraMile customers, share experiences, and get advice</p>
        {!isAuthenticated && (
          <div className="mt-3 bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm text-yellow-800">
            ℹ️ You're browsing as a guest. <button onClick={onLoginRequired} className="underline font-semibold hover:text-yellow-900">Login</button> to post, like, and reply.
          </div>
        )}
      </div>

      {/* Create Post Button/Form */}
      {!showCreatePost ? (
        <button
          onClick={handleCreatePostClick}
          className="w-full bg-white rounded-xl shadow-md p-4 mb-6 flex items-center gap-3 hover:shadow-lg transition-shadow group"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
            {isAuthenticated ? (currentUserName[0]?.toUpperCase() || 'U') : '?'}
          </div>
          <span className="text-gray-500 text-left flex-1 group-hover:text-gray-700">
            {isAuthenticated ? 'Share your thoughts or ask a question...' : 'Login to share your thoughts...'}
          </span>
          <Plus className="text-green-600" size={24} />
        </button>
      ) : (
        <form onSubmit={handleCreatePost} className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="flex gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
              {currentUserName[0]?.toUpperCase() || 'U'}
            </div>
            <div className="flex-1">
              <div className="font-bold text-gray-800 mb-2">{currentUserName}</div>
              <textarea
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                placeholder="What's on your mind? Share your experience, ask questions, or give advice to fellow customers..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent resize-none"
                rows={4}
                autoFocus
              />
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => {
                setShowCreatePost(false);
                setNewPostContent('');
              }}
              className="px-6 py-2 text-gray-600 hover:text-gray-800 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!newPostContent.trim()}
              className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              Post
            </button>
          </div>
        </form>
      )}

      {/* Loading State */}
      {isLoading ? (
        <div className="text-center py-12">
          <div className="inline-block w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600 mt-4">Loading posts...</p>
        </div>
      ) : (
        <>
          {/* Posts List */}
          {posts.length === 0 ? (
            <div className="bg-white rounded-xl shadow-md p-12 text-center">
              <div className="text-6xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">No posts yet</h3>
              <p className="text-gray-600 mb-6">Be the first to start a conversation!</p>
              {isAuthenticated ? (
                <button
                  onClick={() => setShowCreatePost(true)}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Create First Post
                </button>
              ) : (
                <button
                  onClick={onLoginRequired}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Login to Post
                </button>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  currentUserId={currentUserId}
                  onLike={handleLikePost}
                  onReply={handleReply}
                  onLikeReply={handleLikeReply}
                />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
                          currentPage === page
                            ? 'bg-green-600 text-white'
                            : 'border border-gray-300 hover:bg-gray-100 text-gray-700'
                        }`}
                      >
                        {page}
                      </button>
                    );
                  } else if (page === currentPage - 2 || page === currentPage + 2) {
                    return <span key={page} className="w-10 h-10 flex items-center justify-center">...</span>;
                  }
                  return null;
                })}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}