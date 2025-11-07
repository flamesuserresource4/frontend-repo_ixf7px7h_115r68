import React from 'react';
import { Layers, Shuffle, Lock, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Layers className="h-5 w-5 text-purple-400" />,
    title: 'Parallel Price Discovery',
    desc: 'Query 20+ DEXs simultaneously to uncover edge in milliseconds.'
  },
  {
    icon: <Shuffle className="h-5 w-5 text-blue-400" />,
    title: 'Multi-Hop Arbitrage',
    desc: 'Explore thousands of routes (ETH→USDC→DAI→WBTC→ETH) and pick the top PnL.'
  },
  {
    icon: <Lock className="h-5 w-5 text-orange-400" />,
    title: 'MEV Protection',
    desc: 'Private orderflow, FCFS ordering, and sandwich resistance by design.'
  },
  {
    icon: <LineChart className="h-5 w-5 text-emerald-400" />,
    title: 'Profit Sharing Pools',
    desc: 'Stake stablecoins to earn a proportional share from executed arbs.'
  }
];

export default function FeatureGrid() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="relative rounded-2xl p-[1px]"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/40 via-blue-500/40 to-orange-400/40 opacity-60 blur-xl" />
            <div className="relative rounded-2xl bg-white/10 p-6 backdrop-blur-xl ring-1 ring-white/20">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
                  {f.icon}
                </div>
                <h3 className="bg-gradient-to-r from-purple-300 via-blue-300 to-orange-200 bg-clip-text text-lg font-semibold text-transparent">
                  {f.title}
                </h3>
              </div>
              <p className="mt-3 text-sm text-white/80">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
