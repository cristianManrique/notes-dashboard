'use client'

import { useTheme } from '@/context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1.5 rounded-md text-sm font-medium border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
    </button>
  )
}
