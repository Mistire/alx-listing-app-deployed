"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 border-t mt-10">
      <div className="container mx-auto py-6 px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-semibold mb-2">MyStay</h3>
          <p className="text-sm text-gray-600">
            Find your perfect accommodation, anywhere, anytime.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <ul className="flex gap-3 text-gray-600">
            <li><a href="#"><Facebook className="w-5 h-5" /></a></li>
            <li><a href="#"><Instagram className="w-5 h-5" /></a></li>
            <li><a href="#"><Twitter className="w-5 h-5" /></a></li>
          </ul>
        </div>
      </div>
      <div className="text-center py-4 text-xs text-gray-500 border-t">
        © {new Date().getFullYear()} MyStay. All rights reserved.
      </div>
    </footer>
  );
}
