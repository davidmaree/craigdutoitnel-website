"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ActiveSide = "none" | "slimming" | "lifestyle";

export function SectionSwitcher() {
  const [active, setActive] = useState<ActiveSide>("none");

  const leftWidth  = active === "slimming"  ? "65%" : active === "lifestyle" ? "35%" : "50%";
  const rightWidth = active === "lifestyle" ? "65%" : active === "slimming"  ? "35%" : "50%";

  return (
    <div
      className="relative flex h-screen min-h-[600px] overflow-hidden"
      onMouseLeave={() => setActive("none")}
    >
      {/* ── Slimming side — pink ─────────────────────────────── */}
      <motion.div
        animate={{ width: leftWidth }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        className="relative flex flex-col items-center justify-center cursor-pointer overflow-hidden"
        onMouseEnter={() => setActive("slimming")}
        style={{ background: "linear-gradient(145deg, #FFF5F9 0%, #FFB0D4 55%, #F45FA0 100%)" }}
      >
        {/* Floating orbs */}
        <motion.div
          animate={{ y: active === "slimming" ? [-20, 0, -20] : 0 }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-36 h-36 rounded-full opacity-20 blur-2xl"
          style={{ background: "radial-gradient(circle, #D94080, #FFB0D4)" }}
        />
        <motion.div
          animate={{ y: active === "slimming" ? [0, -28, 0] : 0 }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full opacity-20 blur-2xl"
          style={{ background: "radial-gradient(circle, #F45FA0, #FFE8F2)" }}
        />

        <div className="relative z-10 flex flex-col items-center text-center px-8">
          {/* TODO: Replace with final Craig Slimming logo asset */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm border border-white/50 flex items-center justify-center mx-auto mb-3 shadow-xl">
              <span className="font-display text-2xl font-bold text-white">CS</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-sm">
              Craig Slimming
            </h2>
          </motion.div>

          <motion.p
            animate={{ opacity: 1 }}
            className="font-sans text-white/80 text-sm md:text-base mb-2 max-w-xs"
          >
            Medical-grade peptides &amp; formulas
          </motion.p>

          <motion.p
            animate={{ opacity: active === "slimming" ? 1 : 0, y: active === "slimming" ? 0 : 10 }}
            transition={{ duration: 0.3 }}
            className="font-display italic text-white/70 text-lg mb-8"
          >
            Science. Precision. Transformation.
          </motion.p>

          <motion.div animate={{ scale: active === "slimming" ? 1 : 0.95, opacity: active === "slimming" ? 1 : 0.75 }}>
            <Link
              href="/slimming"
              className="group inline-flex items-center gap-2 bg-white text-pink-500 font-sans font-semibold text-sm px-6 py-3 rounded-full shadow-lg hover:shadow-pink-100 hover:scale-105 transition-all duration-200"
            >
              Enter Slimming
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Rising pill shapes on hover */}
        {active === "slimming" && [0,1,2,3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 0.12, y: -20 }}
            transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, repeatType: "loop" }}
            className="absolute rounded-full bg-white"
            style={{ width: `${8+i*4}px`, height: `${20+i*8}px`, left: `${20+i*20}%`, bottom: "20%" }}
          />
        ))}
      </motion.div>

      {/* Glowing centre divider */}
      <motion.div
        animate={{
          opacity: [0.4, 1, 0.4],
          boxShadow: ["0 0 8px rgba(244,95,160,0.4)", "0 0 24px rgba(59,130,246,0.6)", "0 0 8px rgba(244,95,160,0.4)"],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-0 bottom-0 w-px z-10"
        style={{
          transform: "translateX(-50%)",
          background: "linear-gradient(to bottom, transparent, #F45FA0 30%, #3B82F6 70%, transparent)",
        }}
      />

      {/* ── Lifestyle side — blue ─────────────────────────────── */}
      <motion.div
        animate={{ width: rightWidth }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        className="relative flex flex-col items-center justify-center cursor-pointer overflow-hidden"
        onMouseEnter={() => setActive("lifestyle")}
        style={{ background: "linear-gradient(225deg, #EFF6FF 0%, #93C5FD 55%, #3B82F6 100%)" }}
      >
        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1D4ED8" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <motion.div
          animate={{ y: active === "lifestyle" ? [-15, 10, -15] : 0 }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full opacity-20 blur-2xl"
          style={{ background: "radial-gradient(circle, #1D4ED8, #93C5FD)" }}
        />

        <div className="relative z-10 flex flex-col items-center text-center px-8">
          {/* TODO: Replace with final Craig Lifestyle logo asset */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm border border-white/50 flex items-center justify-center mx-auto mb-3 shadow-xl">
              <span className="font-display text-2xl font-bold text-white">CL</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-sm">
              Craig Lifestyle
            </h2>
          </motion.div>

          <motion.p
            animate={{ opacity: 1 }}
            className="font-sans text-white/80 text-sm md:text-base mb-2 max-w-xs"
          >
            Skincare, beauty &amp; wellness essentials
          </motion.p>

          <motion.p
            animate={{ opacity: active === "lifestyle" ? 1 : 0, y: active === "lifestyle" ? 0 : 10 }}
            transition={{ duration: 0.3 }}
            className="font-display italic text-white/70 text-lg mb-8"
          >
            Glow. Own. You.
          </motion.p>

          <motion.div animate={{ scale: active === "lifestyle" ? 1 : 0.95, opacity: active === "lifestyle" ? 1 : 0.75 }}>
            <Link
              href="/lifestyle"
              className="group inline-flex items-center gap-2 bg-white text-blue-600 font-sans font-semibold text-sm px-6 py-3 rounded-full shadow-lg hover:shadow-blue-100 hover:scale-105 transition-all duration-200"
            >
              Enter Lifestyle
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Rising dots on hover */}
        {active === "lifestyle" && [0,1,2,3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80, rotate: 0 }}
            animate={{ opacity: 0.12, y: -30, rotate: 45 }}
            transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity, repeatType: "loop" }}
            className="absolute bg-white rounded-sm"
            style={{ width: `${10+i*4}px`, height: `${10+i*4}px`, left: `${15+i*18}%`, bottom: "25%" }}
          />
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
      >
        <span className="font-mono text-[10px] tracking-widest text-white/50 uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </div>
  );
}
