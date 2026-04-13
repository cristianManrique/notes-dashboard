'use client'

import { useState } from 'react'
import NoteBoard from '@/components/Board/NoteBoard'
import NoteFormDrawer from '@/components/Forms/NoteFormDrawer'
import Header from '@/components/UI/Header'

export default function DashboardPage() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <div className="flex flex-col h-screen bg-zinc-950 overflow-hidden">
      <Header onAddNote={() => setDrawerOpen(true)} />
      <NoteBoard />
      <NoteFormDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  )
}
