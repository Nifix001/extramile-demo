// src/components/HomePage.tsx

import React from 'react';
import { Sparkles, Zap, Shield, TrendingUp, Clock, Award } from 'lucide-react';

interface HomePageProps {
  onShopNowClick: () => void;
}

export default function HomePage({ onShopNowClick }: HomePageProps) {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-600 via-green-500 to-emerald-400 rounded-3xl p-8 md:p-16 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white opacity-5 rounded-full -ml-36 -mb-36"></div>
        
        <div className="relative z-10 max-w-3xl">
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Own Your Assets Today,<br />
            <span className="text-yellow-300">Pay Gradually</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 opacity-95 leading-relaxed">
            Get laptops, solar panels, generators, appliances, and more with our flexible credit system. Start building your future now.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button
              onClick={onShopNowClick}
              className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 hover:text-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Browse Products
            </button>
            <button
              onClick={onShopNowClick}
              className="bg-green-700 bg-opacity-50 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-opacity-70 transition-all duration-300 border-2 border-white border-opacity-30"
            >
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white border-opacity-20">
            <div>
              <div className="text-3xl font-bold mb-1">1000+</div>
              <div className="text-sm opacity-80">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">500+</div>
              <div className="text-sm opacity-80">Products Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">99%</div>
              <div className="text-sm opacity-80">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Why Choose ExtraMile?</h2>
          <p className="text-gray-600 text-lg">We make asset ownership accessible to everyone</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-green-500">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Zap className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Buy on Credit</h3>
            <p className="text-gray-600 leading-relaxed">
              Own your assets now with our flexible payment plans. No need to wait or save up. Start using what you need today.
            </p>
          </div>

          <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-blue-500">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Clock className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Fast Delivery</h3>
            <p className="text-gray-600 leading-relaxed">
              Get your items delivered quickly to your doorstep. We process orders within 24 hours for a seamless experience.
            </p>
          </div>

          <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-purple-500">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Shield className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Warranty Support</h3>
            <p className="text-gray-600 leading-relaxed">
              All items come with comprehensive warranty coverage and dedicated customer support for peace of mind.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">How It Works</h2>
          <p className="text-gray-600 text-lg">Get started in three simple steps</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
              1
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Sign Up</h3>
            <p className="text-gray-600">
              Create your free account in minutes. No hidden fees or complicated processes.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
              2
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Choose Products</h3>
            <p className="text-gray-600">
              Browse our catalog and add items to your cart. Select your preferred payment plan.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
              3
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Get Delivered</h3>
            <p className="text-gray-600">
              Complete your order and receive your items. Start paying gradually over time.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-3xl p-8 md:p-12 text-center text-white">
        <Award className="mx-auto mb-6 animate-bounce" size={64} />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Join thousands of satisfied customers who are already enjoying their assets with our flexible payment plans.
        </p>
        <button
          onClick={onShopNowClick}
          className="bg-white text-green-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 hover:text-green-700 transition-all duration-300 transform hover:scale-110 shadow-2xl"
        >
          Start Shopping Now
        </button>
      </div>
    </div>
  );
}