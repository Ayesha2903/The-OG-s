"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { loadProducts } from "@/services/products";


export default function ProductCarousel({ eyebrow, title }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const data = await loadProducts();
      console.log(data[0].image);
      setProducts(data);
    }

    fetchProducts();
  }, []);
  return (
    <section className="bg-[#0B0B0B] py-16">

      <div className="mx-auto w-full max-w-[1800px] px-6 lg:px-10">

        <div className="mb-14 flex items-end justify-between">

          <div>

            <p className="mb-2 text-sm uppercase tracking-[0.4em] text-[#C9A96E]">
              {eyebrow}
            </p>

            <h2 className="truncate text-lg font-playfair font-bold text-white">
              {title}
            </h2>

          </div>

          <button className="rounded-xl border border-[#C9A96E]/40 px-5 py-2 text-sm font-medium text-[#C9A96E] transition-all duration-300 hover:bg-[#C9A96E] hover:text-black">
            View All →
          </button>

        </div>

        <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide">

        {products.slice(0, 5).map((product) => (

        <ProductCard
          key={product.id}
          product={product}
        />

        ))}

        </div>

      </div>

    </section>
  );
}