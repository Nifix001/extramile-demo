// src/components/HomePage.tsx

import React from 'react';
import { Sparkles, Zap, Shield, TrendingUp, Clock, Award, ArrowRight, CheckCircle, Users, Gift } from 'lucide-react';

interface HomePageProps {
  onShopNowClick: () => void;
  onExtraCoopClick?: () => void;
}

export default function HomePage({ onShopNowClick, onExtraCoopClick }: HomePageProps) {
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

      {/* Two-Tier Business Model Section */}
      <div className="space-y-8">
         {/* ExtraCoop and ExtraStore */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* ExtraCoopNG */}
          <div className="group relative bg-gradient-to-br from-green-600 to-emerald-500 rounded-3xl p-8 md:p-10 text-white overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-300 opacity-20 rounded-full -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-700"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Award size={16} />
                <span className="text-sm font-semibold">Membership Program</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-4">ExtraCoopNG</h3>

              <p className="text-lg mb-2 opacity-90 font-semibold">
                "Build Your Credit, Build Your Future"
              </p>

              <p className="text-base mb-6 opacity-80 leading-relaxed">
                Join our cooperative membership and unlock exclusive credit limits. Pay in flexible installments with competitive rates. Get your annual membership card and enjoy  benefits!
              </p>

              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-yellow-300 flex-shrink-0" />
                  <span>Credit limits</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-yellow-300 flex-shrink-0" />
                  <span>Annual membership card</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-yellow-300 flex-shrink-0" />
                  <span>Priority customer support</span>
                </li>
              </ul>

              <button
                onClick={() => onExtraCoopClick?.()}
                className="w-full bg-white text-green-600 py-4 px-6 rounded-xl font-bold text-lg hover:bg-yellow-300 hover:text-green-700 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-2 group-hover:animate-pulse"
              >
                Join ExtraCoopNG
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* ExtraStore */}
          <div className="group relative bg-gradient-to-br from-green-600 to-emerald-500 rounded-3xl p-8 md:p-10 text-white overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gray-400 opacity-20 rounded-full -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-700"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Zap size={16} />
                <span className="text-sm font-semibold">Instant Purchase</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-4">ExtraStore</h3>

              <p className="text-lg mb-2 opacity-90 font-semibold">
                "Shop Now, Own Instantly"
              </p>

              <p className="text-base mb-6 opacity-80 leading-relaxed">
                Pay in full and get your products delivered faster! Enjoy instant approval and better discounted prices on every purchase.
              </p>

              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-gray-300 flex-shrink-0" />
                  <span>Instant approval - no waiting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-gray-300 flex-shrink-0" />
                  <span>Cash discounts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-gray-300 flex-shrink-0" />
                  <span>Faster delivery</span>
                </li>
              </ul>

              <button
                onClick={onShopNowClick}
                className="w-full bg-white text-green-600 py-4 px-6 rounded-xl font-bold text-lg hover:bg-yellow-300 hover:text-green-700 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-2 group-hover:animate-pulse" >
                Visit Our Store
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Asset Categories */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Assets Categories
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:from-yellow-50 hover:to-yellow-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 cursor-pointer"
              onClick={onShopNowClick}>
              <div className="text-5xl md:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🔌
              </div>
              <h4 className="font-bold text-gray-800 mb-2">ExtraPower</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Solar panels, generators, inverters & batteries for reliable power solutions</p>
            </div>

            <div className="group text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:from-blue-50 hover:to-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 cursor-pointer"
              onClick={onShopNowClick}>
              <div className="text-5xl md:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🏍️
              </div>
              <h4 className="font-bold text-gray-800 mb-2">ExtraRide</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Motorcycles, scooters, tricycles (Keke NAPEP) & mobility solutions</p>
            </div>

            <div className="group text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:from-purple-50 hover:to-purple-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 cursor-pointer"
              onClick={onShopNowClick}>
              <div className="text-5xl md:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🏘️
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Extramile Homes</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Land ownership, property investment & real estate financing opportunities</p>
            </div>

            <div className="group text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:from-green-50 hover:to-green-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 cursor-pointer"
              onClick={onShopNowClick}>
              <div className="text-5xl md:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🛋️
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Home Appliances</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Refrigerators, washing machines, air conditioners & kitchen equipment</p>
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

        {/* Installment CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-700 text-lg inline-flex items-center gap-2 flex-wrap justify-center">
            <span>To purchase any asset with flexible installment payments on Extramile Africa,</span>
            <button
              onClick={() => onExtraCoopClick?.()}
              className="inline-flex items-center gap-2 text-green-600 font-bold hover:text-green-700 transition-colors group"
            >
              click here
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </p>
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
            <h3 className="text-xl font-bold mb-3 text-gray-800">Complete KYC & Get Delivered</h3>
            <p className="text-gray-600">
              Complete your quick verification (KYC) and get approved.
            </p>
          </div>
        </div>
      </div>

      {/* Value Added Services Section */}
      <div className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-3xl p-8 md:p-12 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-200 opacity-20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full mb-4">
              <Sparkles size={18} className="animate-pulse" />
              <span className="text-sm font-semibold">Value Added Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">More Than Just Shopping</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Enjoy exclusive benefits and services designed to enhance your ExtraMile experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service 1 - Community */}
            <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Users className="text-white" size={32} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce">
                  NEW
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Community Forum</h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                Connect with other customers, share experiences, get product reviews, and join discussions in our vibrant community.
              </p>
              <div className="mt-4 flex justify-center">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">
                    10k+
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2 - Referral */}
            <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Gift className="text-white" size={32} />
                </div>
                <div className="absolute -top-1 -right-1">
                  <Sparkles className="text-yellow-400 animate-pulse" size={20} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Referral Rewards</h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed mb-4">
                Earn up to ₦5,000 credit for every friend you refer. Share your unique code and both get exclusive discounts!
              </p>
              <div className="bg-green-50 border-2 border-green-200 border-dashed rounded-lg p-3 text-center">
                <div className="text-xs text-gray-500 mb-1">Your Referral Code</div>
                <div className="font-mono font-bold text-green-600">EXTRA-XXX</div>
              </div>
            </div>

            {/* Service 3 - Financial Literacy */}
            <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <TrendingUp className="text-white" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Financial Education</h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed mb-4">
                Free courses on budgeting, credit management, and smart shopping. Build your financial confidence with us.
              </p>
              <div className="flex justify-center gap-2">
                <div className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-semibold">
                  10+ Courses
                </div>
                <div className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-semibold">
                  Free
                </div>
              </div>
            </div>

            {/* Service 4 - Insurance */}
            <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Shield className="text-white" size={32} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <CheckCircle className="text-white" size={16} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Product Insurance</h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed mb-4">
                Protect your purchases with affordable insurance. Coverage for damage, theft, and extended warranty options.
              </p>
              <div className="text-center">
                <div className="inline-block bg-orange-50 text-orange-700 text-xs px-4 py-2 rounded-lg font-semibold border border-orange-200">
                  From ₦500/month
                </div>
              </div>
            </div>
          </div>

          {/* Additional VAS Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-6 border-2 border-green-100 hover:border-green-300 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Loyalty Points</h4>
                  <p className="text-sm text-gray-600">Earn 1 point per ₦100 spent. Redeem for discounts and exclusive offers.</p>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-6 border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Priority Support</h4>
                  <p className="text-sm text-gray-600">24/7 dedicated customer service via phone, chat, and WhatsApp.</p>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-6 border-2 border-purple-100 hover:border-purple-300 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="text-purple-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Flexible Payment</h4>
                  <p className="text-sm text-gray-600">Reschedule payments up to 2 times without penalties when needed.</p>
                </div>
              </div>
            </div>
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