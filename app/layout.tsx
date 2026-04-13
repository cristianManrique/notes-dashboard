import type { Metadata } from 'next'
import { Vend_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'
import StoreProvider from '@/components/StoreProvider'

const vendSans = Vend_Sans({
  variable: '--font-vend-sans',
  subsets: ['latin'],
  weight: 'variable',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Notes Dashboard',
  description: 'A drag-and-drop Kanban board built with Next.js 16',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${vendSans.variable} h-full antialiased`}>
      <body className="h-full overflow-hidden font-sans">
        <StoreProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
