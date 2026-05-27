import type { Metadata } from "next";
import { SectionSwitcher } from "@/components/home/SectionSwitcher";
import { ProductCard } from "@/components/shop/ProductCard";
import { getFeaturedProducts } from "@/lib/data/products";
import Link from "next/link";
import { Sparkles, Shield, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Craig du Toit Nel | Premium Wellness Platform",
  description:
    "Where Craig Slimming meets Craig Lifestyle — two premium wellness worlds under one roof.",
};

export default function HomePage() {
  const featuredSlimming = getFeaturedProducts("slimming").slice(0, 3);
  const featuredLifestyle = getFeaturedProducts("lifestyle").slice(0, 3);

  return (
    <>
      {/* Hero Split Switcher */}
      <SectionSwitcher />

      {/* Why Craig Wellness */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-mono text-xs tracking-widest text-pink-400 uppercase mb-3">
              Why Choose Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal">
              The Craig Difference
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-7 h-7 text-pink-500" />,
                title: "Medical-Grade Quality",
                desc: "Every product is formulated to clinical standards — because your body deserves nothing less than the best.",
                color: "from-pink-50 to-pink-100",
                border: "border-pink-200",
              },
              {
                icon: <Sparkles className="w-7 h-7 text-teal-500" />,
                title: "Real Results",
                desc: "Thousands of transformations across Craig Slimming and Craig Lifestyle — visible, measurable, lasting results.",
                color: "from-teal-50 to-teal-100",
                border: "border-teal-200",
              },
              {
                icon: <Leaf className="w-7 h-7 text-pink-400" />,
                title: "Holistic Approach",
                desc: "We combine medical science with lifestyle elevation — your full wellness journey, supported every step of the way.",
                color: "from-pink-50 to-bg-soft",
                border: "border-pink-100",
              },
            ].map((pillar, i) => (
              <div
                key={i}
                className={`p-8 rounded-2xl bg-gradient-to-br ${pillar.color} border ${pillar.border} hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5">
                  {pillar.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-3">
                  {pillar.title}
                </h3>
                <p className="font-sans text-sm text-grey-mid leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Lifestyle Products */}
      <section className="py-24 bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-mono text-xs tracking-widest text-teal-500 uppercase mb-2">
                Craig Lifestyle
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal">
                Glow Favourites
              </h2>
            </div>
            <Link
              href="/lifestyle/shop"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-sans font-medium text-teal-600 hover:text-teal-700 transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredLifestyle.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/lifestyle/shop"
              className="inline-flex items-center gap-1 text-sm font-sans font-medium text-teal-600"
            >
              View all Lifestyle products →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Slimming Products */}
      <section className="py-24 bg-gradient-to-br from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-mono text-xs tracking-widest text-pink-400 uppercase mb-2">
                Craig Slimming
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal">
                Top Sellers
              </h2>
            </div>
            <Link
              href="/slimming/shop"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-sans font-medium text-pink-500 hover:text-pink-600 transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSlimming.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/slimming/shop"
              className="inline-flex items-center gap-1 text-sm font-sans font-medium text-pink-500"
            >
              View all Slimming products →
            </Link>
          </div>
        </div>
      </section>

      {/* Craig Coins Banner */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-lg">🪙</span>
            <span className="font-mono text-xs tracking-widest text-white/70 uppercase">
              Loyalty Rewards
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
            Earn Craig Coins with Every Purchase
          </h2>
          <p className="font-sans text-white/60 max-w-lg mx-auto mb-8 text-sm leading-relaxed">
            Spend R100 and earn 1 Craig Coin. Redeem your coins for rand-for-rand
            discounts on future orders. The more you shop, the more you save.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/auth/register"
              className="inline-flex items-center gap-2 bg-pink-500 text-white font-sans font-semibold text-sm px-8 py-3 rounded-full hover:bg-pink-400 transition-colors hover:scale-105 active:scale-95"
            >
              Create Account &amp; Start Earning
            </Link>
            <Link
              href="/account/coins"
              className="text-sm font-sans text-white/50 hover:text-white/80 transition-colors"
            >
              Learn more about Craig Coins →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
