import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/shop/ProductCard";
import { lifestyleProducts } from "@/lib/data/products";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Craig Lifestyle",
  description:
    "Premium skincare, beauty tools, and wellness essentials. Glow. Own. You.",
};

export default function LifestylePage() {
  const featured = lifestyleProducts.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <div
        className="relative min-h-[70vh] flex flex-col items-center justify-center text-center overflow-hidden pt-20"
        style={{
          background:
            "linear-gradient(135deg, #F0FAFB 0%, #B2EBF2 50%, #80DEEA 100%)",
        }}
      >
        {/* Grid pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00838F" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <div className="relative z-10 px-4">
          {/* TODO: Replace with final Craig Lifestyle logo asset */}
          <div className="w-20 h-20 rounded-full bg-white/40 backdrop-blur-sm border border-white/60 flex items-center justify-center mx-auto mb-6 shadow-xl">
            <span className="font-display text-3xl font-bold text-teal-700">CL</span>
          </div>
          <p className="font-mono text-xs tracking-widest text-teal-700 uppercase mb-4">
            Craig Lifestyle
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-teal-900 mb-4">
            Glow. Own. You.
          </h1>
          <p className="font-sans text-teal-800/70 text-lg max-w-lg mx-auto mb-8">
            Premium skincare, beauty tools, and wellness essentials crafted for
            the woman who refuses to settle.
          </p>
          <Link
            href="/lifestyle/shop"
            className="inline-flex items-center gap-2 bg-teal-700 text-white font-sans font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-teal-600 hover:scale-105 transition-all"
          >
            Shop the Glow Range <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-mono text-xs tracking-widest text-teal-500 uppercase mb-2">
                Best Sellers
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal">
                The Glow Collection
              </h2>
            </div>
            <Link
              href="/lifestyle/shop"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-teal-600 hover:text-teal-700"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-charcoal mb-8 text-center">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Skincare", emoji: "✨", cat: "skincare" },
              { label: "Beauty", emoji: "💄", cat: "beauty" },
              { label: "Combos", emoji: "🎁", cat: "combo" },
              { label: "Samples", emoji: "🧴", cat: "sample" },
            ].map(({ label, emoji, cat }) => (
              <Link
                key={cat}
                href={`/lifestyle/shop?category=${cat}`}
                className="group flex flex-col items-center gap-2 p-6 bg-white rounded-2xl border border-teal-100 hover:border-teal-300 hover:shadow-md transition-all duration-200"
              >
                <span className="text-3xl">{emoji}</span>
                <span className="font-sans font-medium text-sm text-charcoal group-hover:text-teal-700">
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
