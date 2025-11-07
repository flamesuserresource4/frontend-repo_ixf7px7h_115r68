import React from 'react';
import HeroCover from './components/HeroCover';
import FeatureGrid from './components/FeatureGrid';
import LiveArbDashboard from './components/LiveArbDashboard';
import ProfitPools from './components/ProfitPools';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gray-900" />
            <span className="text-lg font-semibold tracking-tight text-gray-900">OptiSwap</span>
          </div>
          <nav className="hidden gap-6 text-sm text-gray-700 md:flex">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#live" className="hover:text-gray-900">Live</a>
            <a href="#pools" className="hover:text-gray-900">Pools</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 hover:bg-gray-50">Docs</button>
            <button className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">Join Beta</button>
          </div>
        </div>
      </header>

      <main className="space-y-10">
        <div className="px-6">
          <HeroCover />
        </div>
        <FeatureGrid />
        <LiveArbDashboard />
        <div id="pools" className="px-6">
          <ProfitPools />
        </div>
      </main>

      <footer className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-500">
        <div className="flex items-center justify-between">
          <p>© {new Date().getFullYear()} OptiSwap Labs. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-700">Terms</a>
            <a href="#" className="hover:text-gray-700">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
