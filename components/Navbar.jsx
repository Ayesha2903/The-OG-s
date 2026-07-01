"use client";
import { Heart, Search, ShoppingBag, Menu, X, ChevronRight } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
              width={52}
              height={52}
          />
        <h1 className="font-playfair text-2xl md:text-3xl font-semibold tracking-wide cursor-pointer">
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
        <div className="flex items-center gap-4 md:gap-6">

        <button className="md:hidden hover:text-[#C9A96E] transition">
          <Search size={24} />
        </button>

        <Link
          href="/wishlist"
          className="hover:text-[#C9A96E] transition"
        >
          <Heart size={24} />
        </Link>

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

  {/* Hamburger Menu */}
  <AnimatePresence>
  {menuOpen && (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
        onClick={() => setMenuOpen(false)}
      />

      {/* Drawer */}
      <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.35 }}
                className="fixed right-0 top-0 z-50 h-screen w-[70%] max-w-[320px] bg-[#0B0B0B] border-l border-[#C9A96E]/20 md:hidden"
              >
                

                <div className="border-b border-[#C9A96E]/20">

        <div className="flex items-center justify-between px-6 py-6">

          <div className="flex items-center gap-3">

            <Image
              src="/logo.jpeg"
              alt="THE OGS"
              width={44}
              height={44}
              className="rounded-full"
            />

            <div>
              <h2 className="font-playfair text-xl font-semibold text-white">
                THE OGS
              </h2>

              <p className="text-[10px] uppercase tracking-[0.35em] text-[#C9A96E]">
                Premium Fashion
              </p>
            </div>

          </div>

          <button
            onClick={() => setMenuOpen(false)}
            className="rounded-full p-2 transition hover:bg-white/10"
          >
            <X size={22} />
          </button>

        </div>

        </div>

        {/* Navigation Title */}

        <div className="px-6 pt-6 pb-2">

        <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500">
          Navigation
        </p>

        </div>

        {/* Navigation Links */}

        <div className="flex flex-col px-4">

        {[
          "Home",
          "Shop",
          "Shoes",
          "Watches",
          "New Arrivals",
          "Best Sellers",
          "About",
          "Why Choose Us",
          "Contact",
        ].map((item) => (

          <button
            key={item}
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-between rounded-2xl px-5 py-5 text-left text-base font-medium text-[#F5F5F5] transition-all duration-300 hover:bg-white/5 hover:text-[#C9A96E]"
          >

            <span>
              {item}
            </span>

            <ChevronRight
              size={18}
              className="text-[#C9A96E]"
            />

          </button>

        ))}

        </div>



      </motion.div>
    </>
  )}
</AnimatePresence>

</nav>
  );
}