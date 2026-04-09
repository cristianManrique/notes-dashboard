import notesReducer, { moveNote } from '@/store/notesSlice'
import { NotesState } from '@/types'

const initialState: NotesState = {
  notes: [
    {
      id: '1',
      title: 'Test',
      content: 'Content',
      column: 'todo',
      color: '#fff',
      order: 0,
      createdAt: '',
      updatedAt: '',
    },
  ],
  status: 'idle',
  error: null,
}

describe('notesSlice', () => {
  it('should move a note to another column', () => {
    const state = notesReducer(initialState, moveNote({ id: '1', column: 'done' }))
    expect(state.notes[0].column).toBe('done')
  })
})
