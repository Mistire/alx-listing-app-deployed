"use client";

import Link from "next/link";
import { useState } from "react";
import { Search } from "lucide-react";

const accommodationTypes = ["Rooms", "Mansion", "Countryside", "Apartments", "Villas"];

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <header className="w-full shadow-md bg-white sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          MyStay
        </Link>

        {/* Search Bar */}
        <div className="flex items-center border rounded-full px-3 py-1 w-1/2 max-w-md">
          <Search className="w-5 h-5 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search accommodation..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none border-0 text-sm"
          />
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border rounded-md hover:bg-gray-100">Sign In</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </div>

      {/* Accommodation Types */}
      <nav className="bg-gray-50 border-t">
        <div className="container mx-auto flex gap-6 px-6 py-2 overflow-x-auto">
          {accommodationTypes.map((type) => (
            <Link
              key={type}
              href={`/${type.toLowerCase()}`}
              className="text-gray-600 hover:text-blue-600 transition text-sm"
            >
              {type}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
