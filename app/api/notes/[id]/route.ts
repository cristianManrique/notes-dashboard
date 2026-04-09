import { NextResponse } from 'next/server'

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
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  // placeholder
  return NextResponse.json({ deleted: id })
}
