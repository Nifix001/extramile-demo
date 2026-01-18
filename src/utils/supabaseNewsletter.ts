// utils/supabaseNewsletter.ts

import { supabase } from '@/lib/supabase';

export const newsletterService = {
  // Subscribe to newsletter
  subscribe: async (email: string) => {
    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email }]);

      if (error) {
        // Check if already subscribed
        if (error.code === '23505') {
          return { success: true, message: 'Already subscribed!' };
        }
        throw error;
      }

      return { success: true, message: 'Successfully subscribed!' };
    } catch (error: any) {
      console.error('Newsletter subscribe error:', error);
      return { success: false, message: error.message || 'Subscription failed' };
    }
  },
};