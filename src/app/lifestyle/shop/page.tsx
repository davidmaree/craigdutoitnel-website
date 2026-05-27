"use client";

import { useState } from "react";
import { ProductCard } from "@/components/shop/ProductCard";
import { lifestyleProducts } from "@/lib/data/products";

const CATEGORIES = ["all", "skincare", "beauty", "combo", "tools", "sample"];

export default function LifestyleShopPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? lifestyleProducts.filter((p) => p.isActive)
      : lifestyleProducts.filter((p) => p.isActive && p.category === activeCategory);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <div
        className="py-16 text-center"
        style={{ background: "linear-gradient(145deg, #EFF6FF 0%, #BFDBFE 60%, #DBEAFE 100%)" }}
      >
        <p className="font-mono text-xs tracking-widest text-blue-500 uppercase mb-2">Craig Lifestyle</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-blue-900">The Glow Shop</h1>
        <p className="font-sans text-blue-600/60 mt-3 text-sm">
          {lifestyleProducts.filter((p) => p.isActive).length} products
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-sans font-semibold capitalize transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200"
              }`}
            >
              {cat === "all" ? "All Products" : cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-display text-2xl text-charcoal/40">No products in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
