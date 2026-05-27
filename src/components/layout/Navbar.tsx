"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, User, Menu, X } from "lucide-react";
import { useCartStore } from "@/lib/stores/cartStore";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home",      href: "/" },
  { label: "Slimming",  href: "/slimming" },
  { label: "Lifestyle", href: "/lifestyle" },
  { label: "Blog",      href: "/blog" },
  { label: "Contact",   href: "/contact" },
];

function getSection(pathname: string) {
  if (pathname.startsWith("/slimming"))  return "slimming";
  if (pathname.startsWith("/lifestyle")) return "lifestyle";
  return "mixed";
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const totalItems = useCartStore((s) => s.totalItems());
  const pathname   = usePathname();
  const section    = getSection(pathname);

  /* Active/hover colour per link */
  function linkColors(href: string) {
    if (href.startsWith("/slimming"))  return { active: "text-pink-500 bg-pink-50",  hover: "hover:text-pink-500 hover:bg-pink-50",  indicator: "bg-pink-50" };
    if (href.startsWith("/lifestyle")) return { active: "text-blue-500 bg-blue-50",  hover: "hover:text-blue-500 hover:bg-blue-50",  indicator: "bg-blue-50" };
    /* mixed — home / blog / contact */
    return                                    { active: "text-pink-500 bg-pink-50",  hover: "hover:text-pink-400 hover:bg-pink-50",  indicator: "bg-pink-50" };
  }

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
      <nav className="max-w-6xl mx-auto">

        {/* Gradient wrapper — always pink (left) → blue (right) */}
        <div
          className="p-px rounded-2xl"
          style={{ background: "linear-gradient(to right, #F45FA0, #3B82F6)" }}
        >
          <div className="bg-white rounded-2xl px-4 sm:px-6 flex items-center justify-between h-14 md:h-16 shadow-md shadow-black/[0.05]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              {/* TODO: Replace with final logo asset */}
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center shadow-sm"
                style={{ background: "linear-gradient(to right, #F45FA0, #3B82F6)" }}
              >
                <span className="font-display text-white font-bold text-xs">C</span>
              </div>
              <div className="hidden sm:block">
                <p className="font-display text-base font-semibold text-charcoal leading-none">
                  Craig du Toit Nel
                </p>
                <p
                  className="font-mono text-[9px] tracking-widest uppercase"
                  style={{
                    background: "linear-gradient(to right, #F45FA0, #3B82F6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Wellness
                </p>
              </div>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map(({ label, href }) => {
                const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
                const c = linkColors(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive ? c.active : `text-charcoal ${c.hover}`
                    }`}
                  >
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className={`absolute inset-0 rounded-xl -z-10 ${c.indicator}`}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1 shrink-0">
              <Link
                href="/account"
                className="hidden md:flex p-2 rounded-xl hover:bg-pink-50 transition-colors"
                aria-label="My Account"
              >
                <User size={18} className="text-charcoal" />
              </Link>

              <Link
                href="/cart"
                className="relative p-2 rounded-xl hover:bg-pink-50 transition-colors"
                aria-label="Cart"
              >
                <ShoppingBag size={18} className="text-charcoal" />
                <AnimatePresence>
                  {totalItems > 0 && (
                    <motion.span
                      key="badge"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className={`absolute -top-0.5 -right-0.5 w-4 h-4 text-white text-[9px] font-mono font-bold rounded-full flex items-center justify-center ${
                        section === "lifestyle" ? "bg-blue-500" : "bg-pink-500"
                      }`}
                    >
                      {totalItems > 9 ? "9+" : totalItems}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-xl hover:bg-pink-50 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={18} className="text-charcoal" /> : <Menu size={18} className="text-charcoal" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="mt-2 bg-white rounded-2xl shadow-lg border border-pink-100 px-4 py-4 flex flex-col gap-1"
            >
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium text-charcoal transition-colors ${
                    href.startsWith("/lifestyle")
                      ? "hover:text-blue-500 hover:bg-blue-50"
                      : "hover:text-pink-500 hover:bg-pink-50"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <div className="border-t border-pink-100 mt-2 pt-3 flex gap-2">
                <Link
                  href="/account"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 text-center py-2.5 rounded-xl text-sm font-medium text-charcoal hover:bg-pink-50 transition-colors"
                >
                  My Account
                </Link>
                <Link
                  href="/cart"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 text-center py-2.5 rounded-xl text-sm font-medium text-white transition-colors"
                  style={{ background: "linear-gradient(to right, #F45FA0, #3B82F6)" }}
                >
                  Cart {totalItems > 0 && `(${totalItems})`}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
