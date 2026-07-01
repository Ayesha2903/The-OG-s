"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { loadProducts } from "@/services/products";
import { useWishlist } from "@/context/WishlistContext";

export default function WishlistPage() {
  const [products, setProducts] = useState([]);
  const { wishlist } = useWishlist();

  useEffect(() => {
    async function fetchWishlist() {
      const allProducts = await loadProducts();
      console.log({ wishlist, allProducts });

      const wishlistProducts = allProducts.filter((product) =>
        wishlist.includes(product.id)
      );

      console.log("Filtered:", wishlistProducts);
      setProducts(wishlistProducts);
    }

    fetchWishlist();
  }, [wishlist]);

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#0B0B0B] py-20">

        <div className="mx-auto max-w-7xl px-6">

          <p className="mb-3 text-sm uppercase tracking-[0.45em] text-[#C9A96E]">
            Saved For Later
          </p>

          <h1 className="font-playfair text-5xl font-bold text-white">
            Your Wishlist
          </h1>

          <p className="mt-4 text-zinc-400">
            The pieces you can't stop thinking about.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">

            {products.length === 0 ? (

              <h3 className="col-span-full text-xl text-zinc-400">
                Your wishlist is empty.
              </h3>

            ) : (

              products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))

            )}

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}