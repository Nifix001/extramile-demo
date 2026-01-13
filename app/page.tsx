// src/app/page.tsx

'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import SignUpModal from '@/src/components/SignUpModal';
import Toast from '@/src/components/Toast';
import HomePage from '@/src/components/HomePage';
import StorePage from '@/src/components/StorePage';
import CommunityPage from '@/src/components/CommunityPage';
import CartPage from '@/src/components/CartPage';
import { ASSETS, COMMUNITY_POSTS } from '@/src/data/dummy-data';
import { sendToWhatsApp } from '@/src/utils/whatsapp';
import { Asset, PageType, ToastType } from '@/src/types';

export default function Home() {
  const [isAuth, setIsAuth] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [cart, setCart] = useState<Asset[]>([]);
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [toast, setToast] = useState<ToastType>({ show: false, message: '' });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isAuth) setShowModal(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isAuth]);

  const showToast = (message: string) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: '' }), 3000);
  };

  const addToCart = (asset: Asset) => {
    if (!isAuth) {
      showToast('Please sign up to add items to cart!');
      setShowModal(true);
      return;
    }
    setCart([...cart, asset]);
    showToast('Added to cart!');
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    sendToWhatsApp(cart);
  };

  const handleSignUp = (email: string) => {
    setIsAuth(true);
    setShowModal(false);
    showToast(`Welcome! You're signed up with ${email}`);
  };

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
    showToast('Item removed from cart');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toast toast={toast} />
      
      <SignUpModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        onSignUp={handleSignUp} 
      />

      <Header 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        cartCount={cart.length}
        isAuth={isAuth}
        onSignUpClick={() => setShowModal(true)}
      />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {currentPage === 'home' && (
          <HomePage onShopNowClick={() => setCurrentPage('store')} />
        )}

        {currentPage === 'store' && (
          <StorePage assets={ASSETS} onAddToCart={addToCart} />
        )}

        {currentPage === 'community' && (
          <CommunityPage posts={COMMUNITY_POSTS} />
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