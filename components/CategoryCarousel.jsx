"use client";

import Image from "next/image";

const shoeImages = [
  "/heroimages/hero1.png",
  "/heroimages/hero2.png",
  "/heroimages/hero3.png",
  "/heroimages/hero4.png",
  "/heroimages/hero5.png",
];

const watchImages = [
  "/heroimages/hero5.png",
  "/heroimages/hero4.png",
  "/heroimages/hero3.png",
  "/heroimages/hero2.png",
  "/heroimages/hero1.png",
];

function CarouselRow({ title, images, direction }) {
  const animation =
    direction === "left"
      ? "animate-marquee-left"
      : "animate-marquee-right";

  return (
    <div className="mb-20">

      <h3 className="mb-8 font-playfair text-3xl font-semibold text-white">
        {title}
      </h3>

      <div className="overflow-hidden">

        <div className={`flex w-max gap-6 ${animation}`}>

          {[...images, ...images].map((img, index) => (

            <div
              key={index}
              className="group relative h-[320px] w-[240px] flex-shrink-0 overflow-hidden rounded-3xl"
            >

              <Image
                src={img}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-5 left-5">

               

                <h4 className="mt-2 font-playfair text-2xl text-white">
                  {title}
                </h4>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default function CategoryCarousel() {
  return (
    <section className="bg-[#0B0B0B] py-24">

      <div className="mx-auto w-full ">

        <div className="mb-20 px-6 text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.45em] text-[#C9A96E]">
            Shop by Category
          </p>

          <h2 className="font-playfair text-5xl font-bold text-white">
            Discover Your Style
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Curated collections of premium footwear and luxury watches.
          </p>

        </div>

        <CarouselRow
          title="Shoes"
          images={shoeImages}
          direction="left"
        />

        <CarouselRow
          title="Watches"
          images={watchImages}
          direction="right"
        />

      </div>

    </section>
  );
}