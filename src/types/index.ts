// src/types/index.ts

export interface Asset {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

export interface CommunityPost {
  id: number;
  user: string;
  content: string;
  likes: number;
  time: string;
}

export interface Reply {
  id: string;
  postId: string;
  userId: string;
  userName: string;
  content: string;
  timestamp: Date;
  likes: string[];
}

export interface Post {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  content: string;
  timestamp: Date;
  likes: string[];
  replies: Reply[];
}

export interface ToastType {
  show: boolean;
  message: string;
}

export type PageType = 'home' | 'store' | 'community' | 'cart';