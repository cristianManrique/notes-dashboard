import { configureStore } from '@reduxjs/toolkit'
import notesReducer from './notesSlice'

export const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
})

// RootState = the shape of the whole store: { notes: NotesState }
// AppDispatch = the type of dispatch — accepts both plain actions and thunks
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
