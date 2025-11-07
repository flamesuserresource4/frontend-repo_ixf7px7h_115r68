import React from 'react';
import { Wallet, Coins, Percent } from 'lucide-react';

export default function ProfitPools() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200">
              <Percent className="h-3.5 w-3.5" /> Profit Sharing Pools
            </div>
            <h3 className="mt-3 text-2xl font-semibold text-gray-900">Stake stablecoins. Earn from arbitrage.</h3>
            <p className="mt-2 max-w-2xl text-sm text-gray-600">Deposit USDC to back the engine. Profits from executed arbs are shared to stakers proportionally. Withdraw anytime.</p>
          </div>
          <div className="flex w-full max-w-md flex-col gap-3 rounded-xl bg-gray-50 p-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">TVL</span>
              <span className="font-medium text-gray-900">$3,452,120</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">30d Performance</span>
              <span className="font-medium text-emerald-600">+18.2%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Last 24h Trades</span>
              <span className="font-medium text-gray-900">2,431</span>
            </div>
            <div className="mt-2 flex gap-3">
              <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-gray-800">
                <Wallet className="h-4 w-4" /> Stake USDC
              </button>
              <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 text-gray-900 ring-1 ring-inset ring-gray-200 hover:bg-gray-50">
                <Coins className="h-4 w-4 text-amber-600" /> Claim Rewards
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
