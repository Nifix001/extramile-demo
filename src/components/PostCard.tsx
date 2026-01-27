import React, { useState } from 'react';
import { Heart, MessageCircle, Send } from 'lucide-react';
import { Post, Reply } from '@/src//types/community';

interface PostCardProps {
  post: Post;
  currentUserId: string;
  onLike: (postId: string) => void;
  onReply: (postId: string, content: string) => void;
  onLikeReply: (postId: string, replyId: string) => void;
}

export default function PostCard({ post, currentUserId, onLike, onReply, onLikeReply }: PostCardProps) {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyContent, setReplyContent] = useState('');
  const [showAllReplies, setShowAllReplies] = useState(false);

  const isLikedByCurrentUser = post.likes.includes(currentUserId);
  const displayReplies = showAllReplies ? post.replies : post.replies.slice(0, 2);

  const handleReplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (replyContent.trim()) {
      onReply(post.id, replyContent);
      setReplyContent('');
      setShowReplyBox(false);
    }
  };

  const formatTimestamp = (timestamp: Date) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
      {/* Post Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-lg">
          {post.userName[0].toUpperCase()}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold text-gray-800">{post.userName}</span>
            <span className="text-gray-400 text-sm">{formatTimestamp(post.timestamp)}</span>
          </div>
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{post.content}</p>
        </div>
      </div>

      {/* Post Actions */}
      <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
        <button
          onClick={() => onLike(post.id)}
          className={`flex items-center gap-2 transition-colors ${
            isLikedByCurrentUser 
              ? 'text-red-500 hover:text-red-600' 
              : 'text-gray-500 hover:text-red-500'
          }`}
        >
          <Heart 
            size={20} 
            fill={isLikedByCurrentUser ? 'currentColor' : 'none'}
            className="transition-all"
          />
          <span className="font-medium text-sm">{post.likes.length}</span>
        </button>

        <button
          onClick={() => setShowReplyBox(!showReplyBox)}
          className="flex items-center gap-2 text-gray-500 hover:text-green-600 transition-colors"
        >
          <MessageCircle size={20} />
          <span className="font-medium text-sm">{post.replies.length}</span>
        </button>
      </div>

      {/* Replies Section */}
      {post.replies.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-100 space-y-4">
          {displayReplies.map((reply) => (
            <ReplyCard 
              key={reply.id}
              reply={reply}
              currentUserId={currentUserId}
              onLike={() => onLikeReply(post.id, reply.id)}
              formatTimestamp={formatTimestamp}
            />
          ))}

          {post.replies.length > 2 && !showAllReplies && (
            <button
              onClick={() => setShowAllReplies(true)}
              className="text-green-600 hover:text-green-700 text-sm font-medium"
            >
              View {post.replies.length - 2} more {post.replies.length - 2 === 1 ? 'reply' : 'replies'}
            </button>
          )}

          {showAllReplies && post.replies.length > 2 && (
            <button
              onClick={() => setShowAllReplies(false)}
              className="text-gray-600 hover:text-gray-700 text-sm font-medium"
            >
              Show less
            </button>
          )}
        </div>
      )}

      {/* Reply Input Box */}
      {showReplyBox && (
        <form onSubmit={handleReplySubmit} className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
              {currentUserId[0]?.toUpperCase() || 'U'}
            </div>
            <div className="flex-1">
              <textarea
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                placeholder="Write a reply..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent resize-none"
                rows={3}
                autoFocus
              />
              <div className="flex justify-end gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowReplyBox(false);
                    setReplyContent('');
                  }}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!replyContent.trim()}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={16} />
                  Reply
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

// Reply Card Component
function ReplyCard({ 
  reply, 
  currentUserId, 
  onLike, 
  formatTimestamp 
}: { 
  reply: Reply; 
  currentUserId: string; 
  onLike: () => void;
  formatTimestamp: (date: Date) => string;
}) {
  const isLikedByCurrentUser = reply.likes.includes(currentUserId);

  return (
    <div className="flex gap-3 ml-8">
      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">
        {reply.userName[0].toUpperCase()}
      </div>
      <div className="flex-1 bg-gray-50 rounded-lg p-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-semibold text-gray-800 text-sm">{reply.userName}</span>
          <span className="text-gray-400 text-xs">{formatTimestamp(reply.timestamp)}</span>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap mb-2">{reply.content}</p>
        <button
          onClick={onLike}
          className={`flex items-center gap-1 text-xs transition-colors ${
            isLikedByCurrentUser 
              ? 'text-red-500 hover:text-red-600' 
              : 'text-gray-500 hover:text-red-500'
          }`}
        >
          <Heart 
            size={14} 
            fill={isLikedByCurrentUser ? 'currentColor' : 'none'}
          />
          {reply.likes.length > 0 && <span>{reply.likes.length}</span>}
        </button>
      </div>
    </div>
  );
}