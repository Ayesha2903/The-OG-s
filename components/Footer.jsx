export default function Footer() {
    return (
      <footer className="mt-16 border-t border-[#C9A96E]/10 bg-[#161616]">
  
        <div className="mx-auto max-w-7xl px-6 py-16">
  
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
  
            {/* Brand */}
  
            <div>
  
              <h2 className="font-playfair text-3xl font-semibold text-white">
                THE OGS
              </h2>
  
              <p className="mt-4 max-w-xs leading-7 text-zinc-400">
                Premium sneakers and watches for men and women. Built to stand out.
                Designed to be remembered.
              </p>
  
            </div>
  
            {/* Shop */}
  
            <div>
  
              <h5 className="mb-5 font-playfair text-xl font-semibold text-white">
                Shop
              </h5>
  
              <ul className="space-y-3 text-zinc-400">
  
                <li>
                  <a href="/shop?category=shoes" className="transition hover:text-[#C9A96E]">
                    Shoes
                  </a>
                </li>
  
                <li>
                  <a href="/shop?category=watches" className="transition hover:text-[#C9A96E]">
                    Watches
                  </a>
                </li>
  
                <li>
                  <a href="/shop?tag=new" className="transition hover:text-[#C9A96E]">
                    New Arrivals
                  </a>
                </li>
  
                <li>
                  <a href="/shop?tag=trending" className="transition hover:text-[#C9A96E]">
                    Best Sellers
                  </a>
                </li>
  
              </ul>
  
            </div>
  
            {/* Company */}
  
            <div>
  
              <h5 className="mb-5 font-playfair text-xl font-semibold text-white">
                Company
              </h5>
  
              <ul className="space-y-3 text-zinc-400">
  
                <li>
                  <a href="/contact" className="transition hover:text-[#C9A96E]">
                    Contact
                  </a>
                </li>
  
                <li>
                  <a href="#" className="transition hover:text-[#C9A96E]">
                    Shipping
                  </a>
                </li>
  
                <li>
                  <a href="#" className="transition hover:text-[#C9A96E]">
                    Returns
                  </a>
                </li>
  
                <li>
                  <a href="#" className="transition hover:text-[#C9A96E]">
                    FAQ
                  </a>
                </li>
  
              </ul>
  
            </div>
  
            {/* Contact */}
  
            <div>
  
              <h5 className="mb-5 font-playfair text-xl font-semibold text-white">
                Contact
              </h5>
  
              <ul className="space-y-3 text-zinc-400">
  
                <li>
                  <a
                    href="tel:+918779901410"
                    className="transition hover:text-[#C9A96E]"
                  >
                    📞 +91 877-990-1410
                  </a>
                </li>
  
                <li>
                  <a
                    href="mailto:theogs@gmail.com"
                    className="transition hover:text-[#C9A96E]"
                  >
                    ✉️ theogs@gmail.com
                  </a>
                </li>
  
                <li>
                  🕒 Mon - Sat · 10am - 8pm
                </li>
  
              </ul>
  
            </div>
  
          </div>
  
          {/* Bottom */}
  
          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#C9A96E]/10 pt-8 text-sm text-zinc-500 md:flex-row">
  
            <span>© 2026 THE OGS. All rights reserved.</span>
  
            <span>Built to stand out.</span>
  
          </div>
  
        </div>
  
      </footer>
    );
  }