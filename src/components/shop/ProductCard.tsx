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
  const isLifestyle = product.section === "lifestyle";
  const sectionPath = isLifestyle ? "/lifestyle" : "/slimming";

  const accent      = isLifestyle ? "text-blue-500"   : "text-pink-500";
  const accentBg    = isLifestyle ? "bg-blue-500"     : "bg-pink-500";
  const accentHover = isLifestyle ? "hover:bg-blue-600" : "hover:bg-pink-600";
  const softBg      = isLifestyle ? "bg-blue-50"      : "bg-pink-50";
  const softText    = isLifestyle ? "text-blue-600"   : "text-pink-600";
  const softBorder  = isLifestyle ? "border-blue-200" : "border-pink-200";
  const softHover   = isLifestyle
    ? "hover:bg-blue-500 hover:text-white hover:border-blue-500"
    : "hover:bg-pink-500 hover:text-white hover:border-pink-500";

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
      <Link href={`${sectionPath}/shop/${product.slug}`} className="group block">
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-pink-100 hover:border-pink-200">

          {/* Image area */}
          <div className={`relative aspect-[3/4] overflow-hidden ${softBg}`}>
            {product.images[0] ? (
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className={`w-14 h-14 rounded-full ${softBg} border ${softBorder} flex items-center justify-center mb-3`}>
                  <span className="font-mono text-xs font-bold text-charcoal/40">
                    {isLifestyle ? "CL" : "CS"}
                  </span>
                </div>
                <p className="font-display text-lg font-semibold text-charcoal/60">{product.name}</p>
                {product.tagline && (
                  <p className="font-sans text-xs text-charcoal/40 mt-1 italic">{product.tagline}</p>
                )}
              </div>
            )}

            {product.compareAtPrice && (
              <div className={`absolute top-3 left-3 ${accentBg} text-white text-[10px] font-mono font-bold px-2 py-1 rounded-full`}>
                SALE
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className={`absolute bottom-3 right-3 p-2.5 rounded-full text-white shadow-lg transition-all opacity-0 group-hover:opacity-100 ${accentBg} ${accentHover}`}
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingBag size={15} />
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
            <div className="flex items-center gap-2 mb-3">
              <span className={`font-mono font-bold text-base ${accent}`}>
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
              className={`w-full py-2 rounded-xl text-xs font-sans font-semibold border transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${softBg} ${softText} ${softBorder} ${softHover}`}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
