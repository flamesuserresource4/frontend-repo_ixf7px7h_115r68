import React from 'react';

export default function ThemeToggle({ theme = 'Monad', onToggle }) {
  const isMonad = theme === 'Monad';
  return (
    <button
      onClick={onToggle}
      className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-xs font-medium text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20"
      aria-label="Toggle theme"
    >
      <span className={`inline-flex h-2.5 w-2.5 rounded-full ${isMonad ? 'bg-blue-400' : 'bg-emerald-400'}`} />
      {isMonad ? 'Monad Mode' : 'Ethereum Mode'}
    </button>
  );
}
