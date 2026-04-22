'use client'

import { Note } from '@/types'
import { useSortable } from '@dnd-kit/sortable'

interface NoteCardProps {
  note: Note
}

export default function NoteCard({ note }: NoteCardProps) {
  const {
    attributes, // accessibility attributes (role, aria-*) that dnd-kit needs to make this work for keyboard users and assistive technologies.
    listeners,  // the mouse/pointer events that start the drag (onPointerDown etc.)
    setNodeRef, // tells dnd-kit which DOM element is the draggable card.
    isDragging //  true - while this card is being dragged, we can apply styles to it.
  } = useSortable({
  id: note.id,
});

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="rounded-lg p-3 cursor-grab border border-black/10 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-150"
      style={{ backgroundColor: note.color, opacity: isDragging ? 0.4 : 1 }}
    >
      <h3 className="font-semibold text-xs text-zinc-800 leading-snug mb-1">
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
