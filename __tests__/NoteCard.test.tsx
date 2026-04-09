import { render, screen } from '@testing-library/react'
import NoteCard from '@/components/Board/NoteCard'
import { Note } from '@/types'

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
    render(<NoteCard note={mockNote} />)
    expect(screen.getByText('Test Note')).toBeInTheDocument()
  })

  it('renders the note content', () => {
    render(<NoteCard note={mockNote} />)
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })
})
