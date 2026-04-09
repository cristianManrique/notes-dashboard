'use client'

import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900">
      <h1 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
        Notes Dashboard
      </h1>
      <ThemeToggle />
    </header>
  )
}
