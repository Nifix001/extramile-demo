
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

export interface ToastType {
  show: boolean;
  message: string;
}

export type PageType = 'home' | 'store' | 'community' | 'cart';