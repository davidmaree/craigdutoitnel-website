import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/shop/ProductCard";
import { slimmingProducts } from "@/lib/data/products";
import { ArrowRight, FlaskConical, Zap, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Craig Slimming",
  description: "Medical-grade peptides, formulas, and slimming solutions. Science. Precision. Transformation.",
};

export default function SlimmingPage() {
  const featured = slimmingProducts.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <>
      {/* Hero — pink */}
      <div
        className="relative min-h-[70vh] flex flex-col items-center justify-center text-center overflow-hidden pt-24"
        style={{ background: "linear-gradient(145deg, #FFF5F9 0%, #FFB0D4 55%, #F45FA0 100%)" }}
      >
        <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #D94080, #FFB0D4)" }} />
        <div className="absolute bottom-1/3 right-1/4 w-36 h-36 rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle, #F45FA0, #FFE8F2)" }} />

        <div className="relative z-10 px-4">
          {/* TODO: Replace with final Craig Slimming logo asset */}
          <div className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-sm border border-white/50 flex items-center justify-center mx-auto mb-6 shadow-xl">
            <span className="font-display text-3xl font-bold text-white">CS</span>
          </div>
          <p className="font-mono text-xs tracking-widest text-pink-100 uppercase mb-4">Craig Slimming</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4">
            Science. Precision.<br />Transformation.
          </h1>
          <p className="font-sans text-white/70 text-lg max-w-lg mx-auto mb-8">
            Medical-grade peptides, advanced formulas, and pharmaceutical-quality slimming solutions — engineered for real, lasting results.
          </p>
          <Link
            href="/slimming/shop"
            className="inline-flex items-center gap-2 bg-white text-pink-500 font-sans font-semibold px-8 py-3.5 rounded-full shadow-lg hover:scale-105 transition-all"
          >
            Shop Slimming Range <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Pillars — white */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FlaskConical className="w-6 h-6 text-pink-500" />, title: "Pharmaceutical Grade",  desc: "Every formula meets medical-grade standards — clinical efficacy, not empty promises." },
              { icon: <Zap          className="w-6 h-6 text-pink-400" />, title: "Accelerated Results",   desc: "Peptide-driven formulas that work with your metabolism to deliver faster, visible results." },
              { icon: <ShieldCheck  className="w-6 h-6 text-pink-500" />, title: "Safe & Tested",         desc: "Fully tested and certified — because your health and safety come before everything." },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white border border-pink-100 hover:shadow-md transition-shadow">
                <div className="mb-5">{item.icon}</div>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="font-sans text-sm text-grey-mid leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products — white */}
      <section className="py-24 bg-white border-t border-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-mono text-xs tracking-widest text-pink-400 uppercase mb-2">Top Picks</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal">Slimming Essentials</h2>
            </div>
            <Link href="/slimming/shop" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-pink-500 hover:text-pink-600">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </div>
      </section>

      {/* Categories — white */}
      <section className="py-16 bg-white border-t border-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-charcoal mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Peptides", icon: <FlaskConical size={22} className="text-pink-400" />, cat: "peptides" },
              { label: "Formulas", icon: <Zap          size={22} className="text-pink-500" />, cat: "formulas" },
              { label: "Serums",   icon: <ShieldCheck  size={22} className="text-pink-400" />, cat: "serums"   },
              { label: "Bundles",  icon: <ArrowRight   size={22} className="text-pink-300" />, cat: "bundles"  },
            ].map(({ label, icon, cat }) => (
              <Link
                key={cat}
                href={`/slimming/shop?category=${cat}`}
                className="group flex flex-col items-center gap-2 p-6 bg-white rounded-2xl border border-pink-100 hover:border-pink-300 hover:shadow-md transition-all duration-200"
              >
                {icon}
                <span className="font-sans font-medium text-sm text-charcoal group-hover:text-pink-500">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
