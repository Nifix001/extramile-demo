// src/components/DiscountedStorePage.tsx

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Tag, Star, ShoppingCart, ArrowRight, X } from 'lucide-react';

// Add this style tag to your global CSS or component
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out;
  }
  
  .animate-fadeInUp {
    animation: fadeInUp 0.6s ease-out;
  }
  
  .animate-slideDown {
    animation: slideDown 0.5s ease-out;
  }
  
  .animate-slideInRight {
    animation: slideInRight 0.6s ease-out;
  }
  
  .animate-scaleIn {
    animation: scaleIn 0.5s ease-out;
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
`;

interface DiscountedProduct {
  id: number;  // Changed from string to number to match Asset type
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  isFeatured?: boolean;
}

interface DiscountedStorePageProps {
  onAddToCart: (product: DiscountedProduct) => void;
  cartCount: number;
  onCartClick: () => void;
}

export default function DiscountedStorePage({ onAddToCart, cartCount, onCartClick }: DiscountedStorePageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<DiscountedProduct | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Sample featured discounted products for carousel (4 featured products)
  const featuredProducts: DiscountedProduct[] = [
    {
      id: 1,
      name: 'Solar Power System 5KVA',
      price: 680000,
      originalPrice: 850000,
      discountedPrice: 680000,
      discount: 20,
      image: '🔋',
      category: 'ExtraPower',
      isFeatured: true,
      description: 'Complete solar power solution with panels, inverter and batteries. Includes 8 solar panels (450W each), 5KVA hybrid inverter, 4 batteries (200Ah each), mounting structure, and installation kit.'
    },
    {
      id: 2,
      name: 'TVS Apache RTR 160',
      price: 960000,
      originalPrice: 1200000,
      discountedPrice: 960000,
      discount: 20,
      image: '🏍️',
      category: 'ExtraRide',
      isFeatured: true,
      description: 'Premium motorcycle with advanced features and fuel efficiency. 160cc engine, digital speedometer, LED tail lamp, disc brakes front and rear, and excellent mileage of 45-50 km/l.'
    },
    {
      id: 3,
      name: 'LG 2HP Air Conditioner',
      price: 315000,
      originalPrice: 420000,
      discountedPrice: 315000,
      discount: 25,
      image: '❄️',
      category: 'Home Appliances',
      isFeatured: true,
      description: 'Energy-efficient split AC with smart cooling technology. Inverter compressor, 5-star rating, wifi enabled, auto-clean function, and covers up to 25 square meters effectively.'
    },
    {
      id: 4,
      name: 'Samsung 500L Refrigerator',
      price: 487500,
      originalPrice: 650000,
      discountedPrice: 487500,
      discount: 25,
      image: '🧊',
      category: 'Home Appliances',
      isFeatured: true,
      description: 'Double door fridge with inverter technology and water dispenser. Digital temperature control, frost-free operation, energy efficient, and includes ice maker and vegetable crisper.'
    }
  ];

  // All discounted products (total of 10)
  const allDiscountedProducts: DiscountedProduct[] = [
    ...featuredProducts,
    {
      id: 5,
      name: 'Generator 8.5KVA',
      price: 440000,
      originalPrice: 550000,
      discountedPrice: 440000,
      discount: 20,
      image: '⚡',
      category: 'ExtraPower',
      description: 'Heavy-duty generator for home and business use. Copper winding, electric start, fuel-efficient engine, low noise operation, and automatic voltage regulator.'
    },
    {
      id: 6,
      name: 'Washing Machine 10KG',
      price: 304000,
      originalPrice: 380000,
      discountedPrice: 304000,
      discount: 20,
      image: '🌀',
      category: 'Home Appliances',
      description: 'Automatic front load washing machine with steam wash. Multiple wash programs, inverter motor, child lock, delay start, and energy-efficient operation.'
    },
    {
      id: 7,
      name: 'Bajaj Boxer Motorcycle',
      price: 600000,
      originalPrice: 800000,
      discountedPrice: 600000,
      discount: 25,
      image: '🏍️',
      category: 'ExtraRide',
      description: 'Reliable and fuel-efficient motorcycle for daily commute. 100cc engine, excellent fuel economy of 70 km/l, comfortable seating, and low maintenance.'
    },
    {
      id: 8,
      name: 'Laptop HP Core i5',
      price: 360000,
      originalPrice: 450000,
      discountedPrice: 360000,
      discount: 20,
      image: '💻',
      category: 'Electronics',
      description: '8GB RAM, 512GB SSD, perfect for work and entertainment. 11th Gen Intel Core i5, 15.6" FHD display, backlit keyboard, and Windows 11 pre-installed.'
    },
    {
      id: 9,
      name: 'Solar Inverter 3.5KVA',
      price: 256000,
      originalPrice: 320000,
      discountedPrice: 256000,
      discount: 20,
      image: '🔌',
      category: 'ExtraPower',
      description: 'Pure sine wave inverter with MPPT charge controller. Compatible with lithium and lead-acid batteries, LCD display, and multiple protection features.'
    },
    {
      id: 10,
      name: 'Gas Cooker 4 Burner',
      price: 135000,
      originalPrice: 180000,
      discountedPrice: 135000,
      discount: 25,
      image: '🔥',
      category: 'Home Appliances',
      description: 'Standing gas cooker with oven and auto ignition. 4 burners with different heat capacities, spacious oven, grill function, and safety flame failure device.'
    }
  ];

  // Autoplay carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };

  const openModal = (product: DiscountedProduct) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product: DiscountedProduct) => {
    onAddToCart(product);
    closeModal();
  };

  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString()}`;
  };

  return (
    <>
      <style>{styles}</style>
      <div className="space-y-12 animate-fadeIn">
      {/* Header */}
      <div className="text-center animate-slideDown">
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-6 py-3 rounded-full mb-4">
          <Tag size={20} />
          <span className="font-bold">Special Discounts</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Discounted Products
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Save big on quality products! Limited time offers on selected items across all categories.
        </p>
      </div>

      {/* Featured Products Carousel */}
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden animate-fadeInUp">
        <div className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-8 py-4">
          <div className="flex items-center gap-2">
            <Star className="fill-yellow-300 text-yellow-300 animate-pulse" size={24} />
            <h2 className="text-2xl font-bold">Featured Discounts</h2>
          </div>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredProducts.map((product) => (
                <div key={product.id} className="min-w-full px-8 py-10">
                  <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
                    {/* Product Image */}
                    <div className="relative animate-scaleIn">
                      <div className="absolute -top-4 -right-4 bg-red-500 text-white px-6 py-3 rounded-full shadow-lg z-10 animate-bounce">
                        <span className="text-2xl font-bold">{product.discount}% OFF</span>
                      </div>
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                        <div className="text-9xl animate-float">{product.image}</div>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="animate-slideInRight">
                      <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        {product.category}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-lg mb-6 leading-relaxed line-clamp-3">
                        {product.description}
                      </p>

                      {/* Pricing */}
                      <div className="mb-6">
                        <div className="flex items-baseline gap-4 mb-2">
                          <span className="text-4xl font-bold text-green-600 animate-pulse">
                            {formatPrice(product.discountedPrice)}
                          </span>
                          <span className="text-2xl text-gray-400 line-through">
                            {formatPrice(product.originalPrice)}
                          </span>
                        </div>
                        <div className="text-green-600 font-semibold">
                          You save {formatPrice(product.originalPrice - product.discountedPrice)}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <button
                          onClick={() => onAddToCart(product)}
                          className="flex-1 bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                        >
                          <ShoppingCart size={20} />
                          Add to Cart
                        </button>
                        <button
                          onClick={() => openModal(product)}
                          className="bg-gray-100 text-gray-700 px-6 py-4 rounded-xl font-bold hover:bg-gray-200 transition-all duration-300"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-green-600 text-gray-800 hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 group z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-green-600 text-gray-800 hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 group z-10"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 pb-6">
            {featuredProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'w-8 bg-green-600' 
                    : 'w-3 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* All Discounted Products Section */}
      <div className="animate-fadeInUp">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-800">All Discounted Products</h2>
          <div className="text-gray-600">
            <span className="font-semibold">{allDiscountedProducts.length}</span> products on sale
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allDiscountedProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Product Image & Badge */}
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-8">
                {product.isFeatured && (
                  <div className="absolute top-3 left-3 bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 animate-pulse">
                    <Star size={12} className="fill-current" />
                    Featured
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-2 rounded-full text-sm font-bold animate-bounce">
                  -{product.discount}%
                </div>
                <div className="text-7xl flex justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer" onClick={() => openModal(product)}>
                  {product.image}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="text-xs text-green-600 font-semibold mb-2">
                  {product.category}
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-1 cursor-pointer hover:text-green-600 transition-colors" onClick={() => openModal(product)}>
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl font-bold text-green-600">
                      {formatPrice(product.discountedPrice)}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  </div>
                  <div className="text-xs text-green-600 font-semibold">
                    Save {formatPrice(product.originalPrice - product.discountedPrice)}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => onAddToCart(product)}
                    className="flex-1 bg-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
                  >
                    <ShoppingCart size={16} />
                    Add
                  </button>
                  <button
                    onClick={() => openModal(product)}
                    className="bg-gray-100 text-gray-700 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-3xl p-8 md:p-12 text-center text-white animate-fadeInUp">
        <Tag className="mx-auto mb-6 animate-bounce" size={64} />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't Miss Out!</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          These special discounts won't last forever. Grab your favorite products at unbeatable prices today!
        </p>
        <div className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg">
          <span>Limited Time Offer</span>
          <ArrowRight size={20} />
        </div>
      </div>

      {/* Product Details Modal */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={closeModal}>
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-green-600 to-emerald-500 text-white px-6 py-4 flex items-center justify-between z-10">
              <h3 className="text-2xl font-bold">Product Details</h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="relative">
                  <div className="absolute -top-4 -right-4 bg-red-500 text-white px-6 py-3 rounded-full shadow-lg z-10 animate-pulse">
                    <span className="text-2xl font-bold">{selectedProduct.discount}% OFF</span>
                  </div>
                  {selectedProduct.isFeatured && (
                    <div className="absolute -top-4 -left-4 bg-yellow-400 text-gray-800 px-4 py-2 rounded-full shadow-lg z-10 flex items-center gap-1">
                      <Star size={16} className="fill-current" />
                      <span className="font-bold">Featured</span>
                    </div>
                  )}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-16 flex items-center justify-center">
                    <div className="text-9xl animate-float">{selectedProduct.image}</div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex flex-col">
                  <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 self-start">
                    {selectedProduct.category}
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    {selectedProduct.name}
                  </h2>

                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {selectedProduct.description}
                  </p>

                  {/* Features/Specifications */}
                  <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                    <h4 className="font-bold text-gray-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>High quality and durable construction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Energy efficient operation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Comprehensive warranty included</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Professional installation available</span>
                      </li>
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 mb-6">
                    <div className="flex items-baseline gap-4 mb-2">
                      <span className="text-4xl font-bold text-green-600">
                        {formatPrice(selectedProduct.discountedPrice)}
                      </span>
                      <span className="text-2xl text-gray-400 line-through">
                        {formatPrice(selectedProduct.originalPrice)}
                      </span>
                    </div>
                    <div className="text-green-600 font-semibold text-lg">
                      You save {formatPrice(selectedProduct.originalPrice - selectedProduct.discountedPrice)} ({selectedProduct.discount}% OFF)
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 mt-auto">
                    <button
                      onClick={() => handleAddToCart(selectedProduct)}
                      className="flex-1 bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                    >
                      <ShoppingCart size={20} />
                      Add to Cart
                    </button>
                    <button
                      onClick={closeModal}
                      className="bg-gray-100 text-gray-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition-all duration-300"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Cart Button */}
      {cartCount > 0 && (
        <button
          onClick={onCartClick}
          className="fixed bottom-8 right-8 z-40 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-all duration-300 hover:scale-110 group animate-bounce"
        >
          <ShoppingCart size={28} className="group-hover:animate-pulse" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center animate-pulse">
            {cartCount}
          </span>
        </button>
      )}
    </div>
    </>
  );
}