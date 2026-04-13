'use client'

import ThemeToggle from './ThemeToggle'

interface HeaderProps {
  onAddNote?: () => void
}

export default function Header({ onAddNote }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-6 py-3 border-b border-zinc-800 bg-zinc-900 shrink-0">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-blue-500" />
        <h1 className="text-sm font-semibold tracking-tight text-zinc-100">
          Notes Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <ThemeToggle />
        {onAddNote && (
          <button
            onClick={onAddNote}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-colors"
          >
            <span className="text-base leading-none">+</span>
            New Note
          </button>
        )}
      </div>
    </header>
  )
}
