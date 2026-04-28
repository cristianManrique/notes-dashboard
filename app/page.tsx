'use client'

import { useState, useCallback } from 'react'
import NoteBoard from '@/components/Board/NoteBoard'
import NoteFormDrawer from '@/components/Forms/NoteFormDrawer'
import Header from '@/components/UI/Header'
import { Note } from '@/types'

export default function DashboardPage() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [editingNote, setEditingNote] = useState<Note | null>(null)
  const onEditNote = useCallback((note: Note) => {
    setEditingNote(note)
    setDrawerOpen(true)
  }, [])

  const onCloseDrawer = useCallback(() => {
    setDrawerOpen(false)
    setEditingNote(null)
  }, [])

  return (
    <div className="flex flex-col h-screen bg-zinc-100 dark:bg-zinc-950 overflow-hidden">
      <Header onAddNote={() => setDrawerOpen(true)} />
      <NoteBoard
        onEditNote={onEditNote}
       />
      <NoteFormDrawer
        open={drawerOpen}
         note={editingNote}
        onClose={onCloseDrawer}
      />
    </div>
  )
}
