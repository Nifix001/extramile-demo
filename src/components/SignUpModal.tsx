
import React, { useState } from 'react';
import { X } from 'lucide-react';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignUp: (email: string) => void;
}

export default function SignUpModal({ isOpen, onClose, onSignUp }: SignUpModalProps) {
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onSignUp(email);
      setEmail('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl transform transition-all">
        <button
          onClick={onClose}
          className="float-right text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Join ExtraMile!</h2>
        <p className="text-gray-600 mb-6">
          Sign up now to buy assets on credit and get exclusive offers!
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 hover:scale-105"
          >
            Sign Up & Subscribe
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-4 text-center">
          Get newsletters on latest offers and updates
        </p>
      </div>
    </div>
  );
}