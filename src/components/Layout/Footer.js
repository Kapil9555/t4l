'use client';

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGooglePlusG, FaPinterestP } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone } from 'react-icons/hi';
import { Para } from '@/components/custom/ui/text';
import Image from 'next/image';
import logo from '../../../public/png/logo.png';

export default function Footer() {
  return (
    <footer className="bg-neutral-700 text-white px-6 md:px-20 mt-10 py-12">
      <div className="grid md:grid-cols-4 gap-10">
        {/* Logo and Contact Info */}
        <div>
          <div className="mb-4">
            <Image src={logo} alt="Logo" width={'auto'} height={60} />
          </div>
          <Para style={{ fontSize: '0.875rem',marginBottom: '1rem' }}>
            Integer posuere orci sit amet feugiat pellentesque. Suspendisse vel tempor justo, sit amet posuere orci dapibus auctor.
          </Para>
          <div className="text-sm space-y-2">
            <div className="flex items-center gap-2">
              <HiOutlinePhone className="text-brandGreen" />
              <span>+3 (523) 555 123 8745</span>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineMail className="text-brandGreen" />
              <span>office@exzo.com</span>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineLocationMarker className="text-brandGreen" />
              <span>1st, New York, USA</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">QUICK LINKS</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* More Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">INFORMATION</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Privacy Policy</li>
            <li>Warranty</li>
            <li>Login</li>
            <li>Registration</li>
            <li>Delivery</li>
            <li>Our Stores</li>
          </ul>
        </div>

        {/* Tags */}
        <div>
          <h4 className="text-lg font-semibold mb-4">POPULAR TAGS</h4>
          <div className="flex flex-wrap gap-2">
            {['HEADPHONES', 'ACCESSORIES', 'WIRELESS', 'CABLES', 'DEVICES', 'BRANDS', 'CASES', 'GADGETS', 'PROFESSIONAL'].map((tag, idx) => (
              <span key={idx} className="bg-gray-700 text-xs px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>
          &copy; 2015 All rights reserved. Development by <span className="text-brandGreen">UnionAgency</span>
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <FaGooglePlusG />
          <FaPinterestP />
        </div>
      </div>
    </footer>
  );
}
