// components/ExtraCoopPage.tsx

'use client';

import React, { useState } from 'react';
import { 
  CreditCard, 
  Check, 
  Star, 
  TrendingUp, 
  Shield, 
  Users, 
  Calendar,
  Download,
  Award,
  Zap,
  Gift,
  MapPin,
  Mail,
  Phone,
  Hash
} from 'lucide-react';

interface ExtraCoopPageProps {
  isAuthenticated: boolean;
  userName?: string;
  userEmail?: string;
  userPhone?: string;
  isMember?: boolean;
  onJoinClick: () => void;
}

export default function ExtraCoopPage({ 
  isAuthenticated, 
  userName,
  userEmail,
  userPhone,
  isMember = false,
  onJoinClick 
}: ExtraCoopPageProps) {
  const [selectedPlan, setSelectedPlan] = useState<'starter' | 'standard' | 'premium'>('standard');

  const membershipPlans = [
    {
      id: 'starter',
      name: 'Starter',
      price: 1000,
      period: 'year',
      features: [
        'Limited instant approvals',
        'Beginner budget trackers',
        'Standard customer support',
        'Basic financial transactions',
        'Access to customer support',
        'Basic 2-multi-currency support'
      ],
      popular: false
    },
    {
      id: 'standard',
      name: 'Standard',
      price: 5000,
      period: 'year',
      features: [
        'Higher credit limits',
        'Advanced budget tools',
        'Priority customer support',
        'Seamless transactions',
        '24/7 available customer support',
        'Enhanced user experience'
      ],
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 10000,
      period: 'year',
      features: [
        'Maximum credit access',
        'Premium budgeting suite',
        'Dedicated account manager',
        'Priority processing',
        'VIP support & exclusive perks',
        'Multi-currency support'
      ],
      popular: false
    }
  ];

  const paymentPlans = [
    { months: 3, interest: '5%', description: 'Quick payoff' },
    { months: 6, interest: '10%', description: 'Balanced plan' },
    { months: 12, interest: '15%', description: 'Flexible payments' },
    { months: 24, interest: '20%', description: 'Extended term' }
  ];

  const testimonials = [
    {
      name: 'Halilu Johnson',
      role: 'Entrepreneur',
      membership: 'Premium Member',
      avatar: 'HJ',
      rating: 5,
      text: 'I used to stress managing my finances, but the ExtraCoop has completely turned that around. It\'s the most user-friendly and reliable digital banking app I\'ve ever used. Highly recommend!'
    },
    {
      name: 'Emily Boakye84',
      role: 'Small Business Owner',
      membership: 'Standard Member',
      avatar: 'EB',
      rating: 5,
      text: 'I\'ve had a never issue with a transaction, and the 24/7 support feature came through. I was a SAP and the customer service was exceptional. Problem solved in minutes with no extra stress. Thumbs up!'
    }
  ];

  // Generate member ID and serial number (demo)
  const memberSerial = isAuthenticated ? `EA-${String(Math.floor(Math.random() * 999)).padStart(3, '0')}` : 'EA-XXX';
  const uniqueCode = isAuthenticated ? `EA-${String(Math.floor(Math.random() * 999)).padStart(3, '0')}` : 'EA-XXX';

  return (
    <div className="max-w-7xl mx-auto space-y-16">
      {/* Hero Section */}
      <div className="text-center py-12 bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl px-8">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-sm">
          <Award className="text-green-600" size={20} />
          <span className="text-sm font-semibold text-gray-700">Powered by Extramile Africa</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Join ExtraCoopNG Today
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Nigeria's premier cooperative for installment purchases. Get access to credit, flexible payment plans, and exclusive member benefits.
        </p>

        {/* Membership Plans */}
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Choose Your Membership Plan</h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {membershipPlans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id as any)}
                className={`relative p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                  selectedPlan === plan.id
                    ? 'border-green-600 bg-green-50 shadow-lg scale-105'
                    : 'border-gray-200 hover:border-green-300 hover:shadow-md'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <div className="text-lg font-bold text-gray-800 mb-2">{plan.name}</div>
                  <div className="text-4xl font-bold text-gray-800 mb-1">
                    ₦{plan.price.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500 mb-3">Per {plan.period}</div>
                  
                </div>
                
                <ul className="space-y-2 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <button
            onClick={onJoinClick}
            className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            {isAuthenticated ? 'Upgrade to ExtraCoopNG' : 'Login to Continue'}
          </button>
        </div>
      </div>

      {/* About This Plan */}
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-md">
        <h2 className="text-3xl font-bold text-center mb-4">About ExtraCoopNG</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          ExtraCoopNG is designed for Nigerians seeking a straightforward way to access credit and manage finances with{' '}
          <span className="text-green-600 font-semibold">no hidden fees</span>. Our platform provides the foundational tools necessary for effective money management, including budget tracking and instant transactions, all within a secure and user-friendly platform.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <TrendingUp className="text-green-600" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Effortless Financial Transactions</h3>
              <p className="text-gray-600">
                Manage your money with ease. Transactions are quick, safe, and hassle-free, making your financial life simpler.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Zap className="text-blue-600" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Empower Your Budgeting Skills</h3>
              <p className="text-gray-600">
                Gain control of your finances with tools designed for spending, set limits, and save for your goals.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Shield className="text-purple-600" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">24/7 Available Customer Support</h3>
              <p className="text-gray-600">
                Get the help you need, whenever you need it. Our support team is always on hand to assist with any questions.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Users className="text-orange-600" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Seamless User Experience</h3>
              <p className="text-gray-600">
                A straightforward, easy-to-navigate platform designed with your convenience in mind. Banking made beautifully simple.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Plans */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Flexible Payment Plans</h2>
          <p className="text-gray-600">Choose a plan that fits your budget</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {paymentPlans.map((plan) => (
            <div key={plan.months} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-gray-800 mb-1">{plan.months}</div>
                <div className="text-sm text-gray-500">Months</div>
              </div>
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-green-600">{plan.interest}</div>
                <div className="text-xs text-gray-500">Interest</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600">{plan.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-3xl mx-auto">
          <div className="flex items-start gap-3">
            <Gift className="text-blue-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <h4 className="font-bold text-gray-800 mb-2">Example Calculation</h4>
              <p className="text-gray-700 text-sm">
                <strong>Product:</strong> iPhone 13 Pro - ₦520,000<br />
                <strong>12-month plan:</strong> ₦520,000 + 15% (₦78,000) = ₦598,000<br />
                <strong>Monthly payment:</strong> ₦49,833/month for 12 months
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Member Certificate Card Preview */}
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-md">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Membership Card</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {isMember 
              ? 'Your official ExtraCoopNG membership card is ready! Download it below or order a physical card.'
              : 'Preview of what your membership card will look like. Join ExtraCoopNG to get your personalized card!'
            }
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Card Preview - Front */}
          <div className="relative bg-gradient-to-br from-green-500 via-green-600 to-green-700 rounded-2xl p-8 shadow-2xl mb-6 overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-8 left-8 w-16 h-16 bg-green-400 rounded-full opacity-30"></div>
            <div className="absolute top-12 left-12 w-24 h-24 bg-green-300 rounded-full opacity-20"></div>
            <div className="absolute top-16 left-4 w-12 h-12 bg-green-200 rounded-full opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-green-400 opacity-20" style={{ clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0 100%)' }}></div>
            
            {/* Logo */}
            <div className="absolute top-6 left-8 flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-lg">E</span>
              </div>
              <TrendingUp className="text-white" size={20} />
            </div>

            {/* Card Content */}
            <div className="relative z-10 text-white">
              <div className="text-right mb-12">
                <h3 className="text-2xl font-bold mb-1">ExtracoopNG</h3>
                <p className="text-sm opacity-90">MEMBERSHIP Card</p>
                <p className="text-xs opacity-75">(powered by Extramile Africa)</p>
              </div>

              {/* Photo */}
              <div className="flex items-end gap-6 mb-6">
                <div className="w-32 h-32 bg-white rounded-full border-4 border-green-300 flex items-center justify-center overflow-hidden">
                  {isMember && userName ? (
                    <span className="text-4xl font-bold text-green-600">
                      {userName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                    </span>
                  ) : (
                    <span className="text-4xl font-bold text-green-600">JD</span>
                  )}
                </div>
                
                <div className="flex-1 pb-4">
                  <div className="space-y-2">
                    <div>
                      <span className="text-green-200 text-sm font-semibold">Name: </span>
                      <span className="text-white font-medium">{isMember ? userName : 'John Doe'}</span>
                    </div>
                    <div>
                      <span className="text-green-200 text-sm font-semibold">Email: </span>
                      <span className="text-white text-sm">{isMember ? userEmail : 'johndoe@example.com'}</span>
                    </div>
                    <div>
                      <span className="text-green-200 text-sm font-semibold">Phone Number: </span>
                      <span className="text-white text-sm">{isMember ? userPhone : '08012345678'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Details */}
              <div className="space-y-2 mb-6">
                <div>
                  <span className="text-green-200 text-sm font-semibold">Card Serial Number: </span>
                  <span className="text-white font-mono">{memberSerial}</span>
                </div>
                <div>
                  <span className="text-green-200 text-sm font-semibold">Unique Code Number: </span>
                  <span className="text-white font-mono">{uniqueCode}</span>
                </div>
                <div>
                  <span className="text-green-200 text-sm font-semibold">Location: </span>
                  <span className="text-white text-sm">{isMember ? 'Lagos, Nigeria' : 'Your Location Here'}</span>
                </div>
                <div>
                  <span className="text-green-200 text-sm font-semibold">Membership Present Status:</span>
                  <div className="text-white font-medium mt-1">{isMember ? 'Active Member' : 'Pending Enrollment'}</div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-green-400 pt-4">
                <p className="text-center text-sm italic opacity-90">
                  ExtraCoopNG Membership Card is subjected to renewal every year.
                </p>
                <p className="text-center text-sm font-semibold mt-1">This is for {new Date().getFullYear()}.</p>
              </div>
            </div>
          </div>

          {/* Download Options - Only for Members */}
          {isMember ? (
            <div className="grid md:grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-700 transition-colors">
                <Download size={20} />
                Download as PDF
              </button>
              <button className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                <CreditCard size={20} />
                Order Physical Card (₦2,000)
              </button>
            </div>
          ) : (
            <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6 text-center">
              <Award className="mx-auto mb-3 text-yellow-600" size={48} />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Become a Member to Download</h3>
              <p className="text-gray-600 mb-4">
                Complete your membership enrollment and KYC verification to unlock your personalized membership card.
              </p>
              <button
                onClick={onJoinClick}
                className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
              >
                {isAuthenticated ? 'Join ExtraCoopNG Now' : 'Login to Continue'}
              </button>
            </div>
          )}

          {isMember && (
            <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4 text-sm text-green-800">
              <p className="flex items-start gap-2">
                <Check className="flex-shrink-0 mt-0.5" size={16} />
                <span><strong>Active Member:</strong> Your membership card is ready for download. You can print it or order a physical PVC card for easy verification.</span>
              </p>
            </div>
          )}

          {!isMember && (
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
              <p className="flex items-start gap-2">
                <Award className="flex-shrink-0 mt-0.5" size={16} />
                <span><strong>Note:</strong> This is a preview. Your actual membership card will be generated automatically after successful payment and KYC verification.</span>
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          What Our Users Think About ExtraCoopNG
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.membership}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-3xl p-12 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of Nigerians building their credit and achieving their dreams
        </p>
        <button
          onClick={onJoinClick}
          className="bg-white text-green-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
        >
          {isAuthenticated ? 'Become a Member Today' : 'Login to Get Started'}
        </button>
        
        <p className="text-sm mt-6 opacity-75">
          Don't manage your money the hard way. Join us today to make banking and financial management as accessible and conveniently easy as possible. Start your journey to financial freedom now!
        </p>
      </div>
    </div>
  );
}