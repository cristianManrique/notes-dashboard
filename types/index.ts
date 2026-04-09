export type Column = 'todo' | 'inprogress' | 'done'

export interface Note {
  id: string
  title: string
  content: string
  column: Column
  color: string
  order: number
  createdAt: string
  updatedAt: string
}

export interface NotesState {
  notes: Note[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}
