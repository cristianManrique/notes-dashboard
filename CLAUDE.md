@AGENTS.md

# Working Style

This is a learning project. The goal is to understand every line, not just ship features.

## Rules for every session

- **Explain before you code.** Always describe what you are about to do and why before touching any file.
- **One step at a time.** Never implement two concepts in the same move. Finish one, check understanding, then continue.
- **Ask before adding complexity.** If something can be done in a simple way or a complex way, always pick the simple way and ask before going further.
- **No dead code.** Do not add imports, functions, or patterns that are not used yet.
- **No over-engineering.** No `useCallback`, `useMemo`, generic config params, or patterns the project does not need right now.
- **When in doubt, revert.** If a partial change breaks the app, fix the break before doing anything else.

## Current state of the project

The project is a **Kanban board** — 3 columns (To Do / In Progress / Done), note cards with color, a slide-in drawer to add notes.

### What is built and working
- Next.js 16 App Router setup
- Redux Toolkit store with `notesSlice` — 4 async thunks (`fetchNotes`, `createNote`, `updateNote`, `deleteNote`) + 1 sync action (`moveNote`)
- Axios API layer — `apiGet`, `apiPost`, `apiPut`, `apiDelete`
- Mock REST API — `GET /api/notes`, `POST /api/notes`, `PUT /api/notes/:id`, `DELETE /api/notes/:id`
- Full board UI — `NoteBoard`, `NoteColumn`, `NoteCard`
- Slide-in form drawer — `NoteFormDrawer`
- TypeScript types — `Note`, `NotesState`, `Column`

### What comes next (do NOT implement until asked)
1. Drag & Drop between columns — dnd-kit is already installed
2. Prisma + SQLite — replace mock API with real database
3. Edit note in place
4. Delete note button on cards

## File map — one line per file

```
app/layout.tsx             Root layout — StoreProvider wraps everything
app/page.tsx               Only page — owns drawerOpen state
app/api/notes/route.ts     GET all notes + POST new note (mock, in-memory)
app/api/notes/[id]/route.ts  PUT update + DELETE note (placeholder)

components/StoreProvider.tsx   Redux Provider wrapper (must be 'use client')
components/Board/NoteBoard.tsx     Fetches notes on mount, renders 3 columns
components/Board/NoteColumn.tsx    One column — header, cards, skeleton, empty state
components/Board/NoteCard.tsx      One card — colored, hover animation
components/Forms/NoteFormDrawer.tsx  Slide-in right drawer — add note form
components/UI/Header.tsx           Top bar + New Note button

store/store.ts        Redux store + RootState + AppDispatch types
store/notesSlice.ts   All state logic — slice + 4 thunks
store/hooks.ts        Typed useAppDispatch / useAppSelector

lib/Api.ts            Axios instance + apiGet/Post/Put/Delete
lib/prisma.ts         Prisma client singleton (Phase 2 — do not touch yet)

types/index.ts        Note, NotesState, Column

prisma/schema.prisma  Note model (Phase 2 — do not touch yet)
```
