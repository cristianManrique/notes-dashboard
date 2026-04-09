import { NextResponse } from 'next/server'

// TODO Week 2 — replace with Prisma queries
const mockNotes = [
  {
    id: '1',
    title: 'First note',
    content: 'Hello Kanban!',
    column: 'todo',
    color: '#fef9c3',
    order: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]

export async function GET() {
  return NextResponse.json(mockNotes)
}

export async function POST(request: Request) {
  const body = await request.json()
  const newNote = {
    id: crypto.randomUUID(),
    ...body,
    order: mockNotes.length,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  mockNotes.push(newNote)
  return NextResponse.json(newNote, { status: 201 })
}
