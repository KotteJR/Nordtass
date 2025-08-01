'use client';

import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          
          {/* Branding & Description */}
          <div className="max-w-xs">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/logos/logo.png"
                alt="NordTass Logo"
                width={140}
                height={45}
              />
            </Link>
            <p className="text-sm text-gray-600">
              Natural, science-backed supplements to support your pet's health and happiness through every stage of life.
            </p>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">
            <div>
              <h5 className="font-semibold text-gray-800 mb-4">Company</h5>
              <ul className="space-y-3">
                <li><Link href="/about" className="hover:text-gray-900 transition-colors">Our Story</Link></li>
                <li><Link href="/sustainability" className="hover:text-gray-900 transition-colors">Sustainability</Link></li>
                <li><Link href="/careers" className="hover:text-gray-900 transition-colors">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-gray-800 mb-4">Shop</h5>
              <ul className="space-y-3">
                <li><Link href="/products/all" className="hover:text-gray-900 transition-colors">All Products</Link></li>
                <li><Link href="/products/dogs" className="hover:text-gray-900 transition-colors">For Dogs</Link></li>
                <li><Link href="/products/cats" className="hover:text-gray-900 transition-colors">For Cats</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-gray-800 mb-4">Support</h5>
              <ul className="space-y-3">
                <li><Link href="/contact" className="hover:text-gray-900 transition-colors">Contact Us</Link></li>
                <li><Link href="/faq" className="hover:text-gray-900 transition-colors">FAQ</Link></li>
                <li><Link href="/shipping" className="hover:text-gray-900 transition-colors">Shipping & Returns</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-gray-800 mb-4">Follow Us</h5>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">TikTok</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-500 mt-16 pt-6 border-t border-gray-200">
          © {new Date().getFullYear()} NordTass. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
