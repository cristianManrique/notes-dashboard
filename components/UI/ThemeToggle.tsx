'use client'

import { useTheme } from '@/context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-md
      text-xs font-medium border border-zinc-300 dark:border-zinc-700
      text-zinc-600 dark:text-zinc-400
      hover:text-zinc-800 dark:hover:text-zinc-200
      hover:border-zinc-400 dark:hover:border-zinc-600
      transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? '☀ Light' : '🌙 Dark'}
    </button>
  )
}
