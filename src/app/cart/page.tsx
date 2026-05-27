"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/lib/stores/cartStore";

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="pt-20 min-h-screen flex flex-col items-center justify-center bg-bg-soft">
        <div className="text-center">
          <div className="w-20 h-20 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-8 h-8 text-pink-400" />
          </div>
          <h1 className="font-display text-3xl font-semibold text-charcoal mb-3">
            Your cart is empty
          </h1>
          <p className="font-sans text-grey-mid text-sm mb-8">
            Looks like you haven&apos;t added anything yet.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/lifestyle/shop"
              className="px-6 py-3 bg-teal-600 text-white font-sans font-semibold text-sm rounded-full hover:bg-teal-500 transition-colors"
            >
              Shop Lifestyle
            </Link>
            <Link
              href="/slimming/shop"
              className="px-6 py-3 bg-pink-500 text-white font-sans font-semibold text-sm rounded-full hover:bg-pink-400 transition-colors"
            >
              Shop Slimming
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-bg-soft">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-display text-4xl font-semibold text-charcoal mb-8">
          Your Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, i) => (
              <motion.div
                key={item.product.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-4 flex gap-4 shadow-sm border border-pink-50"
              >
                {/* Image */}
                <div className="w-20 h-24 rounded-xl overflow-hidden bg-gradient-to-br from-pink-50 to-pink-100 shrink-0 relative">
                  {item.product.images[0] ? (
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-mono text-[10px] text-charcoal/30 uppercase">
                        {item.product.section === "slimming" ? "CS" : "CL"}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-sans font-semibold text-sm text-charcoal leading-snug mb-1 line-clamp-2">
                    {item.product.name}
                  </h3>
                  {item.product.tagline && (
                    <p className="font-mono text-[10px] text-grey-mid uppercase tracking-wider mb-3">
                      {item.product.tagline}
                    </p>
                  )}

                  <div className="flex items-center justify-between">
                    {/* Qty controls */}
                    <div className="flex items-center gap-2 bg-grey-soft rounded-full px-3 py-1">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="w-5 h-5 flex items-center justify-center hover:text-pink-500 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="font-mono text-sm w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="w-5 h-5 flex items-center justify-center hover:text-pink-500 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        className={`font-mono font-bold text-sm ${
                          item.product.section === "slimming"
                            ? "text-pink-500"
                            : "text-teal-600"
                        }`}
                      >
                        R {(item.product.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="p-1.5 text-grey-mid hover:text-red-400 transition-colors"
                        aria-label={`Remove ${item.product.name}`}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-pink-50 sticky top-24">
              <h2 className="font-display text-xl font-semibold text-charcoal mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-grey-mid font-sans">Subtotal</span>
                  <span className="font-mono font-semibold text-charcoal">
                    R {subtotal().toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-grey-mid font-sans">Shipping</span>
                  <span className="font-mono text-charcoal/60 text-xs">
                    Calculated at checkout
                  </span>
                </div>
                <div className="border-t border-pink-100 pt-3 flex justify-between">
                  <span className="font-sans font-semibold text-charcoal">
                    Total
                  </span>
                  <span className="font-mono font-bold text-lg text-pink-500">
                    R {subtotal().toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Craig Coins hint */}
              <div className="bg-charcoal/5 rounded-xl p-3 mb-4">
                <p className="font-mono text-[10px] text-charcoal/50 uppercase tracking-widest mb-1">
                  Craig Coins
                </p>
                <p className="font-sans text-xs text-charcoal/70">
                  You&apos;ll earn{" "}
                  <span className="font-semibold text-pink-500">
                    {Math.floor(subtotal() / 100)} coins
                  </span>{" "}
                  on this order.
                </p>
              </div>

              <Link
                href="/checkout"
                className="block w-full text-center bg-pink-500 text-white font-sans font-semibold py-3.5 rounded-xl hover:bg-pink-400 transition-colors hover:scale-[1.02] active:scale-[0.98]"
              >
                Proceed to Checkout
              </Link>

              <Link
                href="/"
                className="block text-center text-xs text-grey-mid hover:text-charcoal transition-colors mt-3 font-sans"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
