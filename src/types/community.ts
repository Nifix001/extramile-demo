// types/community.ts

export interface Reply {
  id: string;
  postId: string;
  userId: string;
  userName: string;
  content: string;
  timestamp: Date;
  likes: string[]; // Array of user IDs who liked
}

export interface Post {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  content: string;
  timestamp: Date;
  likes: string[]; // Array of user IDs who liked
  replies: Reply[];
}

export interface User {
  id: string;
  name: string;
  email: string;
}