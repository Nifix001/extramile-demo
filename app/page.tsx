// src/app/page.tsx

'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import Toast from '@/src/components/Toast';
import HomePage from '@/src/components/HomePage';
import StorePage from '@/src/components/StorePage';
import CommunityPage from '@/src/components/CommunityPage';
import CartPage from '@/src/components/CartPage';
import { ASSETS, COMMUNITY_POSTS } from '@/src/data/dummy-data';
import { sendToWhatsApp } from '@/src/utils/whatsapp';
import { Asset, PageType, ToastType } from '@/src/types';
import SignUpPage from '@/src/components/SignUpPage';
import NewsletterModal from '@/src/components/SignUpModal';
import LoginPage from '@/src/components/LoginPage';
import { seedCommunityPosts } from '@/src/utils/seedCommunity';

type AuthPage = 'main' | 'login' | 'signup';

export default function Home() {
  const [authPage, setAuthPage] = useState<AuthPage>('main');
  const [isAuth, setIsAuth] = useState(false);
  const [userName, setUserName] = useState('');
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);
  const [cart, setCart] = useState<Asset[]>([]);
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [toast, setToast] = useState<ToastType>({ show: false, message: '' });

  useEffect(() => {
    // Seed community posts on first load
    seedCommunityPosts();
    
    // Check if user is already logged in (from localStorage)
    const savedUser = localStorage.getItem('extramile_user');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setIsAuth(true);
      setUserName(user.name);
    } else {
      // Show newsletter modal for unauthenticated users after 3 seconds
      const timer = setTimeout(() => {
        setShowNewsletterModal(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const showToast = (message: string) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: '' }), 3000);
  };

  const handleLogin = (email: string, password: string) => {
    // Simple demo login - in production, validate against backend
    const savedUsers = localStorage.getItem('extramile_users');
    if (savedUsers) {
      const users = JSON.parse(savedUsers);
      const user = users.find((u: any) => u.email === email && u.password === password);
      
      if (user) {
        setIsAuth(true);
        setUserName(user.name);
        setAuthPage('main');
        localStorage.setItem('extramile_user', JSON.stringify(user));
        showToast(`Welcome back, ${user.name}!`);
      } else {
        showToast('Invalid email or password');
      }
    } else {
      showToast('No account found. Please sign up first.');
    }
  };

  const handleSignUp = (name: string, email: string, phone: string, password: string) => {
    // Save user to localStorage (demo purposes)
    const newUser = { name, email, phone, password };
    
    const savedUsers = localStorage.getItem('extramile_users');
    const users = savedUsers ? JSON.parse(savedUsers) : [];
    
    // Check if email already exists
    if (users.some((u: any) => u.email === email)) {
      showToast('Email already registered. Please login.');
      return;
    }
    
    users.push(newUser);
    localStorage.setItem('extramile_users', JSON.stringify(users));
    localStorage.setItem('extramile_user', JSON.stringify(newUser));
    
    setIsAuth(true);
    setUserName(name);
    setAuthPage('main');
    showToast(`Welcome, ${name}! Your account has been created.`);
  };

  const handleLogout = () => {
    localStorage.removeItem('extramile_user');
    setIsAuth(false);
    setUserName('');
    setCart([]);
    setCurrentPage('home');
    showToast('Logged out successfully');
  };

  const handleNewsletterSubscribe = (email: string) => {
    // Save newsletter subscription
    const subscriptions = localStorage.getItem('extramile_newsletter') || '[]';
    const subs = JSON.parse(subscriptions);
    if (!subs.includes(email)) {
      subs.push(email);
      localStorage.setItem('extramile_newsletter', JSON.stringify(subs));
    }
    setShowNewsletterModal(false);
    showToast('Thanks for subscribing! Check your email for exclusive offers.');
  };

  const addToCart = (asset: Asset) => {
    if (!isAuth) {
      showToast('Please login to add items to cart!');
      setAuthPage('login');
      return;
    }
    setCart([...cart, asset]);
    showToast('Added to cart!');
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    sendToWhatsApp(cart);
  };

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
    showToast('Item removed from cart');
  };

  // Show login/signup pages
  if (authPage === 'login') {
    return (
      <>
        <Toast toast={toast} />
        <LoginPage 
          onLogin={handleLogin}
          onSwitchToSignup={() => setAuthPage('signup')}
        />
      </>
    );
  }

  if (authPage === 'signup') {
    return (
      <>
        <Toast toast={toast} />
        <SignUpPage 
          onSignUp={handleSignUp}
          onSwitchToLogin={() => setAuthPage('login')}
        />
      </>
    );
  }

  // Main app
  return (
    <div className="min-h-screen bg-gray-50">
      <Toast toast={toast} />
      
      <NewsletterModal 
        isOpen={showNewsletterModal && !isAuth} 
        onClose={() => setShowNewsletterModal(false)} 
        onSubscribe={handleNewsletterSubscribe} 
      />

      <Header 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        cartCount={cart.length}
        isAuth={isAuth}
        userName={userName}
        onLogout={handleLogout}
        onLoginClick={() => setAuthPage('login')}
      />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {currentPage === 'home' && (
          <HomePage onShopNowClick={() => setCurrentPage('store')} />
        )}

        {currentPage === 'store' && (
          <StorePage assets={ASSETS} onAddToCart={addToCart} />
        )}

        {currentPage === 'community' && (
          <CommunityPage 
            currentUserId={isAuth ? userName : 'guest'}
            currentUserName={userName || 'Guest'}
          />
        )}

        {currentPage === 'cart' && (
          <CartPage 
            cart={cart} 
            onRemoveItem={removeFromCart} 
            onCheckout={handleCheckout} 
          />
        )}
      </main>

      <Footer />
    </div>
  );
}