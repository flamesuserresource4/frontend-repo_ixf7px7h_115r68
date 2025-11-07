import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Zap } from 'lucide-react';

export default function HeroCover() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden rounded-2xl bg-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient and content overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-1 text-sm font-medium backdrop-blur">
          <Zap className="h-4 w-4 text-blue-600" />
          Built for parallel execution on Monad
        </div>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
          OptiSwap
        </h1>
        <p className="mt-4 max-w-2xl text-base text-gray-700 sm:text-lg">
          A cross-DEX arbitrage engine that discovers, routes, and executes multi-hop opportunities across 20+ DEXs — atomically and MEV-resilient — with profit sharing built-in.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#live"
            className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-3 text-white shadow-lg transition hover:bg-gray-800"
          >
            <Rocket className="h-5 w-5" />
            Launch Live Demo
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-gray-900 ring-1 ring-inset ring-gray-200 transition hover:bg-gray-50"
          >
            <Shield className="h-5 w-5 text-blue-600" />
            MEV-Safe Architecture
          </a>
        </div>
      </div>
    </section>
  );
}
