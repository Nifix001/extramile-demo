// src/components/CartPage.tsx

import React from 'react';
import { ShoppingCart, MessageCircle } from 'lucide-react';
import { Asset } from '@/src/types';

interface CartPageProps {
  cart: Asset[];
  onRemoveItem: (index: number) => void;
  onCheckout: () => void;
  isAuthenticated: boolean;
}

export default function CartPage({ cart, onRemoveItem, onCheckout, isAuthenticated }: CartPageProps) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return (
      <div>
        <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
        <div className="bg-white p-12 rounded-xl text-center">
          <ShoppingCart size={64} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500 text-lg">Your cart is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
      <div className="space-y-4">
        {cart.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-4xl">{item.image}</div>
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
                <p className="text-green-600 font-semibold">₦{item.price.toLocaleString()}</p>
              </div>
            </div>
            <button
              onClick={() => onRemoveItem(index)}
              className="text-red-500 hover:text-red-700 font-medium transition-colors px-4 py-2"
            >
              Remove
            </button>
          </div>
        ))}
        
        <div className="bg-green-600 text-white p-6 rounded-xl">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold">Total:</span>
            <span className="text-2xl font-bold">
              ₦{total.toLocaleString()}
            </span>
          </div>
          
          {isAuthenticated ? (
            <button
              onClick={onCheckout}
              className="w-full bg-white text-green-600 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Complete Purchase
            </button>
          ) : (
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-sm mb-3">Please login to complete your purchase</p>
              <button
                onClick={onCheckout}
                className="w-full bg-white text-green-600 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Login to Continue
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}