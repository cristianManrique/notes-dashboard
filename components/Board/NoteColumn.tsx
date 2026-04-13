'use client'

import { Note, Column } from '@/types'
import NoteCard from './NoteCard'

const COLUMN_ACCENT: Record<Column, string> = {
  todo: 'bg-zinc-500',
  inprogress: 'bg-blue-500',
  done: 'bg-emerald-500',
}

interface NoteColumnProps {
  column: Column
  label: string
  notes: Note[]
  loading?: boolean
}

export default function NoteColumn({ column, label, notes, loading }: NoteColumnProps) {
  return (
    <div className="flex flex-col flex-1 min-w-0 bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
      {/* Column header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${COLUMN_ACCENT[column]}`} />
          <span className="text-xs font-semibold text-zinc-300 uppercase tracking-widest">
            {label}
          </span>
        </div>
        <span className="text-xs font-medium text-zinc-500 bg-zinc-800 rounded-full px-2 py-0.5 min-w-[20px] text-center">
          {notes.length}
        </span>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-2 p-3 overflow-y-auto flex-1">
        {loading && notes.length === 0 && (
          <div className="flex flex-col gap-2">
            {[1, 2].map((i) => (
              <div key={i} className="h-16 rounded-lg bg-zinc-800 animate-pulse" />
            ))}
          </div>
        )}

        {!loading && notes.length === 0 && (
          <div className="flex flex-col items-center justify-center flex-1 py-12 gap-2">
            <div className="w-8 h-8 rounded-full border-2 border-dashed border-zinc-700" />
            <p className="text-xs text-zinc-600">No notes</p>
          </div>
        )}

        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  )
}
