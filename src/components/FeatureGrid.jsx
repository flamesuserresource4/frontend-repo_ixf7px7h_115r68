import React from 'react';
import { Layers, Shuffle, Lock, LineChart } from 'lucide-react';

const features = [
  {
    icon: <Layers className="h-5 w-5 text-blue-600" />,
    title: 'Parallel Price Discovery',
    desc: 'Query 20+ DEXs simultaneously to uncover edge in milliseconds.'
  },
  {
    icon: <Shuffle className="h-5 w-5 text-purple-600" />,
    title: 'Multi-Hop Arbitrage',
    desc: 'Explore thousands of routes (ETH→USDC→DAI→WBTC→ETH) and pick the top PnL.'
  },
  {
    icon: <Lock className="h-5 w-5 text-emerald-600" />,
    title: 'MEV Protection',
    desc: 'Private orderflow, FCFS ordering, and sandwich resistance by design.'
  },
  {
    icon: <LineChart className="h-5 w-5 text-amber-600" />,
    title: 'Profit Sharing Pools',
    desc: 'Stake stablecoins to earn a proportional share from executed arbs.'
  }
];

export default function FeatureGrid() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <div key={i} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              {f.icon}
              <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
            </div>
            <p className="mt-3 text-sm text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
