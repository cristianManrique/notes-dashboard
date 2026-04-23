'use client'

import { Note, Column } from '@/types'
import NoteCard from './NoteCard'
import { useDroppable, useDndContext } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

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
  // useDndContext gives us access to the current drag state,
  // including which element is being dragged and which droppable
  // area it's currently over (if any).
  const { over } = useDndContext()

  // marks which element is the drop zone (the cards area, not the whole column)
  const { setNodeRef } = useDroppable({ id: column })

  // true if hovering over the column itself OR any card inside it
  const isActive = over?.id === column || notes.some((n) => n.id === over?.id)

  return (
    <div
    className={`
      flex flex-col flex-1 min-w-0 bg-white dark:bg-zinc-900
      rounded-xl border
       ${isActive ? 'border-blue-500' : 'border-zinc-800'}
       overflow-hidden
      `}
    >

      {/* Column header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${COLUMN_ACCENT[column]}`} />
          <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase tracking-widest">
            {label}
          </span>
        </div>
        <span className="text-xs font-medium text-zinc-500 bg-zinc-200 dark:bg-zinc-800 rounded-full px-2 py-0.5 min-w-[20px] text-center">
          {notes.length}
        </span>
      </div>

      {/* Cards */}
      <div ref={setNodeRef} className="flex flex-col gap-2 p-3 overflow-y-auto flex-1">
        {loading && notes.length === 0 && (
          <div className="flex flex-col gap-2">
            {[1, 2].map((i) => (
              <div key={i} className="h-16 rounded-lg bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
            ))}
          </div>
        )}

        {!loading && notes.length === 0 && (
          <div className="flex flex-col items-center justify-center flex-1 py-12 gap-2">
            <div className="w-8 h-8 rounded-full border-2 border-dashed border-zinc-300 dark:border-zinc-700" />
            <p className="text-xs text-zinc-600 dark:text-zinc-400">No notes</p>
          </div>
        )}
        {/**
         * The SortableContext is what allows the cards to be reordered within the column.
         * It needs to know the order of items (by id) and the sorting strategy (vertical list in this case)
         */}
        <SortableContext
          items={notes.map((n) => n.id)}
          strategy={verticalListSortingStrategy}
        >
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </SortableContext>
      </div>
    </div>
  )
}
