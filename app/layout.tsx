import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ExtraMile - Buy Assets on Credit',
  description: 'Buy gadgets, solar panels, generators, and more on credit',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">{children}</body>
    </html>
  );
}