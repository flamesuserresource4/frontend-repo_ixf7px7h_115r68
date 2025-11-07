import React, { useMemo, useState } from 'react';
import HeroCover from './components/HeroCover';
import FeatureGrid from './components/FeatureGrid';
import LiveArbDashboard from './components/LiveArbDashboard';
import ProfitPools from './components/ProfitPools';
import RouteVisualizer from './components/RouteVisualizer';
import ThemeToggle from './components/ThemeToggle';
import { LiveDataProvider } from './components/LiveDataProvider';

export default function App() {
  const [theme, setTheme] = useState('Monad');
  const backendBase = import.meta.env.VITE_BACKEND_URL || 'https://ta-01k9e7rew03sqhtwwk6aq0zg39-8000.wo-mgyui4sxw7woi142u5hd2kldn.w.modal.host';
  const aura = theme === 'Monad' ? 'from-purple-600 via-blue-600 to-orange-500' : 'from-emerald-500 via-blue-500 to-purple-500';

  return (
    <LiveDataProvider backendUrl={backendBase}>
      <div className="min-h-screen bg-[#0a0a0b] text-white">
        {/* Navbar */}
        <header className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${aura}`} />
              <span className="text-lg font-semibold tracking-tight">OptiSwap</span>
            </div>
            <nav className="hidden gap-6 text-sm text-white/80 md:flex">
              <a href="#features" className="transition hover:text-white">Features</a>
              <a href="#live" className="transition hover:text-white">Live</a>
              <a href="#routes" className="transition hover:text-white">Routes</a>
              <a href="#pools" className="transition hover:text-white">Pools</a>
            </nav>
            <div className="flex items-center gap-3">
              <ThemeToggle theme={theme} onToggle={() => setTheme(t => t === 'Monad' ? 'Ethereum' : 'Monad')} />
              <button className="rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20">Docs</button>
              <a href="#live" className={`rounded-xl bg-gradient-to-r ${aura} px-4 py-2 text-sm font-medium text-white shadow-lg transition hover:brightness-110`}>Join Beta</a>
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

        {/* Route Visualizer */}
        <div id="routes">
          <RouteVisualizer />
        </div>

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
    </LiveDataProvider>
  );
}
