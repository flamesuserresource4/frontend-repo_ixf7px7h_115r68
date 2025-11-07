import React from 'react';
import { Wallet, Coins, Percent } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProfitPools() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4 }}
        className="relative rounded-2xl p-[1px]"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/50 via-blue-500/50 to-orange-400/50 opacity-60 blur-xl" />
        <div className="relative rounded-2xl bg-white/10 p-6 backdrop-blur-xl ring-1 ring-white/20 md:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/20">
                <Percent className="h-3.5 w-3.5" /> Profit Sharing Pools
              </div>
              <h3 className="mt-3 bg-gradient-to-r from-purple-300 via-blue-300 to-orange-200 bg-clip-text text-2xl font-semibold text-transparent">Stake stablecoins. Earn from arbitrage.</h3>
              <p className="mt-2 max-w-2xl text-sm text-white/85">Deposit USDC to back the engine. Profits from executed arbs are shared to stakers proportionally. Withdraw anytime.</p>
            </div>
            <div className="flex w-full max-w-md flex-col gap-3 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/70">TVL</span>
                <span className="font-medium text-white">$3,452,120</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/70">30d Performance</span>
                <span className="font-medium text-emerald-300">+18.2%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/70">Last 24h Trades</span>
                <span className="font-medium text-white">2,431</span>
              </div>
              <div className="mt-2 flex gap-3">
                <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-orange-500 px-4 py-2 text-white shadow-lg transition hover:brightness-110">
                  <Wallet className="h-4 w-4" /> Stake USDC
                </button>
                <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20">
                  <Coins className="h-4 w-4 text-amber-300" /> Claim Rewards
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
