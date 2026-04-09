'use client'

import { Note, Column } from '@/types'
import NoteCard from './NoteCard'

const COLUMN_LABELS: Record<Column, string> = {
  todo: 'To Do',
  inprogress: 'In Progress',
  done: 'Done',
}

interface NoteColumnProps {
  column: Column
  notes: Note[]
}

export default function NoteColumn({ column, notes }: NoteColumnProps) {
  return (
    <div className="flex flex-col gap-3 bg-zinc-100 dark:bg-zinc-800 rounded-xl p-4 min-h-[400px] flex-1">
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-bold text-zinc-700 dark:text-zinc-200 uppercase text-xs tracking-widest">
          {COLUMN_LABELS[column]}
        </h2>
        <span className="text-xs bg-zinc-200 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-400 rounded-full px-2 py-0.5">
          {notes.length}
        </span>
      </div>

      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  )
}
