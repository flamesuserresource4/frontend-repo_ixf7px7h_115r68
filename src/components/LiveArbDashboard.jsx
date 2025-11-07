import React from 'react';
import { PlayCircle, Activity, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLiveData } from './LiveDataProvider';

export default function LiveArbDashboard() {
  const { prices, executions } = useLiveData();

  const samplePrices = [
    { pair: 'ETH/USDC', uni: 100.5, sushi: 100.3, curve: 100.7 },
    { pair: 'WBTC/ETH', uni: 14.12, sushi: 14.09, curve: 14.16 },
    { pair: 'DAI/USDC', uni: 1.0002, sushi: 1.0001, curve: 1.0004 },
  ];

  const sampleExecs = [
    { id: 'ARB-10231', route: 'Buy on Sushi → Sell on Curve', pair: 'ETH/USDC', size: '10 ETH', profit: 20.0 },
    { id: 'ARB-10232', route: 'ETH→USDC→DAI→WBTC→ETH', pair: 'Multi-hop', size: '2 ETH', profit: 45.5 },
    { id: 'ARB-10233', route: 'Buy on Uni → Sell on Curve', pair: 'WBTC/ETH', size: '0.5 WBTC', profit: 32.1 },
  ];

  const rows = prices.length ? prices : samplePrices;
  const execs = executions.length ? executions : sampleExecs;

  return (
    <section id="live" className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4 }}
          className="relative rounded-2xl p-[1px]"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/50 via-blue-500/50 to-orange-400/50 opacity-60 blur-xl" />
          <div className="relative rounded-2xl bg-white/10 p-6 backdrop-blur-xl ring-1 ring-white/20">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="bg-gradient-to-r from-purple-300 via-blue-300 to-orange-200 bg-clip-text text-lg font-semibold text-transparent">Real-time Prices</h3>
              <div className="flex items-center gap-2 text-xs text-white/80">
                <span className="relative inline-flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                </span>
                Live
              </div>
            </div>
            <div className="space-y-3">
              {rows.map((p, i) => (
                <div key={i} className="grid grid-cols-4 items-center gap-3 rounded-xl bg-white/5 px-4 py-3 text-sm ring-1 ring-white/10">
                  <div className="font-medium text-white">{p.pair}</div>
                  <div className="text-white/80">Uniswap: {p.uni}</div>
                  <div className="text-white/80">Sushi: {p.sushi}</div>
                  <div className="text-white/80">Curve: {p.curve}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="relative rounded-2xl p-[1px]"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/50 via-blue-500/50 to-orange-400/50 opacity-60 blur-xl" />
          <div className="relative rounded-2xl bg-white/10 p-6 backdrop-blur-xl ring-1 ring-white/20">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="bg-gradient-to-r from-purple-300 via-blue-300 to-orange-200 bg-clip-text text-lg font-semibold text-transparent">Detections & Executions</h3>
              <PlayCircle className="h-5 w-5 text-white" />
            </div>
            <div className="space-y-3">
              {execs.map((e) => (
                <div key={e.id} className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-sm ring-1 ring-white/10">
                  <div>
                    <div className="font-medium text-white">{e.id}</div>
                    <div className="text-white/80">{e.route}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white/90">{e.pair} • {e.size}</div>
                    <div className="font-semibold text-emerald-300">+${Number(e.profit).toFixed(2)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mt-6 flex items-center justify-between rounded-2xl bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-orange-500/20 p-[1px]"
      >
        <div className="flex w-full items-center justify-between rounded-2xl bg-white/10 p-6 backdrop-blur-xl ring-1 ring-white/20">
          <div className="flex items-center gap-3">
            <DollarSign className="h-5 w-5 text-amber-300" />
            <p className="text-sm text-white/85">Comparison: 50 arbs/min on Monad vs 3/min on Ethereum. Gas: $0.50 vs $50. Net profit: $200–$500/min.</p>
          </div>
          <button className="rounded-xl bg-white/15 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/30 backdrop-blur transition hover:bg-white/25">Simulate Batch</button>
        </div>
      </motion.div>
    </section>
  );
}
