"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCartStore } from "@/lib/stores/cartStore";
import { toast } from "sonner";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const sectionPath = product.section === "slimming" ? "/slimming" : "/lifestyle";

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
    toast.success(`${product.name} added to cart`, {
      description: `R ${product.price.toFixed(2)}`,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        href={`${sectionPath}/shop/${product.slug}`}
        className="group block"
      >
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-pink-100 hover:border-pink-200">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-pink-50 to-pink-100">
            {product.images[0] ? (
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              /* Placeholder when no image */
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 ${
                    product.section === "slimming"
                      ? "bg-pink-200"
                      : "bg-teal-200"
                  }`}
                >
                  <span className="font-mono text-xs font-bold text-charcoal/60">
                    IMG
                  </span>
                </div>
                <p className="font-display text-xl font-semibold text-charcoal/70">
                  {product.name}
                </p>
                {product.tagline && (
                  <p className="font-sans text-xs text-charcoal/50 mt-1 italic">
                    {product.tagline}
                  </p>
                )}
              </div>
            )}

            {/* Sale badge */}
            {product.compareAtPrice && (
              <div className="absolute top-3 left-3 bg-pink-500 text-white text-[10px] font-mono font-bold px-2 py-1 rounded-full">
                SALE
              </div>
            )}

            {/* Quick add button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className={`absolute bottom-3 right-3 p-2.5 rounded-full text-white shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 ${
                product.section === "slimming"
                  ? "bg-pink-500 hover:bg-pink-600"
                  : "bg-teal-600 hover:bg-teal-700"
              }`}
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingBag size={16} />
            </motion.button>
          </div>

          {/* Info */}
          <div className="p-4">
            {product.tagline && (
              <p className="font-mono text-[10px] tracking-widest text-grey-mid uppercase mb-1">
                {product.tagline}
              </p>
            )}
            <h3 className="font-sans font-semibold text-charcoal text-sm leading-snug mb-2 line-clamp-2">
              {product.name}
            </h3>
            <div className="flex items-center gap-2">
              <span
                className={`font-mono font-bold text-base ${
                  product.section === "slimming"
                    ? "text-pink-500"
                    : "text-teal-600"
                }`}
              >
                R {product.price.toFixed(2)}
              </span>
              {product.compareAtPrice && (
                <span className="font-mono text-xs text-grey-mid line-through">
                  R {product.compareAtPrice.toFixed(2)}
                </span>
              )}
            </div>

            <button
              onClick={handleAddToCart}
              className={`w-full mt-3 py-2 rounded-xl text-xs font-sans font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                product.section === "slimming"
                  ? "bg-pink-50 text-pink-600 hover:bg-pink-500 hover:text-white border border-pink-200 hover:border-pink-500"
                  : "bg-teal-50 text-teal-700 hover:bg-teal-600 hover:text-white border border-teal-200 hover:border-teal-600"
              }`}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
