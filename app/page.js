import Navbar from "../components/Navbar";
import AnnouncementBar from "@/components/AnnouncementBar";
import Hero from "@/components/Hero";
import CategoryCarousel from "@/components/CategoryCarousel";
import ProductCard from "@/components/ProductCard";
import ProductCarousel from "@/components/ProductCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <AnnouncementBar />
      <Hero />
      <CategoryCarousel />
      <ProductCarousel
        eyebrow="Trending Now"
        title="Trending"
      />

      <ProductCarousel
        eyebrow="Just Dropped"
        title="New Arrivals"
      />

      <ProductCarousel
        eyebrow="Customer Favorites"
        title="Best Sellers"
/>
      <WhyChooseUs />
      <Reviews />
      <Footer />
    </>
  );
}