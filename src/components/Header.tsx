// src/components/Header.tsx

'use client';

import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Home, Store, Users, LogOut, User, Award } from 'lucide-react';
import { PageType } from '@/src/types';

interface HeaderProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
  cartCount: number;
  isAuth: boolean;
  userName?: string;
  onLogout: () => void;
  onLoginClick: () => void;
}

export default function Header({ 
  currentPage, 
  setCurrentPage, 
  cartCount, 
  isAuth,
  userName,
  onLogout,
  onLoginClick
}: HeaderProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const NavButton = ({ icon: Icon, label, page }: { icon: any; label: string; page: PageType }) => (
    <button
      onClick={() => { 
        setCurrentPage(page); 
        setShowMenu(false); 
      }}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
        currentPage === page 
          ? 'bg-green-600 text-white scale-105' 
          : 'hover:bg-green-100 text-gray-700'
      }`}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </button>
  );

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
          <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
            E
          </div>
          <span className="text-xl font-bold text-gray-800">ExtraMile</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4">
          <NavButton icon={Home} label="Home" page="home" />
          <NavButton icon={Store} label="Store" page="store" />
          <NavButton icon={Award} label="ExtraCoopNG" page="extracoop" />
          <NavButton icon={Users} label="Community" page="community" />
        </nav>

        <div className="flex items-center gap-4">
          {/* Cart */}
          {isAuth && (
            <button
              onClick={() => setCurrentPage('cart')}
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-all duration-300 hover:scale-110"
            >
              <ShoppingCart size={24} className="text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            {showMenu ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Auth Buttons */}
          {isAuth ? (
            <div className="hidden md:block relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-green-200 transition-all"
              >
                <User size={20} />
                <span>{userName || 'User'}</span>
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-200">
                  <button
                    onClick={() => {
                      onLogout();
                      setShowUserMenu(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2 text-gray-700"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={onLoginClick}
              className="hidden md:block bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 hover:scale-105"
            >
              Login
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden border-t bg-white p-4 space-y-2">
          <NavButton icon={Home} label="Home" page="home" />
          <NavButton icon={Store} label="Store" page="store" />
          <NavButton icon={Award} label="ExtraCoop" page="extracoop" />
          <NavButton icon={Users} label="Community" page="community" />
          
          {isAuth ? (
            <button
              onClick={() => {
                onLogout();
                setShowMenu(false);
              }}
              className="w-full flex items-center gap-2 px-4 py-2 rounded-lg text-red-600 hover:bg-red-50"
            >
              <LogOut size={20} />
              <span className="font-medium">Logout</span>
            </button>
          ) : (
            <button
              onClick={() => {
                onLoginClick();
                setShowMenu(false);
              }}
              className="w-full bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700"
            >
              Login
            </button>
          )}
        </div>
      )}
    </header>
  );
}