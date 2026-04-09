import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'
import Header from '@/components/UI/Header'

const geist = Geist({ variable: '--font-geist', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Notes Dashboard',
  description: 'A drag-and-drop Kanban board built with Next.js 15',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-zinc-50 dark:bg-zinc-900">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
