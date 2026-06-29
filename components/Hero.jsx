"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";

export default function Hero() {
    const slides=[
        {
        image:"/heroimages/hero1.png",
        tag:"THE OGS",
        title:"Elevate Your Style",
        subtitle:"Premium footwear and luxury watches curated for those who appreciate timeless style.",
        primary:"Shop Now",
        secondary:"Explore",
        },
        
        {
        image:"/heroimages/hero2.png",
        tag:"LUXURY WATCHES",
        title:"Timeless Precision",
        subtitle:"Discover premium watches crafted to elevate every moment.",
        primary:"Shop Now",
        secondary:"Explore",
        },
        
        {
        image:"/heroimages/hero3.png",
        tag:"NEW ARRIVALS",
        title:"Just Dropped",
        subtitle:"Fresh arrivals selected to redefine your everyday wardrobe.",
        primary:"Shop Now",
        secondary:"Explore",
        },
        
        {
        image:"/heroimages/hero4.png",
        tag:"BEST SELLERS",
        title:"Customer Favorites",
        subtitle:"The styles loved most by our community.",
        primary:"Shop Now",
        secondary:"Explore",
        },
        
        {
        image:"/heroimages/hero5.png",
        tag:"PREMIUM COLLECTION",
        title:"Luxury Redefined",
        subtitle:"A curated collection of timeless pieces made to stand out.",
        primary:"Shop Now",
        secondary:"Explore",
        },
        ];
        
        const [currentSlide, setCurrentSlide] = useState(0);
        const [resetTimer, setResetTimer] = useState(0);
        const handlers=useSwipeable({
            onSwipedLeft:()=>nextSlide(),
            onSwipedRight:()=>prevSlide(),
            preventScrollOnSwipe:true,
            trackMouse:true,
            });
        
            useEffect(() => {
                const interval = setInterval(() => {
                  nextSlide();
                }, 5000);
              
                return () => clearInterval(interval);
              }, [resetTimer]);
        
            const nextSlide = () => {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
                setResetTimer(Date.now());
            };
              
            const prevSlide = () => {
                setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
                setResetTimer(Date.now());
            };

        

    return (
      <section {...handlers} className="relative h-[85vh] w-full overflow-hidden">
  
        {/* Background Image */}
        <AnimatePresence>
        <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-0"
        >
            <Image
            src={slides[currentSlide].image}
            alt="Hero Banner"
            fill
            priority
            className="object-cover scale-100 animate-kenburns"
            />
        </motion.div>
        </AnimatePresence>
  
        {/* Dark Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/75 via-black/45 to-transparent"></div>
  
        {/* Content */}
        <div className="absolute inset-0 z-20 flex items-center">

        <AnimatePresence>

            <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.6 }}
            className="absolute left-28 max-w-xl flex flex-col"
            >

            {/* Tag */}
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.45em] text-[#C9A96E]">
                {slides[currentSlide].tag}
            </p>

            {/* Heading */}
            <h1 className="font-playfair text-6xl font-bold leading-[1.02] tracking-tight text-white">
                {slides[currentSlide].title}
            </h1>

            {/* Subtitle */}
            <p className="mt-8 max-w-md text-xl leading-9 text-gray-300">
                {slides[currentSlide].subtitle}
            </p>

            {/* Buttons */}
            <div className="mt-12 flex items-center gap-6">

                <button className="rounded-full border border-white/70 px-12 py-5 text-lg font-semibold text-white transition-all duration-300 hover:border-[#C9A96E] hover:text-[#C9A96E]">
                {slides[currentSlide].primary}
                </button>

                <button className="rounded-full border border-white/60 px-9 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-[#C9A96E] hover:text-[#C9A96E]">
                {slides[currentSlide].secondary}
                </button>

            </div>

            </motion.div>

        </AnimatePresence>

        </div>
        
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">

        {slides.map((_, index) => (
        <button
            key={index}
            onClick={() => {
            setCurrentSlide(index);
            setResetTimer(Date.now());
            }}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
            currentSlide === index
                ? "bg-[#C9A96E] scale-125 shadow-[0_0_12px_rgba(201,169,110,0.45)]"
                : "bg-white/40 hover:bg-white/70"
            }`}
        />
        ))}
    </div>
  
      </section>
    );
  }