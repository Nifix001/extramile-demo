// src/components/Footer.tsx

import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import Image from 'next/image';
import e from "../../public/emilee.png"

export default function Footer() {
  return (
    <footer className="bg-green-600 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src={e} alt='logo' width={50} height={50} />
              <span className="text-xl font-bold">Extramile Africa</span>
            </div>
            <p className="text-green-100 leading-relaxed">
              We are dedicated to providing the best car buying and renting experience, offering a wide range of high-quality vehicles with excellent customer service.
            </p>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">Information</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-green-100 hover:text-white transition-colors">
                  Extrastore
                </a>
              </li>
              <li>
                <a href="#" className="text-green-100 hover:text-white transition-colors">
                  Extramile Home & Properties
                </a>
              </li>
              <li>
                <a href="#" className="text-green-100 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-green-100 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-green-100">
                <Phone size={18} />
                <a href="tel:+2349016551665" className="hover:text-white transition-colors">
                  +2349016551665
                </a>
              </li>
              <li className="flex items-center gap-2 text-green-100">
                <MapPin size={18} />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">Social Media</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center gap-2 text-green-100 hover:text-white transition-colors">
                  <Facebook size={18} />
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-green-100 hover:text-white transition-colors">
                  <Instagram size={18} />
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-green-100 hover:text-white transition-colors">
                  <Twitter size={18} />
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-green-100 hover:text-white transition-colors">
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-500 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-green-100 text-sm">
            © {new Date().getFullYear()} Extramile Africa. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-green-100 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-green-100 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}