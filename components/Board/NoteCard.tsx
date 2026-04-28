'use client'

import { Note } from '@/types'
import { useSortable } from '@dnd-kit/sortable'

import { useAppDispatch } from '@/store/hooks'
import { deleteNote } from '@/store/notesSlice'
import { useCallback } from 'react'

interface NoteCardProps {
  note: Note
  onEditNote: (note: Note) => void
}

export default function NoteCard({ note, onEditNote }: NoteCardProps) {
  const dispatch = useAppDispatch();
  const {
    attributes, // accessibility attributes (role, aria-*) that dnd-kit needs to make this work for keyboard users and assistive technologies.
    listeners,  // the mouse/pointer events that start the drag (onPointerDown etc.)
    setNodeRef, // tells dnd-kit which DOM element is the draggable card.
    isDragging //  true - while this card is being dragged, we can apply styles to it.
  } = useSortable({
    id: note.id,
  });

  const onDeleteNote = useCallback((ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.stopPropagation()
    // Fail-save: Ask for confirmation before deleting the note.
    const confirmed = window.confirm('Do you really want to delete this note?')
    if (!confirmed) return
    dispatch(deleteNote(note.id))
  }, [dispatch, note.id])

  const onEditNoteClick = useCallback((ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.stopPropagation()
    onEditNote(note)
  }, [onEditNote, note])


  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="relative group rounded-lg p-3 cursor-grab relative rounded-lg p-3 cursor-grab border border-black/10
      shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-150"
      style={{ backgroundColor: note.color, opacity: isDragging ? 0.4 : 1 }}
    >
      <button
        onClick={onEditNoteClick}
        className="absolute top-2 right-9 opacity-0 group-hover:opacity-100 text-zinc-500 hover:text-blue-500 transition-all text-xs"
      >
        ✏
      </button>
      <button onClick={onDeleteNote}
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-zinc-500 hover:text-red-500 transition-all text-xs">
        X
      </button>
      <h3 className="font-semibold text-xs text-zinc-700 dark:text-zinc-800 leading-snug mb-1">
        {note.title}
      </h3>
      {note.content && (
        <p className="text-xs text-zinc-500 dark:text-zinc-600 line-clamp-3 leading-relaxed">
          {note.content}
        </p>
      )}
    </div>
  )
}
