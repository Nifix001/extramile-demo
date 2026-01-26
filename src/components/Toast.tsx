
import React from 'react';
import { ToastType } from '@/src/types';

interface ToastProps {
  toast: ToastType;
}

export default function Toast({ toast }: ToastProps) {
  if (!toast.show) return null;

  return (
    <div className="fixed top-8 right-8 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-pulse">
      {toast.message}
    </div>
  );
}