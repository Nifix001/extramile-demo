
import React from 'react';
import { Asset } from '@/src/types';
import ProductCard from './ProductCard';

interface StorePageProps {
  assets: Asset[];
  onAddToCart: (asset: Asset) => void;
}

export default function StorePage({ assets, onAddToCart }: StorePageProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Our Products</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {assets.map(asset => (
          <ProductCard 
            key={asset.id} 
            asset={asset} 
            onAddToCart={onAddToCart} 
          />
        ))}
      </div>
    </div>
  );
}