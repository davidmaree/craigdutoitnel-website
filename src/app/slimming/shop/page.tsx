"use client";

import { useState } from "react";
import { ProductCard } from "@/components/shop/ProductCard";
import { slimmingProducts } from "@/lib/data/products";

const CATEGORIES = ["all", "peptides", "formulas", "serums", "bundles"];

export default function SlimmingShopPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? slimmingProducts.filter((p) => p.isActive)
      : slimmingProducts.filter((p) => p.isActive && p.category === activeCategory);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <div
        className="py-16 text-center"
        style={{ background: "linear-gradient(145deg, #FFF5F9 0%, #FFB0D4 60%, #FFE8F2 100%)" }}
      >
        <p className="font-mono text-xs tracking-widest text-pink-500 uppercase mb-2">Craig Slimming</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-pink-900">Slimming Shop</h1>
        <p className="font-sans text-pink-600/60 mt-3 text-sm">
          {slimmingProducts.filter((p) => p.isActive).length} products
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
                  ? "bg-pink-500 text-white shadow-md"
                  : "bg-pink-50 text-pink-500 hover:bg-pink-100 border border-pink-200"
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
