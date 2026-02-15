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
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop',
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
      image: 'https://imgs.search.brave.com/FIlCBzhgadwYl1zivf1DWNVcrUQEccwuI-GjYM1gTqc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YmlrZWRla2hvLmNv/bS9wcm9jZXNzZWRp/bWFnZXMvdHZzL3R2/cy1hcGFjaGUvNjQw/WDMwOS90dnMtYXBh/Y2hlNjczYzU3ZWVk/Mzg5OC5qcGc',
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
      image: 'https://imgs.search.brave.com/CbSTVfXelwejKzcvJVlPUvtCuhEIxpbi28JL_vrITTQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGcuY29tL2NvbnRl/bnQvZGFtL2NoYW5u/ZWwvd2Ntcy9oa19l/bi9pbWFnZXMvYWly/LWNvbmRpdGlvbmVy/L2hzLTEyaXB4X2F0/d2dhaGtfZWNoa19o/a19lbl9jL2dhbGxl/cnkvbGFyZ2UwNi5q/cGc_dz04MDA',
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
      image: 'https://imgs.search.brave.com/SAUNdDGSEay45Gm7jtVO5YXvvpgQEl5xmyBQx9ClRiY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hbHFh/bGFkYS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjUvMDMv/aW1hZ2UtcmVtb3Zl/YmctcHJldmlldy0z/Mi5wbmc',
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
      image: 'https://imgs.search.brave.com/3A3dS6O6P_Ed_Czl7uPE7jKcMRudrnj2-BX_1RQZr8Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5tYWRlLWluLWNo/aW5hLmNvbS8yMDJm/MGowMGNMQmJ2TVJK/TENwVy84LTVrdy04/LTVrVkEtODUwMHdh/dHQtOS01a3ctOS01/a1ZBLTk1MDB3YXR0/b3V0ZG9vci1Qb3J0/YWJsZS1HYXNvbGlu/ZS1QZXRyb2wtUG93/ZXItR2VuZXJhdG9y/LndlYnA',
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
      image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800&auto=format&fit=crop',
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
      image: 'https://imgs.search.brave.com/7cN1iIZeSAb6wTfmR68u786KfO1pzDXLK8Bs9CN2vO8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXh5/Z3JvdXAuY28ua2Uv/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDkvQk0xMjVIRC1C/bGFjay1ZZWxsb3ct/MDIucG5n',
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
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop',
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
      image: 'https://imgs.search.brave.com/UlFxUVJELiukItRO5GgxL-Pqlb9vvKUi5gtxsYJ7pDo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cW9sdGVjLmNvbS9m/aWxlcy9lbi9wcm9k/dWN0L2dhbGxlcnkv/bWFpbi1pbWFnZS02/NmRlOTQ0NTYxMDEw/LnBuZw',
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
      image: 'https://imgs.search.brave.com/dFGMgAy_KnE_B1tr9nQfyWOrzLobyy7-IrVRKRqJPTA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGhkc3RhdGlj/LmNvbS9wcm9kdWN0/SW1hZ2VzL2QxM2Rm/ZGUxLTQwNTItNDgz/MC1hNzc5LWUzMDhj/ZGE1MGFlYy9zdm4v/c3RhaW5sZXNzLW1h/Z2ljLWNoZWYtZ2Fz/LWNvb2t0b3BzLW1j/c2N0ZzI0cy02NF82/MDAuanBn',
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
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
          <Tag size={20} />
          <span className="font-bold text-sm md:text-base">Special Discounts</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 px-4">
          Discounted Products
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
          Save big on quality products! Limited time offers on selected items across all categories.
        </p>
      </div>

      {/* Featured Products Carousel */}
      <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg overflow-hidden animate-fadeInUp">
        <div className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-4 md:px-8 py-3 md:py-4">
          <div className="flex items-center gap-2">
            <Star className="fill-yellow-300 text-yellow-300 animate-pulse" size={20} />
            <h2 className="text-xl md:text-2xl font-bold">Featured Discounts</h2>
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
                <div key={product.id} className="min-w-full px-4 md:px-8 py-6 md:py-10">
                  <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center max-w-6xl mx-auto">
                    {/* Product Image */}
                    <div className="relative animate-scaleIn order-1 md:order-1">
                      <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-red-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg z-10 animate-bounce">
                        <span className="text-lg md:text-2xl font-bold">{product.discount}% OFF</span>
                      </div>
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl md:rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-64 md:h-96 object-cover"
                        />
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="animate-slideInRight order-2 md:order-2">
                      <div className="inline-block bg-green-100 text-green-700 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
                        {product.category}
                      </div>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
                        {product.name}
                      </h3>
                      <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed line-clamp-2 md:line-clamp-3">
                        {product.description}
                      </p>

                      {/* Pricing */}
                      <div className="mb-4 md:mb-6">
                        <div className="flex items-baseline gap-2 md:gap-4 mb-2">
                          <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-600 animate-pulse">
                            {formatPrice(product.discountedPrice)}
                          </span>
                          <span className="text-lg md:text-xl lg:text-2xl text-gray-400 line-through">
                            {formatPrice(product.originalPrice)}
                          </span>
                        </div>
                        <div className="text-sm md:text-base text-green-600 font-semibold">
                          You save {formatPrice(product.originalPrice - product.discountedPrice)}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                        <button
                          onClick={() => onAddToCart(product)}
                          className="flex-1 bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-bold text-base md:text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                        >
                          <ShoppingCart size={18} className="md:w-5 md:h-5" />
                          Add to Cart
                        </button>
                        <button
                          onClick={() => openModal(product)}
                          className="bg-gray-100 text-gray-700 px-6 py-3 md:py-4 rounded-lg md:rounded-xl font-bold hover:bg-gray-200 transition-all duration-300 text-base md:text-lg"
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

          {/* Navigation Buttons - Hidden on mobile */}
          <button
            onClick={prevSlide}
            className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-green-600 text-gray-800 hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 group z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-green-600 text-gray-800 hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 group z-10"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 pb-4 md:pb-6 pt-2">
            {featuredProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'w-6 md:w-8 bg-green-600' 
                    : 'w-2 md:w-3 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* All Discounted Products Section */}
      <div className="animate-fadeInUp">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 md:mb-8 gap-3 px-2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">All Discounted Products</h2>
          <div className="text-sm md:text-base text-gray-600">
            <span className="font-semibold">{allDiscountedProducts.length}</span> products on sale
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {allDiscountedProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Product Image & Badge */}
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                {product.isFeatured && (
                  <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-yellow-400 text-gray-800 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-bold flex items-center gap-1 animate-pulse z-10">
                    <Star size={10} className="fill-current md:w-3 md:h-3" />
                    <span className="hidden sm:inline">Featured</span>
                  </div>
                )}
                <div className="absolute top-2 right-2 md:top-3 md:right-3 bg-red-500 text-white px-2 py-1 md:px-3 md:py-2 rounded-full text-xs md:text-sm font-bold animate-bounce z-10">
                  -{product.discount}%
                </div>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 md:h-56 object-cover cursor-pointer group-hover:scale-110 transition-transform duration-300"
                  onClick={() => openModal(product)}
                />
              </div>

              {/* Product Info */}
              <div className="p-4 md:p-6">
                <div className="text-xs text-green-600 font-semibold mb-2">
                  {product.category}
                </div>
                <h3 className="font-bold text-base md:text-lg text-gray-800 mb-2 line-clamp-1 cursor-pointer hover:text-green-600 transition-colors" onClick={() => openModal(product)}>
                  {product.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Pricing */}
                <div className="mb-3 md:mb-4">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-xl md:text-2xl font-bold text-green-600">
                      {formatPrice(product.discountedPrice)}
                    </span>
                    <span className="text-xs md:text-sm text-gray-400 line-through">
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
                    className="flex-1 bg-green-600 text-white px-3 md:px-4 py-2 md:py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
                  >
                    <ShoppingCart size={14} className="md:w-4 md:h-4" />
                    <span>Add</span>
                  </button>
                  <button
                    onClick={() => openModal(product)}
                    className="bg-gray-100 text-gray-700 px-3 md:px-4 py-2 md:py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center"
                  >
                    <ArrowRight size={14} className="md:w-4 md:h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-2xl md:rounded-3xl p-6 md:p-12 text-center text-white animate-fadeInUp">
        <Tag className="mx-auto mb-4 md:mb-6 animate-bounce" size={48} />
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 px-4">Don't Miss Out!</h2>
        <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto px-4">
          These special discounts won't last forever. Grab your favorite products at unbeatable prices today!
        </p>
        <div className="inline-flex items-center gap-2 bg-white text-green-600 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg">
          <span>Limited Time Offer</span>
          <ArrowRight size={18} className="md:w-5 md:h-5" />
        </div>
      </div>

      {/* Product Details Modal */}
      {showModal && selectedProduct && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fadeIn overflow-y-auto" 
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-2xl md:rounded-3xl w-full max-w-4xl my-8 animate-scaleIn" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header - Sticky */}
            <div className="sticky top-0 bg-gradient-to-r from-green-600 to-emerald-500 text-white px-4 md:px-6 py-3 md:py-4 flex items-center justify-between z-10 rounded-t-2xl md:rounded-t-3xl">
              <h3 className="text-xl md:text-2xl font-bold">Product Details</h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
              >
                <X size={20} className="md:w-6 md:h-6" />
              </button>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="p-4 md:p-8 max-h-[calc(90vh-80px)] overflow-y-auto">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {/* Product Image */}
                <div className="relative">
                  <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-red-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg z-10 animate-pulse">
                    <span className="text-lg md:text-2xl font-bold">{selectedProduct.discount}% OFF</span>
                  </div>
                  {selectedProduct.isFeatured && (
                    <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 bg-yellow-400 text-gray-800 px-3 py-1 md:px-4 md:py-2 rounded-full shadow-lg z-10 flex items-center gap-1">
                      <Star size={14} className="fill-current md:w-4 md:h-4" />
                      <span className="text-xs md:text-sm font-bold">Featured</span>
                    </div>
                  )}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl md:rounded-3xl overflow-hidden">
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.name}
                      className="w-full h-64 md:h-96 object-cover"
                    />
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex flex-col">
                  <div className="inline-block bg-green-100 text-green-700 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4 self-start">
                    {selectedProduct.category}
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">
                    {selectedProduct.name}
                  </h2>

                  <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
                    {selectedProduct.description}
                  </p>

                  {/* Features/Specifications */}
                  <div className="bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 mb-4 md:mb-6">
                    <h4 className="font-bold text-gray-800 mb-3 text-sm md:text-base">Key Features:</h4>
                    <ul className="space-y-2 text-gray-600 text-sm md:text-base">
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
                  <div className="bg-green-50 border-2 border-green-200 rounded-xl md:rounded-2xl p-4 md:p-6 mb-4 md:mb-6">
                    <div className="flex flex-wrap items-baseline gap-2 md:gap-4 mb-2">
                      <span className="text-3xl md:text-4xl font-bold text-green-600">
                        {formatPrice(selectedProduct.discountedPrice)}
                      </span>
                      <span className="text-xl md:text-2xl text-gray-400 line-through">
                        {formatPrice(selectedProduct.originalPrice)}
                      </span>
                    </div>
                    <div className="text-green-600 font-semibold text-sm md:text-base lg:text-lg">
                      You save {formatPrice(selectedProduct.originalPrice - selectedProduct.discountedPrice)} ({selectedProduct.discount}% OFF)
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-auto sticky bottom-0 bg-white py-3 -mx-4 px-4 md:relative md:py-0 md:mx-0 md:px-0">
                    <button
                      onClick={() => handleAddToCart(selectedProduct)}
                      className="flex-1 bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-bold text-base md:text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                    >
                      <ShoppingCart size={18} className="md:w-5 md:h-5" />
                      Add to Cart
                    </button>
                    <button
                      onClick={closeModal}
                      className="bg-gray-100 text-gray-700 px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-bold hover:bg-gray-200 transition-all duration-300 text-base md:text-lg"
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
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 bg-green-600 text-white p-3 md:p-4 rounded-full shadow-2xl hover:bg-green-700 transition-all duration-300 hover:scale-110 group animate-bounce"
        >
          <ShoppingCart size={24} className="md:w-7 md:h-7 group-hover:animate-pulse" />
          <span className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-red-500 text-white text-xs md:text-sm font-bold w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center animate-pulse">
            {cartCount}
          </span>
        </button>
      )}
    </div>
    </>
  );
}