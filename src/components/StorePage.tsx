// src/components/StorePage.tsx

'use client';

import React, { useState, useMemo } from 'react';
import { Asset } from '@/src/types';
import ProductCard from './ProductCard';
import { Search, ChevronDown, X } from 'lucide-react';
import { CATEGORIES } from '@/src/data/dummy-data';

interface StorePageProps {
  assets: Asset[];
  onAddToCart: (asset: Asset) => void;
}

type SortOption = 'featured' | 'price-low' | 'price-high' | 'name-az' | 'name-za';

export default function StorePage({ assets, onAddToCart }: StorePageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'name-az', label: 'Name: A-Z' },
    { value: 'name-za', label: 'Name: Z-A' }
  ];

  const filteredAndSortedAssets = useMemo(() => {
    let filtered = assets;

    // Filter by search
    if (searchTerm) {
      filtered = filtered.filter(asset => 
        asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        asset.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'All Categories') {
      filtered = filtered.filter(asset => asset.category === selectedCategory);
    }

    // Sort
    const sorted = [...filtered];
    switch (sortBy) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'name-az':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-za':
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // Featured - keep original order
        break;
    }

    return sorted;
  }, [assets, searchTerm, selectedCategory, sortBy]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All Categories');
    setSortBy('featured');
  };

  const hasFilters = searchTerm || selectedCategory !== 'All Categories' || sortBy !== 'featured';

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Our Products</h2>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-md p-4 mb-6">
        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search Assets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
          />
        </div>

        {/* Filters Row */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Category Dropdown */}
          <div className="relative flex-1 min-w-[200px]">
            <button
              onClick={() => {
                setShowCategoryDropdown(!showCategoryDropdown);
                setShowSortDropdown(false);
              }}
              className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-300 rounded-lg hover:border-green-500 transition-colors"
            >
              <span className="text-gray-700">{selectedCategory}</span>
              <ChevronDown size={20} className="text-gray-400" />
            </button>

            {showCategoryDropdown && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-64 overflow-y-auto">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setShowCategoryDropdown(false);
                    }}
                    className={`w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors ${
                      selectedCategory === category ? 'bg-green-50 text-green-700 font-semibold' : 'text-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="relative flex-1 min-w-[200px]">
            <button
              onClick={() => {
                setShowSortDropdown(!showSortDropdown);
                setShowCategoryDropdown(false);
              }}
              className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-300 rounded-lg hover:border-green-500 transition-colors"
            >
              <span className="text-gray-700">
                {sortOptions.find(opt => opt.value === sortBy)?.label || 'Sort By'}
              </span>
              <ChevronDown size={20} className="text-gray-400" />
            </button>

            {showSortDropdown && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSortBy(option.value as SortOption);
                      setShowSortDropdown(false);
                    }}
                    className={`w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors ${
                      sortBy === option.value ? 'bg-green-50 text-green-700 font-semibold' : 'text-gray-700'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Clear Filters Button */}
          {hasFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-2 px-4 py-3 text-gray-600 hover:text-red-600 transition-colors"
            >
              <X size={20} />
              <span className="hidden md:inline">Clear Filters</span>
            </button>
          )}
        </div>

        {/* Active Filters Display */}
        {hasFilters && (
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200">
            {searchTerm && (
              <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                Search: "{searchTerm}"
                <button onClick={() => setSearchTerm('')} className="hover:text-green-900">
                  <X size={14} />
                </button>
              </span>
            )}
            {selectedCategory !== 'All Categories' && (
              <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                {selectedCategory}
                <button onClick={() => setSelectedCategory('All Categories')} className="hover:text-blue-900">
                  <X size={14} />
                </button>
              </span>
            )}
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="mb-4 text-gray-600">
        Showing {filteredAndSortedAssets.length} of {assets.length} products
      </div>

      {/* Products Grid */}
      {filteredAndSortedAssets.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-6">
          {filteredAndSortedAssets.map(asset => (
            <ProductCard 
              key={asset.id} 
              asset={asset} 
              onAddToCart={onAddToCart} 
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-md p-12 text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">No products found</h3>
          <p className="text-gray-600 mb-6">
            Try adjusting your search or filters to find what you're looking for
          </p>
          <button
            onClick={clearFilters}
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}