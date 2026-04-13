import { configureStore } from '@reduxjs/toolkit'
import notesReducer from './notesSlice'

export const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
})

/*
these two types are the bridge between your Redux store and TypeScript.
They ensure that useSelector and useDispatch are 100% typed throughout
the app, without duplication.

store
 ├── getState() → retourne { notes: NotesState }
 │    └── ReturnType<> capture ce type → RootState
 │
 └── dispatch() → accepte actions + thunks
      └── typeof capture ce type → AppDispatch
*/
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
