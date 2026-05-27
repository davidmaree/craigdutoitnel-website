"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, User, Menu, X, MessageCircle } from "lucide-react";
import { useCartStore } from "@/lib/stores/cartStore";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const totalItems = useCartStore((s) => s.totalItems());

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-pink-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            {/* TODO: Replace with final logo asset */}
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-300 to-pink-500 flex items-center justify-center shadow-md group-hover:shadow-pink-200 transition-shadow">
              <span className="font-display text-white font-bold text-sm">C</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-display text-lg font-semibold text-charcoal leading-none">
                Craig du Toit Nel
              </p>
              <p className="font-mono text-[10px] text-grey-mid tracking-widest uppercase">
                Wellness Platform
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/slimming"
              className="text-sm font-medium text-charcoal hover:text-pink-500 transition-colors relative group"
            >
              Slimming
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/lifestyle"
              className="text-sm font-medium text-charcoal hover:text-teal-500 transition-colors relative group"
            >
              Lifestyle
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-charcoal hover:text-pink-500 transition-colors relative group"
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 group-hover:w-full transition-all duration-300" />
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Link
              href="/account"
              className="hidden md:flex p-2 rounded-full hover:bg-pink-100 transition-colors"
              aria-label="My Account"
            >
              <User size={20} className="text-charcoal" />
            </Link>

            <Link
              href="/cart"
              className="relative p-2 rounded-full hover:bg-pink-100 transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingBag size={20} className="text-charcoal" />
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    key="badge"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-pink-500 text-white text-[10px] font-mono font-bold rounded-full flex items-center justify-center"
                  >
                    {totalItems > 9 ? "9+" : totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>

            {/* Chat trigger (opens ChatWidget) */}
            <button
              onClick={() => {
                const event = new CustomEvent("open-chat");
                window.dispatchEvent(event);
              }}
              className="hidden md:flex p-2 rounded-full hover:bg-pink-100 transition-colors"
              aria-label="Open AI chat"
            >
              <MessageCircle size={20} className="text-charcoal" />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-full hover:bg-pink-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X size={20} className="text-charcoal" />
              ) : (
                <Menu size={20} className="text-charcoal" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-pink-100"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              <Link
                href="/slimming"
                className="text-base font-medium text-charcoal hover:text-pink-500 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Craig Slimming
              </Link>
              <Link
                href="/lifestyle"
                className="text-base font-medium text-charcoal hover:text-teal-500 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Craig Lifestyle
              </Link>
              <Link
                href="/blog"
                className="text-base font-medium text-charcoal hover:text-pink-500 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/account"
                className="text-base font-medium text-charcoal hover:text-pink-500 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                My Account
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
