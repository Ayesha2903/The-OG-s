"use client";
import { Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";


export default function Reviews() {

    const [emblaRef] = useEmblaCarousel(
        {
          loop: true,
          align: "start",
        },
        [Autoplay({ delay: 4000, stopOnInteraction: false })]
      );

  const reviews = [
    {
      name: "Ayesha Khan",
      rating: 5,
      type: "image",
      media: "/reviews/review1.jpg",
      text: "Amazing quality. The shoes look even better in person.",
    },
    {
      name: "Sarah Ali",
      rating: 5,
      type: "video",
      media: "/reviews/review2.mp4",
      text: "Loved everything about the watch. Definitely ordering again!",
    },
    {
      name: "Ahmed",
      rating: 5,
      type: "image",
      media: "/reviews/review3.jpg",
      text: "Premium packaging and super fast delivery.",
    },
    {
        name: "Ayesha Khan",
        rating: 5,
        type: "image",
        media: "/reviews/review1.jpg",
        text: "Amazing quality. The shoes look even better in person.",
      },
      {
        name: "Sarah Ali",
        rating: 5,
        type: "video",
        media: "/reviews/review2.mp4",
        text: "Loved everything about the watch. Definitely ordering again!",
      },
      {
        name: "Ahmed",
        rating: 5,
        type: "image",
        media: "/reviews/review3.jpg",
        text: "Premium packaging and super fast delivery.",
      },
  ];

  return (
    <section className="bg-[#0B0B0B] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14">

          <p className="mb-3 text-sm uppercase tracking-[0.45em] text-[#C9A96E]">
            Customer Reviews
          </p>

          <h2 className="font-playfair text-5xl font-bold text-white">
            Loved By Our Customers
          </h2>

        </div>

        <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-3">

          {reviews.map((review, index) => (

            <div
              key={index}
              className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] flex-shrink-0 pl-3"
            >

              {review.type === "image" ? (

                <img
                  src={review.media}
                  alt={review.name}
                  className="h-72 w-full object-cover"
                />

              ) : (

                <video
                  controls
                  className="h-72 w-full object-cover"
                >
                  <source src={review.media} type="video/mp4" />
                </video>

              )}

              <div className="p-6">

                <div className="mb-4 flex">

                  {[...Array(review.rating)].map((_, i) => (

                    <Star
                      key={i}
                      size={18}
                      className="fill-[#C9A96E] text-[#C9A96E]"
                    />

                  ))}

                </div>

                <p className="mb-5 text-zinc-300">
                  {review.text}
                </p>

                <div className="flex items-center gap-3">
                <img
                    src="/default-avatar.jpg"
                    alt={review.name}
                    className="h-10 w-10 rounded-full object-cover border border-[#C9A96E]/20"
                />
                <h4 className="font-semibold text-white">
                    {review.name}
                </h4>
                </div>

              </div>

            </div>
            

          ))}
          </div>
        </div>
      </div>

    </section>
  );
}