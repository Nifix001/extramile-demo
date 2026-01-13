
import React from 'react';
import { CommunityPost } from '@/src/types';

interface CommunityPageProps {
  posts: CommunityPost[];
}

export default function CommunityPage({ posts }: CommunityPageProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Community</h2>
      <div className="space-y-4">
        {posts.map(post => (
          <div key={post.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                {post.user[0]}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold">{post.user}</span>
                  <span className="text-gray-400 text-sm">{post.time}</span>
                </div>
                <p className="text-gray-700 mb-3">{post.content}</p>
                <button className="text-green-600 text-sm font-medium hover:underline">
                  👍 {post.likes} likes
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}