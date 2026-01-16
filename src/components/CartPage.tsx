
import React from 'react';
import { ShoppingCart, MessageCircle } from 'lucide-react';
import { Asset } from '@/src/types';
import Image from 'next/image';

interface CartPageProps {
  cart: Asset[];
  onRemoveItem: (index: number) => void;
  onCheckout: () => void;
}

export default function CartPage({ cart, onRemoveItem, onCheckout }: CartPageProps) {
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
              <div className="flex items-center justify-center w-40 h-40 text-center">
                      <Image src={item.image} alt='image' width={200} height={250} className='object-fill' unoptimized />
                    </div>
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-green-600 font-semibold">₦{item.price.toLocaleString()}</p>
              </div>
            </div>
            <button
              onClick={() => onRemoveItem(index)}
              className="text-red-500 hover:text-red-700 font-medium transition-colors"
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
          <button
            onClick={onCheckout}
            className="w-full bg-white text-green-600 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} />
            Complete Purchase
          </button>
        </div>
      </div>
    </div>
  );
}