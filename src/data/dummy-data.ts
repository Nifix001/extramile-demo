import { Asset, CommunityPost, ToastType } from '@/src/types';

export const ASSETS: Asset[] = [
  { 
    id: 1, 
    name: 'Laptop HP EliteBook', 
    price: 450000, 
    category: 'Electronics', 
    image: '💻' 
  },
  { 
    id: 2, 
    name: 'Solar Panel 200W', 
    price: 85000, 
    category: 'Solar', 
    image: '☀️' 
  },
  { 
    id: 3, 
    name: 'Generator 5KVA', 
    price: 320000, 
    category: 'Power', 
    image: '⚡' 
  },
  { 
    id: 4, 
    name: 'Refrigerator LG', 
    price: 280000, 
    category: 'Appliances', 
    image: '🧊' 
  },
  { 
    id: 5, 
    name: 'Washing Machine', 
    price: 195000, 
    category: 'Appliances', 
    image: '🌀' 
  },
  { 
    id: 6, 
    name: 'iPhone 13 Pro', 
    price: 520000, 
    category: 'Electronics', 
    image: '📱' 
  },
  { 
    id: 7, 
    name: 'Air Conditioner 1.5HP', 
    price: 235000, 
    category: 'Appliances', 
    image: '❄️' 
  },
  { 
    id: 8, 
    name: 'Inverter Battery', 
    price: 125000, 
    category: 'Power', 
    image: '🔋' 
  },
];

export const COMMUNITY_POSTS: CommunityPost[] = [
  { 
    id: 1, 
    user: 'John D.', 
    content: 'Just bought a solar panel! Installation was smooth. Highly recommended!', 
    likes: 12, 
    time: '2h ago' 
  },
  { 
    id: 2, 
    user: 'Sarah M.', 
    content: 'The credit option made it easy for me to get my dream laptop. Thank you!', 
    likes: 8, 
    time: '5h ago' 
  },
  { 
    id: 3, 
    user: 'Ahmed K.', 
    content: 'Anyone has experience with the 5KVA generator? Thinking of buying one.', 
    likes: 5, 
    time: '1d ago' 
  },
  { 
    id: 4, 
    user: 'Blessing O.', 
    content: 'Customer service is excellent! They helped me choose the right washing machine.', 
    likes: 15, 
    time: '2d ago' 
  },
];