import { render, screen } from '@testing-library/react'
import NoteCard from '@/components/Board/NoteCard'
import { Note } from '@/types'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { DndContext } from '@dnd-kit/core'

const mockNote: Note = {
  id: '1',
  title: 'Test Note',
  content: 'Test content',
  column: 'todo',
  color: '#fef9c3',
  order: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}

describe('NoteCard', () => {
  it('renders the note title', () => {
    render(
      <DndContext>
        <Provider store={store}>
          <NoteCard note={mockNote} onEditNote={jest.fn()} />
        </Provider>
      </DndContext>
    )
    expect(screen.getByText('Test Note')).toBeInTheDocument()
  })

  it('renders the note content', () => {
    render(
      <DndContext>
        <Provider store={store}>
          <NoteCard note={mockNote} onEditNote={jest.fn()} />
        </Provider>
      </DndContext>
    )
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })
})
