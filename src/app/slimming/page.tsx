import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/shop/ProductCard";
import { slimmingProducts } from "@/lib/data/products";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Craig Slimming",
  description:
    "Medical-grade peptides, formulas, and slimming solutions. Science. Precision. Transformation.",
};

export default function SlimmingPage() {
  const featured = slimmingProducts.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <div
        className="relative min-h-[70vh] flex flex-col items-center justify-center text-center overflow-hidden pt-20"
        style={{
          background:
            "linear-gradient(135deg, #FFF0F3 0%, #FFB6C1 50%, #FF8FAB 100%)",
        }}
      >
        {/* Floating orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #C2185B, #FF8FAB)" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-36 h-36 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #FF6B8A, #FFB6C1)" }}
        />

        <div className="relative z-10 px-4">
          {/* TODO: Replace with final Craig Slimming logo asset */}
          <div className="w-20 h-20 rounded-full bg-white/40 backdrop-blur-sm border border-white/60 flex items-center justify-center mx-auto mb-6 shadow-xl">
            <span className="font-display text-3xl font-bold text-pink-700">CS</span>
          </div>
          <p className="font-mono text-xs tracking-widest text-pink-600 uppercase mb-4">
            Craig Slimming
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-pink-900 mb-4">
            Science. Precision.<br />Transformation.
          </h1>
          <p className="font-sans text-pink-800/70 text-lg max-w-lg mx-auto mb-8">
            Medical-grade peptides, advanced formulas, and pharmaceutical-quality
            slimming solutions — engineered for real, lasting results.
          </p>
          <Link
            href="/slimming/shop"
            className="inline-flex items-center gap-2 bg-pink-600 text-white font-sans font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-pink-500 hover:scale-105 transition-all"
          >
            Shop Slimming Range <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-mono text-xs tracking-widest text-pink-400 uppercase mb-2">
                Top Picks
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal">
                Slimming Essentials
              </h2>
            </div>
            <Link
              href="/slimming/shop"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-pink-500 hover:text-pink-600"
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
      <section className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-charcoal mb-8 text-center">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Peptides", emoji: "🔬", cat: "peptides" },
              { label: "Formulas", emoji: "⚗️", cat: "formulas" },
              { label: "Serums", emoji: "💊", cat: "serums" },
              { label: "Bundles", emoji: "📦", cat: "bundles" },
            ].map(({ label, emoji, cat }) => (
              <Link
                key={cat}
                href={`/slimming/shop?category=${cat}`}
                className="group flex flex-col items-center gap-2 p-6 bg-white rounded-2xl border border-pink-100 hover:border-pink-300 hover:shadow-md transition-all duration-200"
              >
                <span className="text-3xl">{emoji}</span>
                <span className="font-sans font-medium text-sm text-charcoal group-hover:text-pink-600">
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
