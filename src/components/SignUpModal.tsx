// // src/components/NewsletterModal.tsx

// import React, { useState } from 'react';
// import { X, Mail, Gift } from 'lucide-react';

// interface NewsletterModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onSubscribe: (email: string) => void;
// }

// export default function NewsletterModal({ isOpen, onClose, onSubscribe }: NewsletterModalProps) {
//   const [email, setEmail] = useState('');

//   if (!isOpen) return null;

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (email) {
//       onSubscribe(email);
//       setEmail('');
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
//       <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl transform transition-all relative">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
//         >
//           <X size={24} />
//         </button>

//         <div className="text-center mb-6">
//           <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
//             <Gift className="text-white" size={40} />
//           </div>
//           <h2 className="text-3xl font-bold text-gray-800 mb-3">
//             Get Exclusive Offers! 🎉
//           </h2>
//           <p className="text-gray-600 leading-relaxed">
//             Subscribe to our newsletter and be the first to know about special deals, new products, and credit offers!
//           </p>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <div className="relative mb-4">
//             <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//             <input
//               type="email"
//               placeholder="Enter your email address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-all duration-300 hover:scale-105 mb-4"
//           >
//             Subscribe Now
//           </button>

//           <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
//             <span>✓ Weekly deals</span>
//             <span>•</span>
//             <span>✓ New arrivals</span>
//             <span>•</span>
//             <span>✓ Credit tips</span>
//           </div>
//         </form>

//         <p className="text-xs text-center text-gray-400 mt-4">
//           We respect your privacy. Unsubscribe anytime.
//         </p>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import { X, Sparkles, Gift, TrendingUp, Zap } from 'lucide-react';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignUpClick: () => void;
}

export default function SignUpModal({ isOpen, onClose, onSignUpClick }: SignUpModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 rounded-3xl p-8 max-w-lg w-full shadow-2xl transform transition-all relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -ml-16 -mb-16"></div>
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="relative z-10 text-white text-center">
          {/* Icon Animation */}
          <div className="mb-6 flex justify-center gap-3">
            <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-bounce">
              <Gift className="text-white" size={32} />
            </div>
            <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-bounce" style={{ animationDelay: '0.1s' }}>
              <Sparkles className="text-white" size={32} />
            </div>
            <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-bounce" style={{ animationDelay: '0.2s' }}>
              <Zap className="text-white" size={32} />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🎉 Unlock Amazing Deals!
          </h2>
          
          <p className="text-xl mb-6 text-green-50">
            Join thousands of Nigerians who are shopping smarter with ExtraMile
          </p>

          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 mb-8">
            <div className="grid grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs">✓</span>
                </div>
                <div>
                  <div className="font-bold text-sm">Buy on Credit</div>
                  <div className="text-xs text-green-50">Pay in installments</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs">✓</span>
                </div>
                <div>
                  <div className="font-bold text-sm">Exclusive Discounts</div>
                  <div className="text-xs text-green-50">Member-only prices</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs">✓</span>
                </div>
                <div>
                  <div className="font-bold text-sm">Fast Delivery</div>
                  <div className="text-xs text-green-50">Nationwide shipping</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs">✓</span>
                </div>
                <div>
                  <div className="font-bold text-sm">Trusted Platform</div>
                  <div className="text-xs text-green-50">10,000+ happy customers</div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              onSignUpClick();
            }}
            className="w-full bg-white text-green-600 py-4 px-8 rounded-xl font-bold text-lg hover:bg-yellow-300 hover:text-green-700 transition-all duration-300 transform hover:scale-105 shadow-2xl mb-4"
          >
            Create Free Account Now! 🚀
          </button>

          <p className="text-sm text-green-50">
            Already have an account?{' '}
            <button 
              onClick={() => {
                onClose();
                onSignUpClick();
              }}
              className="underline font-semibold hover:text-white"
            >
              Login here
            </button>
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-green-100">
            <TrendingUp size={14} />
            <span>Join now and get instant access to all products!</span>
          </div>
        </div>
      </div>
    </div>
  );
}