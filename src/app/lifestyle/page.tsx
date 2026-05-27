import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/shop/ProductCard";
import { lifestyleProducts } from "@/lib/data/products";
import { ArrowRight, Sparkles, Droplets, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Craig Lifestyle",
  description: "Premium skincare, beauty tools, and wellness essentials. Glow. Own. You.",
};

export default function LifestylePage() {
  const featured = lifestyleProducts.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <>
      {/* Hero — blue */}
      <div
        className="relative min-h-[70vh] flex flex-col items-center justify-center text-center overflow-hidden pt-24"
        style={{ background: "linear-gradient(145deg, #EFF6FF 0%, #BFDBFE 50%, #3B82F6 100%)" }}
      >
        <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid-ls" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1D4ED8" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-ls)" />
        </svg>

        <div className="relative z-10 px-4">
          {/* TODO: Replace with final Craig Lifestyle logo asset */}
          <div className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-sm border border-white/50 flex items-center justify-center mx-auto mb-6 shadow-xl">
            <span className="font-display text-3xl font-bold text-white">CL</span>
          </div>
          <p className="font-mono text-xs tracking-widest text-blue-100 uppercase mb-4">Craig Lifestyle</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4">
            Glow. Own. You.
          </h1>
          <p className="font-sans text-white/70 text-lg max-w-lg mx-auto mb-8">
            Premium skincare, beauty tools, and wellness essentials crafted for the woman who refuses to settle.
          </p>
          <Link
            href="/lifestyle/shop"
            className="inline-flex items-center gap-2 bg-white text-blue-600 font-sans font-semibold px-8 py-3.5 rounded-full shadow-lg hover:scale-105 transition-all"
          >
            Shop the Glow Range <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Pillars — white */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Sparkles className="w-6 h-6 text-blue-500" />, title: "Glow Technology", desc: "Scientifically formulated to amplify your skin's natural radiance." },
              { icon: <Droplets className="w-6 h-6 text-blue-400" />, title: "Deep Hydration",  desc: "Moisture-locking formulas that nourish from the inside out." },
              { icon: <Star       className="w-6 h-6 text-blue-500" />, title: "Salon Results",  desc: "Professional-grade results you can achieve at home, every day." },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white border border-blue-100 hover:shadow-md transition-shadow">
                <div className="mb-5">{item.icon}</div>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="font-sans text-sm text-grey-mid leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products — white */}
      <section className="py-24 bg-white border-t border-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-mono text-xs tracking-widest text-blue-400 uppercase mb-2">Best Sellers</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal">The Glow Collection</h2>
            </div>
            <Link href="/lifestyle/shop" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-blue-500 hover:text-blue-600">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </div>
      </section>

      {/* Categories — white */}
      <section className="py-16 bg-white border-t border-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-charcoal mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Skincare", icon: <Droplets size={22} className="text-blue-400" />, cat: "skincare" },
              { label: "Beauty",   icon: <Star       size={22} className="text-blue-500" />, cat: "beauty"   },
              { label: "Combos",   icon: <Sparkles   size={22} className="text-blue-400" />, cat: "combo"    },
              { label: "Samples",  icon: <ArrowRight size={22} className="text-blue-300" />, cat: "sample"   },
            ].map(({ label, icon, cat }) => (
              <Link
                key={cat}
                href={`/lifestyle/shop?category=${cat}`}
                className="group flex flex-col items-center gap-2 p-6 bg-white rounded-2xl border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-200"
              >
                {icon}
                <span className="font-sans font-medium text-sm text-charcoal group-hover:text-blue-600">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
