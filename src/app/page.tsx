import type { Metadata } from "next";
import { SectionSwitcher } from "@/components/home/SectionSwitcher";
import { ProductCard } from "@/components/shop/ProductCard";
import { getFeaturedProducts } from "@/lib/data/products";
import Link from "next/link";
import { Shield, Sparkles, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Craig du Toit Nel | Premium Wellness Platform",
  description:
    "Where Craig Slimming meets Craig Lifestyle — two premium wellness worlds under one roof.",
};

export default function HomePage() {
  const featuredSlimming  = getFeaturedProducts("slimming").slice(0, 3);
  const featuredLifestyle = getFeaturedProducts("lifestyle").slice(0, 3);

  return (
    <>
      <SectionSwitcher />

      {/* Why Craig Wellness — white bg, mixed accents */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-mono text-xs tracking-widest uppercase mb-3 gradient-brand-text">
              Why Choose Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal">
              The Craig Difference
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon:   <Shield className="w-6 h-6 text-pink-500" />,
                iconBg: "bg-pink-50",
                title:  "Medical-Grade Quality",
                desc:   "Every product is formulated to clinical standards — because your body deserves nothing less than the best.",
                border: "border-pink-100",
              },
              {
                icon:   <Sparkles className="w-6 h-6 text-blue-500" />,
                iconBg: "bg-blue-50",
                title:  "Real Results",
                desc:   "Thousands of transformations across Craig Slimming and Craig Lifestyle — visible, measurable, lasting results.",
                border: "border-blue-100",
              },
              {
                icon:   <Heart className="w-6 h-6 text-pink-400" />,
                iconBg: "bg-pink-50",
                title:  "Holistic Approach",
                desc:   "We combine medical science with lifestyle elevation — your full wellness journey, supported every step of the way.",
                border: "border-pink-100",
              },
            ].map((p, i) => (
              <div
                key={i}
                className={`p-8 rounded-2xl bg-white border ${p.border} hover:shadow-md transition-shadow duration-300`}
              >
                <div className={`w-12 h-12 rounded-xl ${p.iconBg} flex items-center justify-center mb-5`}>
                  {p.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-3">{p.title}</h3>
                <p className="font-sans text-sm text-grey-mid leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Lifestyle — white bg, blue accents */}
      <section className="py-24 bg-white border-t border-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-mono text-xs tracking-widest text-blue-400 uppercase mb-2">Craig Lifestyle</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal">Glow Favourites</h2>
            </div>
            <Link href="/lifestyle/shop" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredLifestyle.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </div>
      </section>

      {/* Featured Slimming — white bg, pink accents */}
      <section className="py-24 bg-white border-t border-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-mono text-xs tracking-widest text-pink-400 uppercase mb-2">Craig Slimming</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal">Top Sellers</h2>
            </div>
            <Link href="/slimming/shop" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-pink-500 hover:text-pink-600 transition-colors">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSlimming.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </div>
      </section>

      {/* Craig Coins banner — gradient from pink to blue */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #F45FA0 0%, #7C3AED 50%, #3B82F6 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 mb-6">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            <span className="font-mono text-xs tracking-widest text-white/80 uppercase">Loyalty Rewards</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
            Earn Craig Coins with Every Purchase
          </h2>
          <p className="font-sans text-white/70 max-w-lg mx-auto mb-8 text-sm leading-relaxed">
            Spend R100 and earn 1 Craig Coin. Redeem your coins for rand-for-rand discounts on
            future orders. The more you shop, the more you save.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/auth/register"
              className="inline-flex items-center gap-2 bg-white text-pink-500 font-sans font-semibold text-sm px-8 py-3 rounded-full hover:scale-105 active:scale-95 transition-transform shadow-lg"
            >
              Create Account &amp; Start Earning
            </Link>
            <Link href="/account/coins" className="text-sm font-sans text-white/60 hover:text-white transition-colors">
              Learn more about Craig Coins →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
