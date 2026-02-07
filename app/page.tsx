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
import { cartService } from '@/src/utils/supabaseCart';
import { newsletterService } from '@/src/utils/supabaseNewsletter';
import { authService } from '@/src/utils/supabaseAuth';
import ExtraCoopPage from '@/src/components/ExtraCoopPage';
import PaymentMethodModal from '@/src/components/PaymentMethodModal';
import SignUpModal from '@/src/components/SignUpModal';


type AuthPage = 'main' | 'login' | 'signup';

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

export default function Home() {
  const [authPage, setAuthPage] = useState<AuthPage>('main');
  const [isAuth, setIsAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [cart, setCart] = useState<Asset[]>([]);
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [toast, setToast] = useState<ToastType>({ show: false, message: '' });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    setIsLoading(true);
    const user = await authService.getCurrentUser();
    
    if (user) {
      setIsAuth(true);
      setCurrentUser(user);
      loadCart(user.id);
    } else {
      // Show sign up modal for unauthenticated users after 3 seconds
      setTimeout(() => {
        setShowSignUpModal(true);
      }, 3000);
    }
    setIsLoading(false);
  };

  const loadCart = async (userId: string) => {
    const cartItems = await cartService.getCart(userId);
    setCart(cartItems);
  };

  const showToast = (message: string) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: '' }), 3000);
  };

  const handleLogin = async (email: string, password: string) => {
    const result = await authService.login(email, password);
    
    if (result.success && result.user) {
      setIsAuth(true);
      setCurrentUser(result.user);
      setAuthPage('main');
      loadCart(result.user.id);
      showToast(`Welcome back, ${result.user.name}!`);
    } else {
      showToast(result.error || 'Login failed');
    }
  };

  const handleSignUp = async (name: string, email: string, phone: string, password: string) => {
    const result = await authService.signUp(email, password, name, phone);
    
    if (result.success && result.user) {
      setIsAuth(true);
      setCurrentUser(result.user);
      setAuthPage('main');
      showToast(`Welcome, ${name}! Your account has been created.`);
    } else {
      showToast(result.error || 'Sign up failed');
    }
  };

  const handleLogout = async () => {
    await authService.logout();
    setIsAuth(false);
    setCurrentUser(null);
    setCart([]);
    setCurrentPage('home');
    showToast('Logged out successfully');
  };

  const handleNewsletterSubscribe = async (email: string) => {
    const result = await newsletterService.subscribe(email);
    showToast(result.message || 'Thanks for subscribing!');
  };

  const addToCart = async (asset: Asset) => {
    if (!isAuth || !currentUser) {
      showToast('Please login to add items to cart!');
      setAuthPage('login');
      return;
    }

    const result = await cartService.addToCart(currentUser.id, asset);
    if (result.success) {
      setCart([...cart, asset]);
      showToast('Added to cart!');
    } else {
      showToast('Failed to add to cart');
    }
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    
    if (!isAuth) {
      setAuthPage('login');
      showToast('Please login to complete your purchase');
      return;
    }
    
    // Show payment method selection modal
    setShowPaymentModal(true);
  };

  const handlePaymentMethodSelect = (method: 'full' | 'installment') => {
    if (method === 'full') {
      // Full payment - send to WhatsApp
      sendToWhatsApp(cart);
      showToast('Redirecting to WhatsApp for full payment...');
    } else {
      // Installment - go to ExtraCoop page
      setCurrentPage('extracoop');
      showToast('Redirecting to ExtraCoop membership...');
    }
  };

  const removeFromCart = async (index: number) => {
    if (!currentUser) return;
    
    const asset = cart[index];
    const result = await cartService.removeFromCart(currentUser.id, asset.id);
    
    if (result.success) {
      setCart(cart.filter((_, i) => i !== index));
      showToast('Item removed from cart');
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

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
      
      <SignUpModal 
        isOpen={showSignUpModal && !isAuth} 
        onClose={() => setShowSignUpModal(false)} 
        onSignUpClick={() => {
          setShowSignUpModal(false);
          setAuthPage('signup');
        }}
      />

      <PaymentMethodModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        cartItemCount={cart.length}
        onSelectPayment={handlePaymentMethodSelect}
      />

      <Header 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        cartCount={cart.length}
        isAuth={isAuth}
        userName={currentUser?.name}
        onLogout={handleLogout}
        onLoginClick={() => setAuthPage('login')}
      />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {currentPage === 'home' && (
          <HomePage 
            onShopNowClick={() => setCurrentPage('store')}
            onExtraCoopClick={() => setCurrentPage('extracoop')}
          />
        )}

        {currentPage === 'store' && (
          <StorePage 
            assets={ASSETS} 
            onAddToCart={addToCart}
            cartCount={cart.length}
            onCartClick={() => setCurrentPage('cart')}
          />
        )}

        {currentPage === 'extracoop' && (
          <ExtraCoopPage 
            isAuthenticated={isAuth}
            userName={currentUser?.name}
            userEmail={currentUser?.email}
            userPhone={currentUser?.phone}
            isMember={false} // Will be true after KYC verification
            onJoinClick={() => {
              if (!isAuth) {
                setAuthPage('login');
                showToast('Login to join ExtraCoop membership');
              } else {
                showToast('Membership enrollment coming soon!');
              }
            }}
          />
        )}

        {currentPage === 'community' && (
          <CommunityPage 
            currentUserId={currentUser?.id || 'guest'}
            currentUserName={currentUser?.name || 'Guest'}
            isAuthenticated={isAuth}
            onLoginRequired={() => {
              showToast('Please login to interact with posts');
              setAuthPage('login');
            }}
          />
        )}

        {currentPage === 'cart' && (
          <CartPage 
            cart={cart} 
            onRemoveItem={removeFromCart} 
            onCheckout={handleCheckout}
            isAuthenticated={isAuth}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}