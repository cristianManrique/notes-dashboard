import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { Note, NotesState, Column } from '@/types'

// Async thunks (Week 1 Day 4)
export const fetchNotes = createAsyncThunk('notes/fetchAll', async () => {
  const res = await fetch('/api/notes')
  return (await res.json()) as Note[]
})

export const createNote = createAsyncThunk(
  'notes/create',
  async (note: Omit<Note, 'id' | 'createdAt' | 'updatedAt' | 'order'>) => {
    const res = await fetch('/api/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note),
    })
    return (await res.json()) as Note
  }
)

const initialState: NotesState = {
  notes: [],
  status: 'idle',
  error: null,
}

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    moveNote(state, action: PayloadAction<{ id: string; column: Column }>) {
      const note = state.notes.find((n) => n.id === action.payload.id)
      if (note) note.column = action.payload.column
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.pending, (state) => { state.status = 'loading' })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.notes = action.payload
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Unknown error'
      })
      .addCase(createNote.fulfilled, (state, action) => {
        state.notes.push(action.payload)
      })
  },
})

export const { moveNote } = notesSlice.actions
export default notesSlice.reducer
