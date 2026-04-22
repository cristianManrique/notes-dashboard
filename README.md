# Notes Dashboard — Kanban Board

> A full-screen drag-and-drop Kanban board built step by step as a learning project.

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5-007ACC?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2-593D88?style=flat&logo=redux)
![Axios](https://img.shields.io/badge/Axios-1-5A29E4?style=flat&logo=axios)

---

## What this project is

A Kanban board with 3 columns — **To Do**, **In Progress**, **Done**.

Each step of the project introduces one new concept. Nothing is added until it is understood.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| State | Redux Toolkit |
| HTTP | Axios |
| Drag & Drop | dnd-kit *(next step)* |
| Database | Prisma + SQLite *(later)* |

---

## Project Structure

```
app/
  layout.tsx                 Root layout — StoreProvider wraps everything
  page.tsx                   Only page — owns drawerOpen state
  api/notes/
    route.ts                 GET all notes + POST new note (mock)
    [id]/route.ts            PUT update + DELETE note (placeholder)

components/
  StoreProvider.tsx          Redux Provider wrapper
  Board/
    NoteBoard.tsx            Fetches notes, renders 3 columns
    NoteColumn.tsx           One column — header, cards, skeleton, empty state
    NoteCard.tsx             One card — colored, hover animation
  Forms/
    NoteFormDrawer.tsx       Slide-in right drawer — add note form
  UI/
    Header.tsx               Top bar + New Note button

store/
  store.ts                   Redux store + RootState + AppDispatch
  notesSlice.ts              State + 4 async thunks + moveNote action
  hooks.ts                   Typed useAppDispatch / useAppSelector

lib/
  Api.ts                     Axios instance + apiGet/Post/Put/Delete
  prisma.ts                  Prisma singleton (Phase 2)

types/
  index.ts                   Note, NotesState, Column

prisma/
  schema.prisma              Note model (Phase 2)
```

---

## Getting Started

```bash
yarn install
yarn start      # starts dev server and opens the browser
yarn dev        # dev server only, no auto-open
```

---

## API Routes

| Method | Endpoint | Redux Thunk | Description |
|---|---|---|---|
| GET | `/api/notes` | `fetchNotes` | Load all notes |
| POST | `/api/notes` | `createNote` | Add a new note |
| PUT | `/api/notes/:id` | `updateNote` | Update a note |
| DELETE | `/api/notes/:id` | `deleteNote` | Delete a note |

All calls go through `lib/Api.ts` — one Axios instance, one error handler.

---

## Learning Roadmap

### ✅ Step 1 — Foundation (done)
- Next.js 16 App Router — layouts, pages, route handlers, server vs client components
- Redux Toolkit — store, slice, async thunks, typed hooks
- Axios — centralized API layer with error interceptor
- TypeScript — interfaces, union types, `ReturnType<>`
- Tailwind CSS v4 — utility classes, animations

### 🔲 Step 2 — Drag & Drop
- dnd-kit — `DndContext`, `useDraggable`, `useDroppable`, `DragOverlay`
- Wire to `moveNote` Redux action

### 🔲 Step 3 — Real Database
- Prisma + SQLite — replace mock API with real queries
- Full CRUD persisted to disk

### 🔲 Step 4 — Edit & Delete
- Edit a note in place
- Delete button on cards

---

## Author

**Cristian Manrique** — Front-End Developer · Designer
[crisman.dev](https://crisman.dev) · [LinkedIn](https://linkedin.com/in/cristian-manrique)
