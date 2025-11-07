import React from 'react';
import HeroCover from './components/HeroCover';
import FeatureGrid from './components/FeatureGrid';
import LiveArbDashboard from './components/LiveArbDashboard';
import ProfitPools from './components/ProfitPools';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      {/* Navbar */}
      <header className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-600 via-blue-600 to-orange-500" />
            <span className="text-lg font-semibold tracking-tight">OptiSwap</span>
          </div>
          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#live" className="transition hover:text-white">Live</a>
            <a href="#pools" className="transition hover:text-white">Pools</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20">Docs</button>
            <button className="rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-orange-500 px-4 py-2 text-sm font-medium text-white shadow-lg transition hover:brightness-110">Join Beta</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="px-6">
        <HeroCover />
      </div>

      {/* Feature grid */}
      <FeatureGrid />

      {/* Live dashboard */}
      <LiveArbDashboard />

      {/* Pools */}
      <div id="pools" className="px-6">
        <ProfitPools />
      </div>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-6 py-10 text-sm text-white/60">
        <div className="flex items-center justify-between">
          <p>© {new Date().getFullYear()} OptiSwap Labs. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/80">Terms</a>
            <a href="#" className="hover:text-white/80">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
