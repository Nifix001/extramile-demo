// utils/supabaseAuth.ts

import { supabase } from '@/lib/supabase';

export const authService = {
  // Sign up with email and password
  signUp: async (email: string, password: string, name: string, phone: string) => {
    try {
      // Create auth user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (authError) throw authError;

      if (authData.user) {
        // Create user profile
        const { error: profileError } = await supabase
          .from('users')
          .insert([
            {
              id: authData.user.id,
              email,
              name,
              phone,
            },
          ]);

        if (profileError) throw profileError;

        return { success: true, user: { id: authData.user.id, email, name, phone } };
      }

      return { success: false, error: 'Failed to create user' };
    } catch (error: any) {
      console.error('Sign up error:', error);
      return { success: false, error: error.message || 'Sign up failed' };
    }
  },

  // Login with email and password
  login: async (email: string, password: string) => {
    try {
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) throw authError;

      if (authData.user) {
        // Get user profile
        const { data: profile, error: profileError } = await supabase
          .from('users')
          .select('*')
          .eq('id', authData.user.id)
          .single();

        if (profileError) throw profileError;

        return { 
          success: true, 
          user: { 
            id: profile.id, 
            email: profile.email, 
            name: profile.name, 
            phone: profile.phone 
          } 
        };
      }

      return { success: false, error: 'Login failed' };
    } catch (error: any) {
      console.error('Login error:', error);
      return { success: false, error: error.message || 'Invalid email or password' };
    }
  },

  // Logout
  logout: async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      return { success: true };
    } catch (error: any) {
      console.error('Logout error:', error);
      return { success: false, error: error.message };
    }
  },

  // Get current user
  getCurrentUser: async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        const { data: profile } = await supabase
          .from('users')
          .select('*')
          .eq('id', user.id)
          .single();

        if (profile) {
          return { 
            id: profile.id, 
            email: profile.email, 
            name: profile.name, 
            phone: profile.phone 
          };
        }
      }
      
      return null;
    } catch (error) {
      console.error('Get current user error:', error);
      return null;
    }
  },

  // Check if user is logged in
  isAuthenticated: async () => {
    const { data: { session } } = await supabase.auth.getSession();
    return !!session;
  },
};