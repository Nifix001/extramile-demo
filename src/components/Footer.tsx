
import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-16 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <Mail className="hover:text-green-400 cursor-pointer transition-colors" size={24} />
          <Phone className="hover:text-green-400 cursor-pointer transition-colors" size={24} />
          <MessageCircle className="hover:text-green-400 cursor-pointer transition-colors" size={24} />
        </div>
        <p className="text-gray-400">© 2024 ExtraMile Africa. Buy now, pay later.</p>
      </div>
    </footer>
  );
}