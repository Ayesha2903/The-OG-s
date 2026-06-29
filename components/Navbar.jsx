"use client";
import { Heart, Search, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0B0B0B] text-[#F5F5F5] border-b border-zinc-800">

      {/* Logo */}
  <div className="flex items-center justify-between px-6 md:px-12">
        <div className="flex items-center gap-2">
        <Image
              src="/logo.jpeg"
              alt="THE OGS Logo"
              width={64}
              height={64}
          />
        <h1 className="font-playfair text-3xl font-semibold tracking-wide cursor-pointer">
          THE OGS
        </h1>
        </div>

        {/* Search */}
        <div className="hidden md:flex items-center w-[580px] bg-[#161616] rounded-xl px-6 py-12 border-2 border-zinc-700">
          <Search size={20} className="text-[#C9A96E]" />
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none ml-3 flex-1 placeholder:text-gray-500"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">

          <button className="hover:text-[#C9A96E] transition">
            <Heart size={24} />
          </button>

          <button className="hover:text-[#C9A96E] transition">
            <ShoppingBag size={24} />
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden hover:text-[#C9A96E] transition"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
  </div>

      {/* Navigation Links */}
  <div className="hidden md:flex h-14 border-t border-zinc-800 items-center justify-center gap-10">
      <button>Home</button>
      <button>Shoes</button>
      <button>Watches</button>
      <button>Shop</button>
      <button>New Arrivals</button>
      <button>Bestsellers</button>
      <button>About</button>
      <button>Why Choose us?</button>
      <button>Contact</button>
  </div>

</nav>
  );
}