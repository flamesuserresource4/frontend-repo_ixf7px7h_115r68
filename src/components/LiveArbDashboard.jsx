import React from 'react';
import { PlayCircle, Activity, DollarSign } from 'lucide-react';

const samplePrices = [
  { pair: 'ETH/USDC', uni: 100.5, sushi: 100.3, curve: 100.7 },
  { pair: 'WBTC/ETH', uni: 14.12, sushi: 14.09, curve: 14.16 },
  { pair: 'DAI/USDC', uni: 1.0002, sushi: 1.0001, curve: 1.0004 },
];

const sampleExecs = [
  { id: 'ARB-10231', route: 'Buy on Sushi → Sell on Curve', pair: 'ETH/USDC', size: '10 ETH', profit: 20.00 },
  { id: 'ARB-10232', route: 'ETH→USDC→DAI→WBTC→ETH', pair: 'Multi-hop', size: '2 ETH', profit: 45.50 },
  { id: 'ARB-10233', route: 'Buy on Uni → Sell on Curve', pair: 'WBTC/ETH', size: '0.5 WBTC', profit: 32.10 },
];

export default function LiveArbDashboard() {
  return (
    <section id="live" className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Real-time Prices</h3>
            <Activity className="h-5 w-5 text-blue-600" />
          </div>
          <div className="space-y-3">
            {samplePrices.map((p, i) => (
              <div key={i} className="grid grid-cols-4 items-center gap-3 rounded-lg bg-gray-50 px-4 py-3 text-sm">
                <div className="font-medium text-gray-900">{p.pair}</div>
                <div className="text-gray-700">Uniswap: {p.uni}</div>
                <div className="text-gray-700">Sushi: {p.sushi}</div>
                <div className="text-gray-700">Curve: {p.curve}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Detections & Executions</h3>
            <PlayCircle className="h-5 w-5 text-emerald-600" />
          </div>
          <div className="space-y-3">
            {sampleExecs.map((e) => (
              <div key={e.id} className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3 text-sm">
                <div>
                  <div className="font-medium text-gray-900">{e.id}</div>
                  <div className="text-gray-600">{e.route}</div>
                </div>
                <div className="text-right">
                  <div className="text-gray-800">{e.pair} • {e.size}</div>
                  <div className="font-semibold text-emerald-600">+${e.profit.toFixed(2)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <DollarSign className="h-5 w-5 text-amber-600" />
          <p className="text-sm text-gray-700">Comparison: 50 arbs/min on Monad vs 3/min on Ethereum. Gas: $0.50 vs $50. Net profit: $200–$500/min.</p>
        </div>
        <button className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">Simulate Batch</button>
      </div>
    </section>
  );
}
