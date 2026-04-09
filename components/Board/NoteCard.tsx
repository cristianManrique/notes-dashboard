'use client'

import { Note } from '@/types'

interface NoteCardProps {
  note: Note
}

export default function NoteCard({ note }: NoteCardProps) {
  return (
    <div
      className="rounded-lg p-3 shadow-sm cursor-grab border border-zinc-200 dark:border-zinc-700"
      style={{ backgroundColor: note.color }}
    >
      <h3 className="font-semibold text-sm text-zinc-800 mb-1">{note.title}</h3>
      <p className="text-xs text-zinc-600 line-clamp-3">{note.content}</p>
    </div>
  )
}
