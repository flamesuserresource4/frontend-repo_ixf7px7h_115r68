import React from 'react';
import { motion } from 'framer-motion';
import { Shuffle } from 'lucide-react';

const hops = [
  { name: 'ETH', color: 'from-purple-400 to-purple-600' },
  { name: 'USDC', color: 'from-blue-400 to-blue-600' },
  { name: 'DAI', color: 'from-amber-300 to-amber-500' },
  { name: 'WBTC', color: 'from-orange-400 to-orange-600' },
  { name: 'ETH', color: 'from-purple-400 to-purple-600' },
];

export default function RouteVisualizer() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="relative rounded-2xl p-[1px]">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/50 via-blue-500/50 to-orange-400/50 opacity-60 blur-xl" />
        <div className="relative rounded-2xl bg-white/10 p-6 backdrop-blur-xl ring-1 ring-white/20">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="bg-gradient-to-r from-purple-300 via-blue-300 to-orange-200 bg-clip-text text-lg font-semibold text-transparent">Route Visualizer</h3>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white ring-1 ring-white/20"><Shuffle className="h-3.5 w-3.5"/> Multi-hop</div>
          </div>

          <div className="relative grid grid-cols-5 items-center gap-4">
            {hops.map((h, i) => (
              <div key={i} className="relative">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className={`rounded-xl bg-gradient-to-br ${h.color} p-[1px]`}
                >
                  <div className="rounded-xl bg-[#0b0b0c] px-6 py-4 text-center text-white ring-1 ring-white/10">
                    <div className="text-sm font-semibold">{h.name}</div>
                    <div className="mt-1 text-xs text-white/70">Hop {i + 1}</div>
                  </div>
                </motion.div>
                {i < hops.length - 1 && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: '100%', opacity: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.5, delay: i * 0.06 + 0.1 }}
                    className="absolute left-[calc(100%+0.25rem)] top-1/2 hidden h-0.5 w-[calc(100%+0.5rem)] -translate-y-1/2 bg-gradient-to-r from-purple-500/60 via-blue-500/60 to-orange-400/60 lg:block"
                  />
                )}
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-white/5 p-4 text-sm text-white/80 ring-1 ring-white/10"
          >
            <span>Projected slippage-adjusted PnL</span>
            <span className="font-semibold text-emerald-300">+$37.42</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
