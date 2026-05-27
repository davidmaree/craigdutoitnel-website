"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ActiveSide = "none" | "slimming" | "lifestyle";

export function SectionSwitcher() {
  const [active, setActive] = useState<ActiveSide>("none");

  const leftWidth =
    active === "slimming" ? "65%" : active === "lifestyle" ? "35%" : "50%";
  const rightWidth =
    active === "lifestyle" ? "65%" : active === "slimming" ? "35%" : "50%";

  return (
    <div
      className="relative flex h-screen min-h-[600px] overflow-hidden"
      onMouseLeave={() => setActive("none")}
    >
      {/* Slimming Side */}
      <motion.div
        animate={{ width: leftWidth }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        className="relative flex flex-col items-center justify-center cursor-pointer overflow-hidden grain-overlay"
        onMouseEnter={() => setActive("slimming")}
        style={{
          background:
            "linear-gradient(135deg, #FFF0F3 0%, #FFB6C1 40%, #FF8FAB 70%, #E85577 100%)",
        }}
      >
        {/* Floating orbs */}
        <motion.div
          animate={{ y: active === "slimming" ? [-20, 0, -20] : 0 }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full opacity-20 blur-2xl"
          style={{ background: "radial-gradient(circle, #C2185B, #FF8FAB)" }}
        />
        <motion.div
          animate={{ y: active === "slimming" ? [0, -30, 0] : 0 }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full opacity-20 blur-2xl"
          style={{ background: "radial-gradient(circle, #FF6B8A, #FFB6C1)" }}
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
              <span className="font-display text-2xl font-bold text-white">
                CS
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-sm">
              Craig Slimming
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-sans text-white/80 text-sm md:text-base mb-2 max-w-xs"
          >
            Medical-grade peptides &amp; formulas
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{
              opacity: active === "slimming" ? 1 : 0,
              y: active === "slimming" ? 0 : 10,
            }}
            transition={{ duration: 0.3 }}
            className="font-display italic text-white/70 text-lg mb-8"
          >
            Science. Precision. Transformation.
          </motion.p>

          <motion.div
            animate={{
              scale: active === "slimming" ? 1 : 0.95,
              opacity: active === "slimming" ? 1 : 0.7,
            }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/slimming"
              className="group inline-flex items-center gap-2 bg-white text-pink-500 font-sans font-semibold text-sm px-6 py-3 rounded-full shadow-lg hover:shadow-pink-200 hover:scale-105 transition-all duration-200"
            >
              Enter Slimming
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>

        {/* Silhouette pills floating up on hover */}
        {active === "slimming" && (
          <>
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 0.15, y: -20 }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="absolute rounded-full bg-white"
                style={{
                  width: `${8 + i * 4}px`,
                  height: `${20 + i * 8}px`,
                  left: `${20 + i * 20}%`,
                  bottom: "20%",
                }}
              />
            ))}
          </>
        )}
      </motion.div>

      {/* Glowing centre divider */}
      <motion.div
        animate={{
          opacity: [0.4, 1, 0.4],
          boxShadow: [
            "0 0 8px rgba(232, 85, 119, 0.4)",
            "0 0 20px rgba(232, 85, 119, 0.8)",
            "0 0 8px rgba(232, 85, 119, 0.4)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-pink-300 to-transparent z-10"
        style={{ transform: "translateX(-50%)" }}
      />

      {/* Lifestyle Side */}
      <motion.div
        animate={{ width: rightWidth }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        className="relative flex flex-col items-center justify-center cursor-pointer overflow-hidden grain-overlay"
        onMouseEnter={() => setActive("lifestyle")}
        style={{
          background:
            "linear-gradient(225deg, #F0FAFB 0%, #B2EBF2 40%, #80DEEA 70%, #00838F 100%)",
        }}
      >
        {/* Geometric line patterns */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#00838F"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Floating teal orbs */}
        <motion.div
          animate={{ y: active === "lifestyle" ? [-15, 10, -15] : 0 }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-28 h-28 rounded-full opacity-20 blur-2xl"
          style={{ background: "radial-gradient(circle, #00838F, #B2EBF2)" }}
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
              <span className="font-display text-2xl font-bold text-teal-700">
                CL
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-teal-900 drop-shadow-sm">
              Craig Lifestyle
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-sans text-teal-800/70 text-sm md:text-base mb-2 max-w-xs"
          >
            Skincare, beauty &amp; wellness essentials
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{
              opacity: active === "lifestyle" ? 1 : 0,
              y: active === "lifestyle" ? 0 : 10,
            }}
            transition={{ duration: 0.3 }}
            className="font-display italic text-teal-700/70 text-lg mb-8"
          >
            Glow. Own. You.
          </motion.p>

          <motion.div
            animate={{
              scale: active === "lifestyle" ? 1 : 0.95,
              opacity: active === "lifestyle" ? 1 : 0.7,
            }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/lifestyle"
              className="group inline-flex items-center gap-2 bg-teal-700 text-white font-sans font-semibold text-sm px-6 py-3 rounded-full shadow-lg hover:shadow-teal-200 hover:scale-105 transition-all duration-200"
            >
              Enter Lifestyle
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>

        {/* Leaf silhouettes floating up on hover */}
        {active === "lifestyle" && (
          <>
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80, rotate: 0 }}
                animate={{ opacity: 0.12, y: -30, rotate: 45 }}
                transition={{
                  duration: 2.5,
                  delay: i * 0.4,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="absolute bg-teal-600 rounded-full"
                style={{
                  width: `${12 + i * 4}px`,
                  height: `${12 + i * 4}px`,
                  left: `${15 + i * 18}%`,
                  bottom: "25%",
                }}
              />
            ))}
          </>
        )}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
      >
        <span className="font-mono text-[10px] tracking-widest text-charcoal/40 uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-charcoal/30 to-transparent" />
      </motion.div>
    </div>
  );
}
