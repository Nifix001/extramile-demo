// src/components/NewsletterModal.tsx

import React, { useState } from 'react';
import { X, Mail, Gift } from 'lucide-react';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubscribe: (email: string) => void;
}

export default function NewsletterModal({ isOpen, onClose, onSubscribe }: NewsletterModalProps) {
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onSubscribe(email);
      setEmail('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl transform transition-all relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift className="text-white" size={40} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Get Exclusive Offers! 🎉
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Subscribe to our newsletter and be the first to know about special deals, new products, and credit offers!
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-all duration-300 hover:scale-105 mb-4"
          >
            Subscribe Now
          </button>

          <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
            <span>✓ Weekly deals</span>
            <span>•</span>
            <span>✓ New arrivals</span>
            <span>•</span>
            <span>✓ Credit tips</span>
          </div>
        </form>

        <p className="text-xs text-center text-gray-400 mt-4">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}