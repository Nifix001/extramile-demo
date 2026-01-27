import React, { useState } from 'react';
import { X } from 'lucide-react';

interface PaymentMethodModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItemCount: number;
  onSelectPayment: (method: 'full' | 'installment') => void;
}

export default function PaymentMethodModal({ 
  isOpen, 
  onClose, 
  cartItemCount,
  onSelectPayment 
}: PaymentMethodModalProps) {
  const [selectedMethod, setSelectedMethod] = useState<'full' | 'installment'>('full');

  if (!isOpen) return null;

  const handleContinue = () => {
    onSelectPayment(selectedMethod);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Payment Options</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <p className="text-gray-600 mb-6">
          Choose your preferred payment method for Cart Items ({cartItemCount} {cartItemCount === 1 ? 'item' : 'items'})
        </p>

        {/* Payment Options */}
        <div className="space-y-4 mb-8">
          {/* Full Payment */}
          <label
            className={`block p-4 border-2 rounded-xl cursor-pointer transition-all ${
              selectedMethod === 'full'
                ? 'border-green-600 bg-green-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-start gap-3">
              <input
                type="radio"
                name="payment-method"
                value="full"
                checked={selectedMethod === 'full'}
                onChange={() => setSelectedMethod('full')}
                className="mt-1 w-5 h-5 text-green-600 focus:ring-green-500"
              />
              <div className="flex-1">
                <div className="font-bold text-gray-800 mb-1">Full Payment</div>
                <div className="text-sm text-gray-600">
                  Pay the entire amount upfront. Available to all users.
                </div>
              </div>
            </div>
          </label>

          {/* Installment Payment */}
          <label
            className={`block p-4 border-2 rounded-xl cursor-pointer transition-all ${
              selectedMethod === 'installment'
                ? 'border-green-600 bg-green-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-start gap-3">
              <input
                type="radio"
                name="payment-method"
                value="installment"
                checked={selectedMethod === 'installment'}
                onChange={() => setSelectedMethod('installment')}
                className="mt-1 w-5 h-5 text-green-600 focus:ring-green-500"
              />
              <div className="flex-1">
                <div className="font-bold text-gray-800 mb-1">Pay in Installments</div>
                <div className="text-sm text-gray-600">
                  Pay over time with flexible installment options.
                </div>
              </div>
            </div>
          </label>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleContinue}
            className="flex-1 px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}