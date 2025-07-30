'use client';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#f9f9f9] text-[#4a4a4a] pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-16">
        
        {/* Branding / Description */}
        <div className="max-w-sm">
          <p className="text-sm text-gray-500 mb-1">Your Home. Evolved.</p>
          <h4 className="text-xl font-semibold mb-2">
            Live Intelligently. <br /> Experience the Future of Home.
          </h4>
          <p className="text-sm text-gray-600">
            Take control of your space with effortless automation, designed for comfort, energy efficiency,
            and everyday convenience.
          </p>

          <div className="mt-8">
            <Image
              src="/logos/merefsa-logo.svg"
              alt="Merefsa Intelligence"
              width={120}
              height={20}
            />
          </div>
        </div>

        {/* Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-sm">

          <div>
            <h5 className="font-medium text-gray-800 mb-3">About</h5>
            <ul className="space-y-2">
              <li><Link href="#">Our Story</Link></li>
              <li><Link href="#">Sustainability</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-medium text-gray-800 mb-3">Socials</h5>
            <ul className="space-y-2">
              <li><Link href="#">Instagram</Link></li>
              <li><Link href="#">X (Formally Twitter)</Link></li>
              <li><Link href="#">LinkedIn</Link></li>
              <li><Link href="#">Facebook</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-medium text-gray-800 mb-3">Support</h5>
            <ul className="space-y-2">
              <li><Link href="#">Help Center</Link></li>
              <li><Link href="#">Installation Guide</Link></li>
              <li><Link href="#">Warranty Info</Link></li>
              <li><Link href="#">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-medium text-gray-800 mb-3">Explore</h5>
            <ul className="space-y-2">
              <li><Link href="#">Products</Link></li>
              <li><Link href="#">Use Cases</Link></li>
              <li><Link href="#">Testimonials</Link></li>
              <li><Link href="#">Blog</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-400 mt-16">
        © 2025 Merefsa Intelligence. All rights reserved.
      </div>
    </footer>
  );
}
