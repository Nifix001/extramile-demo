
import React from 'react';
import { Asset } from '@/src/types';

interface ProductCardProps {
  asset: Asset;
  onAddToCart: (asset: Asset) => void;
}

export default function ProductCard({ asset, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="text-6xl p-8 bg-linear-to-br from-green-50 to-green-100 text-center">
        {asset.image}
      </div>
      <div className="p-6">
        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
          {asset.category}
        </span>
        <h3 className="text-xl font-bold mt-2 mb-2">{asset.name}</h3>
        <p className="text-2xl font-bold text-green-600 mb-4">
          ₦{asset.price.toLocaleString()}
        </p>
        <button
          onClick={() => onAddToCart(asset)}
          className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 hover:scale-105"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}