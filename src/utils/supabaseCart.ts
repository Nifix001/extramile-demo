// utils/supabaseCart.ts

import { supabase } from '@/lib/supabase';
import { Asset } from '@/src/types';

export const cartService = {
  // Get user's cart
  getCart: async (userId: string): Promise<Asset[]> => {
    try {
      const { data, error } = await supabase
        .from('cart_items')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (error) throw error;

      return (data || []).map(item => ({
        id: item.asset_id,
        name: item.asset_name,
        price: item.asset_price,
        category: item.asset_category,
        image: item.asset_image,
      }));
    } catch (error) {
      console.error('Get cart error:', error);
      return [];
    }
  },

  // Add item to cart
  addToCart: async (userId: string, asset: Asset) => {
    try {
      const { error } = await supabase
        .from('cart_items')
        .insert([{
          user_id: userId,
          asset_id: asset.id,
          asset_name: asset.name,
          asset_price: asset.price,
          asset_category: asset.category,
          asset_image: asset.image,
        }]);

      if (error) throw error;
      return { success: true };
    } catch (error) {
      console.error('Add to cart error:', error);
      return { success: false };
    }
  },

  // Remove item from cart
  removeFromCart: async (userId: string, assetId: number) => {
    try {
      // Get the first item with this asset_id (in case of duplicates)
      const { data: items } = await supabase
        .from('cart_items')
        .select('id')
        .eq('user_id', userId)
        .eq('asset_id', assetId)
        .limit(1);

      if (items && items.length > 0) {
        const { error } = await supabase
          .from('cart_items')
          .delete()
          .eq('id', items[0].id);

        if (error) throw error;
      }

      return { success: true };
    } catch (error) {
      console.error('Remove from cart error:', error);
      return { success: false };
    }
  },

  // Clear entire cart
  clearCart: async (userId: string) => {
    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('user_id', userId);

      if (error) throw error;
      return { success: true };
    } catch (error) {
      console.error('Clear cart error:', error);
      return { success: false };
    }
  },
};