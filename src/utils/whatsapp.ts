import { Asset, ToastType } from '@/src/types';

export const sendToWhatsApp = (cart: Asset[], phoneNumber: string = '2349032833106') => {
  const message = `Hi! I want to purchase:\n\n${cart.map(item => 
    `${item.name} - ₦${item.price.toLocaleString()}`
  ).join('\n')}\n\nTotal: ₦${cart.reduce((sum, item) => sum + item.price, 0).toLocaleString()}`;
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};