import { NextResponse } from 'next/server'
import { mockNotes } from './data'

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
