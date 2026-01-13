// src/components/HomePage.tsx

import React from 'react';

interface HomePageProps {
  onShopNowClick: () => void;
}

export default function HomePage({ onShopNowClick }: HomePageProps) {
  return (
    <div>
      <div className="bg-linear-to-r from-green-600 to-green-400 rounded-2xl p-12 text-white mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Buy Assets on Credit
        </h1>
        <p className="text-xl mb-6 opacity-90">
          Gadgets, solar panels, generators, appliances & more
        </p>
        <button
          onClick={onShopNowClick}
          className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110 animate-bounce"
        >
          Shop Now
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-4">💳</div>
          <h3 className="text-xl font-bold mb-2">Buy on Credit</h3>
          <p className="text-gray-600">Own your assets now, pay later with flexible plans</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-4">🚚</div>
          <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
          <p className="text-gray-600">Get your items delivered quickly to your location</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-4">🛡️</div>
          <h3 className="text-xl font-bold mb-2">Warranty Support</h3>
          <p className="text-gray-600">All items come with warranty and support</p>
        </div>
      </div>
    </div>
  );
}