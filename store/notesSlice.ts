import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Note, NotesState, Column } from '@/types';
import { apiGet, apiPost, apiPut, apiDelete } from '@/lib/Api';
import { arrayMove } from '@dnd-kit/sortable'

// ─── Async Thunks ─────────────────────────────────────────────────────────

export const fetchNotes = createAsyncThunk('notes/fetchAll', async () =>
  apiGet<Note[]>('/notes')
);

export const createNote = createAsyncThunk(
  'notes/create',
  async (note: Omit<Note, 'id' | 'createdAt' | 'updatedAt' | 'order'>) =>
    apiPost<Note>('/notes', note)
);

export const updateNote = createAsyncThunk(
  'notes/update',
  async ({ id, ...changes }: Partial<Note> & { id: string }) =>
    apiPut<Note>(`/notes/${id}`, changes)
);

export const deleteNote = createAsyncThunk(
  'notes/delete',
  async (id: string) => {
    await apiDelete(`/notes/${id}`)
    return id
  }
);

// ─── Slice ────────────────────────────────────────────────────────────────

const initialState: NotesState = {
  notes: [],
  status: 'idle',
  error: null,
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    moveNote(state, action: PayloadAction<{ id: string; column: Column }>) {
      const note = state.notes.find((n) => n.id === action.payload.id)
      if (note) note.column = action.payload.column
    },
    reorderNotes(state, action: PayloadAction<{ column: Column; oldIndex: number; newIndex: number }>) {
      const { column, oldIndex, newIndex } = action.payload
      const columnNotes = state.notes.filter((n) => n.column === column)
      const otherNotes = state.notes.filter((n) => n.column !== column)
      const reordered = arrayMove(columnNotes, oldIndex, newIndex)
      state.notes = [...otherNotes, ...reordered]
    },
  },
  extraReducers: (builder) => {
    builder
      // fetchNotes
      .addCase(fetchNotes.pending, (state) => { state.status = 'loading' })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.notes = action.payload
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Unknown error'
      })
      // createNote
      .addCase(createNote.fulfilled, (state, action) => {
        state.notes.push(action.payload)
      })
      // updateNote
      .addCase(updateNote.fulfilled, (state, action) => {
        const idx = state.notes.findIndex((n) => n.id === action.payload.id)
        if (idx !== -1) state.notes[idx] = action.payload
      })
      // deleteNote
      .addCase(deleteNote.fulfilled, (state, action) => {
        state.notes = state.notes.filter((n) => n.id !== action.payload)
      })
  },
});

export const { moveNote, reorderNotes } = notesSlice.actions;
export default notesSlice.reducer;
