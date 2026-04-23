'use client'

import { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import {
   DndContext, DragOverlay, PointerSensor,
    useSensor, useSensors, closestCorners,
    type DragStartEvent, type DragEndEvent
} from '@dnd-kit/core'
import {
  fetchNotes, moveNote, reorderNotes
} from '@/store/notesSlice'
import NoteColumn from './NoteColumn'
import { Column, Note } from '@/types'

const COLUMNS: { id: Column; label: string }[] = [
  { id: 'todo', label: 'To Do' },
  { id: 'inprogress', label: 'In Progress' },
  { id: 'done', label: 'Done' },
]

export default function NoteBoard() {
  const dispatch = useAppDispatch()

   useEffect(() => {
    dispatch(fetchNotes())
  }, [dispatch])

  const [activeNote, setActiveNote] = useState<Note | null>(null)
  const { notes, status } = useAppSelector((state) => state.notes)

    const sensors = useSensors(
     useSensor(PointerSensor, {
       activationConstraint: {
         distance: 8,
       },
     })
   );

   const onDragStart = (event: DragStartEvent) => {
     const { active } = event
     const note = notes.find((n) => n.id === active.id)
     if (note) setActiveNote(note)
   }

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    // Clear the active note state to hide the DragOverlay
    setActiveNote(null)

    // If there's no drop target (dropped outside any droppable area), do nothing
    if (!over) return

    const activeId = active.id as string
    const overId = over.id as string

    // CASE 1 — dropped on a column id → cross-column move
    const isColumn = COLUMNS.some((col) => col.id === overId)
    if (isColumn) {
      const note = notes.find((n) => n.id === activeId)
      // If note not found or dropped in the same column, do nothing
      if (!note || note.column === overId) return
      dispatch(moveNote({ id: activeId, column: overId as Column }))
      return
    }

    // CASE 2 — dropped on a note id → reorder or cross-column via card
    const activeNote = notes.find((n) => n.id === activeId)
    const overNote = notes.find((n) => n.id === overId)

    // If either note is not found, do nothing
    if (!activeNote || !overNote) return

    // Dropped on a card in a different column → move to that column
    if (activeNote.column !== overNote.column) {
      dispatch(moveNote({ id: activeId, column: overNote.column }))
      return
    }

    // Dropped on a card in the same column → reorder
    const columnNotes = notes.filter((n) => n.column === activeNote.column)
    const oldIndex = columnNotes.findIndex((n) => n.id === activeId)
    const newIndex = columnNotes.findIndex((n) => n.id === overId)
    dispatch(reorderNotes({ column: activeNote.column, oldIndex, newIndex }))
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      >
        {/* The Ghost Card that follows the cursor during dragging */}
      <DragOverlay>
      {activeNote && (
        <div
          className="rounded-lg p-3 shadow-xl ring-1 ring-zinc-200 dark:ring-zinc-700 rotate-2 cursor-grabbing border border-black/10"
          style={{ backgroundColor: activeNote.color }}
        >
          <h3 className="font-semibold text-xs text-zinc-800 leading-snug mb-1">
            {activeNote.title}
          </h3>
          {activeNote.content && (
            <p className="text-xs text-zinc-600 line-clamp-3">
              {activeNote.content}
            </p>
          )}
        </div>
      )}
    </DragOverlay>

      {/* DndContext provides drag-and-drop capabilities to all child components */}
      <div className="flex flex-1 gap-3 p-4 overflow-hidden bg-zinc-100 dark:bg-zinc-950">
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
    </DndContext>
  )
}
