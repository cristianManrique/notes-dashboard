'use client'

import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { fetchNotes } from '@/store/notesSlice'
import NoteColumn from './NoteColumn'
import { Column } from '@/types'

const COLUMNS: { id: Column; label: string }[] = [
  { id: 'todo', label: 'To Do' },
  { id: 'inprogress', label: 'In Progress' },
  { id: 'done', label: 'Done' },
]

export default function NoteBoard() {
  const dispatch = useAppDispatch()
  const { notes, status } = useAppSelector((state) => state.notes)

  useEffect(() => {
    dispatch(fetchNotes())
  }, [dispatch])

  return (
    <div className="flex flex-1 gap-3 p-4 overflow-hidden">
      {COLUMNS.map((col) => (
        <NoteColumn
          key={col.id}
          column={col.id}
          label={col.label}
          notes={notes.filter((n) => n.column === col.id)}
          loading={status === 'loading'}
        />
      ))}
    </div>
  )
}
