'use client'

import { Note } from '@/types'

interface NoteCardProps {
  note: Note
}

export default function NoteCard({ note }: NoteCardProps) {
  return (
    <div
      className="group relative rounded-lg p-3 cursor-grab active:cursor-grabbing border border-black/10 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-150"
      style={{ backgroundColor: note.color }}
    >
      <h3 className="font-semibold text-xs text-zinc-800 leading-snug mb-1 pr-4">
        {note.title}
      </h3>
      {note.content && (
        <p className="text-xs text-zinc-600 line-clamp-3 leading-relaxed">
          {note.content}
        </p>
      )}
    </div>
  )
}
