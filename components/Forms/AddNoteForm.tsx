'use client'

import { useState } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { createNote } from '@/store/notesSlice';

const COLORS = ['#fef9c3', '#dcfce7', '#dbeafe', '#fce7f3', '#f3e8ff'];

export default function AddNoteForm() {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [color, setColor] = useState(COLORS[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return
    dispatch(createNote({ title, content, column: 'todo', color }))
    setTitle('')
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-4 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 max-w-sm">
      <h2 className="font-bold text-zinc-800 dark:text-zinc-100">Add a note</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="rounded-md border border-zinc-300 dark:border-zinc-600 px-3 py-2 text-sm bg-transparent text-zinc-800 dark:text-zinc-100 outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={3}
        className="rounded-md border border-zinc-300 dark:border-zinc-600 px-3 py-2 text-sm bg-transparent text-zinc-800 dark:text-zinc-100 outline-none focus:ring-2 focus:ring-blue-400 resize-none"
      />

      <div className="flex gap-2">
        {COLORS.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setColor(c)}
            className="w-6 h-6 rounded-full border-2 transition-transform hover:scale-110"
            style={{
              backgroundColor: c,
              borderColor: color === c ? '#3b82f6' : 'transparent',
            }}
          />
        ))}
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-md px-4 py-2 transition-colors"
      >
        Add Note
      </button>
    </form>
  )
}
