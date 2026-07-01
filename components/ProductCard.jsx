"use client";

import { Heart } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";

export default function ProductCard({ product }) {
  const { wishlist, toggleWishlist } = useWishlist();

  const wishlisted = wishlist.includes(product.id);

  return (
    <div className="group w-[170px] sm:w-[220px] md:w-[280px] lg:w-[320px] overflow-hidden rounded-xl border border-[#C9A96E]/10 bg-[#161616] transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A96E]/40">

      {/* Image */}
      <div className="relative h-[220px] sm:h-[300px] md:h-[330px] lg:h-[380px] overflow-hidden">

        <img
          src={product?.image || "/heroimages/hero1.png"}
          alt={product?.name || "Product"}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* Wishlist */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className="absolute right-4 top-4 z-20 transition-transform duration-300 hover:scale-110"
        >
          <Heart
            className={`h-5 w-5 md:h-7 md:w-7 transition-all duration-300 ${
              wishlisted
                ? "fill-red-500 text-red-500"
                : "fill-transparent text-white"
            }`}
            strokeWidth={2}
          />
        </button>

      </div>

      {/* Details */}
      <div className="space-y-4 px-6 py-7">

        <div>

          <h3 className="truncate text-sm font-medium text-white sm:text-base md:text-lg lg:text-xl">
            {product?.name || "Nike Air Jordan 4"}
          </h3>

          <p className="mt-2 text-base font-semibold text-[#C9A96E] sm:text-lg md:text-xl lg:text-2xl">
            ₹{product?.price || "3,999"}
          </p>

        </div>

        <button className="w-full rounded-xl bg-[#C9A96E] py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(201,169,110,0.35)] sm:py-3 md:py-3.5 md:text-base lg:py-4">
          Add to Cart
        </button>

      </div>

    </div>
  );
}