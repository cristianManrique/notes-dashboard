// TODO: Replace this with actual data fetching logic (e.g., from a database or external API)
type MockNote = {
  id: string
  title: string
  content: string
  column: string
  color: string
  order: number
  createdAt: string
  updatedAt: string
}

declare global {
  var __mockNotes: MockNote[] | undefined
}


/**
 * Next.js App Router runs each route segment (route.ts, [id]/route.ts) in its
 * own module context — so a plain `export const array = []` gives each segment
 * a separate copy in memory. Mutations in one file are invisible to the other.
 *
 * Storing the array on `globalThis` solves this: there is only one global object
 * per Node.js process, so both route segments always share the same array.
 *
 * `??=` assigns only once — if the value already exists (e.g. after a hot-reload),
 * it is kept as-is so we don't lose data between saves in dev mode.
 *
 * This is a temporary solution for mock data only.
 * Phase 2 replaces this with Prisma + SQLite.
 */
global.__mockNotes ??= [
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
  {
    id: '2',
    title: 'Second note',
    content: 'Hello again!',
    column: 'todo',
    color: '#dbeafe',
    order: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]

export const mockNotes = global.__mockNotes
