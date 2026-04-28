import { NextResponse } from 'next/server'
import { mockNotes } from '../data'

// TODO Week 2 — implement with Prisma

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const body = await request.json()
  // placeholder
  return NextResponse.json({ id, ...body })
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const index = mockNotes.findIndex((note) => note.id === id)
  if (index === -1) {
    // If the note is not found, return a 404 Not Found response.
    return NextResponse.json({ error: 'Note not found' }, { status: 404 })
  }
  mockNotes.splice(index, 1)
  // 204 No Content is a common response for successful deletions where no content is returned.
  return NextResponse.json({ message: 'Note deleted' }, { status: 204  })
}
