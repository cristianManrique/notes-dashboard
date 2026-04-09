'use client'

import { useAppSelector } from '@/store/hooks'
import NoteColumn from './NoteColumn'
import { Column } from '@/types'

const COLUMNS: Column[] = ['todo', 'inprogress', 'done']

export default function NoteBoard() {
  const notes = useAppSelector((state) => state.notes.notes)

  return (
    <div className="flex gap-4 p-6 overflow-x-auto">
      {COLUMNS.map((col) => (
        <NoteColumn
          key={col}
          column={col}
          notes={notes.filter((n) => n.column === col)}
        />
      ))}
    </div>
  )
}
