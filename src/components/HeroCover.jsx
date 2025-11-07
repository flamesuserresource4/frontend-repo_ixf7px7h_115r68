import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroCover() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden rounded-3xl">
      {/* Spline animation */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Themed gradient glaze */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-purple-500/10 via-blue-500/10 to-orange-400/20" />

      {/* Glow ring accents */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-gradient-to-tr from-purple-500/30 via-blue-500/30 to-orange-400/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-gradient-to-tr from-orange-400/30 via-purple-500/30 to-blue-500/30 blur-3xl" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-1 text-sm font-medium text-white backdrop-blur"
        >
          <Zap className="h-4 w-4" /> Built for parallel execution on Monad
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 bg-gradient-to-r from-purple-500 via-blue-500 to-orange-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl"
        >
          OptiSwap
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-2xl text-base text-white/90 sm:text-lg"
        >
          Cross-DEX arbitrage that discovers, routes, and executes multi-hop opportunities across 20+ DEXs — atomic, MEV-resilient, and profit-sharing by design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#live"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-orange-500 px-5 py-3 text-white shadow-lg transition [box-shadow:0_10px_30px_-10px_rgba(99,102,241,0.7)] hover:brightness-110"
          >
            <Rocket className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            Launch Live Demo
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-xl bg-white/15 px-5 py-3 text-white ring-1 ring-white/30 backdrop-blur transition hover:bg-white/25"
          >
            <Shield className="h-5 w-5 text-white" />
            MEV-Safe Architecture
          </a>
        </motion.div>
      </div>
    </section>
  );
}
