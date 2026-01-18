// lib/supabase.ts

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env.local file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface DbUser {
  id: string;
  email: string;
  name: string;
  phone?: string;
  created_at: string;
}

export interface DbPost {
  id: string;
  user_id: string;
  user_name: string;
  content: string;
  created_at: string;
}

export interface DbReply {
  id: string;
  post_id: string;
  user_id: string;
  user_name: string;
  content: string;
  created_at: string;
}

export interface DbCartItem {
  id: string;
  user_id: string;
  asset_id: number;
  asset_name: string;
  asset_price: number;
  asset_category: string;
  asset_image: string;
  created_at: string;
}