# Notes Dashboard — Kanban Board

> A full-screen drag-and-drop Kanban board built step by step as a learning project.

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5-007ACC?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2-593D88?style=flat&logo=redux)
![Axios](https://img.shields.io/badge/Axios-1-5A29E4?style=flat&logo=axios)
![Jest](https://img.shields.io/badge/Jest-30-C21325?style=flat&logo=jest)

---

## What this project is

A Kanban board with 3 columns — **To Do**, **In Progress**, **Done**.

Each step introduces one new concept. Nothing is added until it is understood.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| State | Redux Toolkit |
| HTTP | Axios |
| Drag & Drop | dnd-kit |
| Theme | Context API |
| Testing | Jest + React Testing Library |
| Database | Prisma + SQLite *(Phase 2)* |

---

## Features

- **3-column Kanban board** — To Do · In Progress · Done
- **Drag & Drop** — move cards between columns + reorder within a column
- **Add note** — slide-in right drawer with title, content, color, column picker, live preview
- **Edit note** — click ✏ on any card to edit in the drawer
- **Delete note** — click ✕ on any card with confirmation dialog
- **Dark / Light mode** — toggle via Context API + Tailwind v4 `@variant dark`
- **REST API** — Next.js Route Handlers (mock in-memory, Phase 2 → Prisma)
- **Unit tests** — Jest + React Testing Library

---

## Project Structure

```
app/
  layout.tsx                   Root layout — StoreProvider + ThemeProvider
  page.tsx                     Only page — owns drawerOpen + editingNote state
  globals.css                  Tailwind v4 config + @variant dark
  api/notes/
    data.ts                    Shared mock data — globalThis singleton
    route.ts                   GET all notes + POST new note
    [id]/route.ts              PUT update + DELETE note

components/
  StoreProvider.tsx            Redux Provider wrapper
  Board/
    NoteBoard.tsx              DndContext, DragOverlay, fetches notes, renders columns
    NoteColumn.tsx             useDroppable + SortableContext — one column
    NoteCard.tsx               useSortable — one card, edit + delete buttons
  Forms/
    NoteFormDrawer.tsx         Slide-in drawer — create + edit note
  UI/
    Header.tsx                 Top bar + ThemeToggle + New Note button
    ThemeToggle.tsx            Dark / light mode button

store/
  store.ts                     Redux store + RootState + AppDispatch
  notesSlice.ts                State + 4 async thunks + moveNote + reorderNotes
  hooks.ts                     Typed useAppDispatch / useAppSelector

context/
  ThemeContext.tsx             Theme state + useTheme hook

lib/
  Api.ts                       Axios instance + apiGet/Post/Put/Delete
  prisma.ts                    Prisma singleton (Phase 2)

types/
  index.ts                     Note, NotesState, Column

prisma/
  schema.prisma                Note model (Phase 2)

__tests__/
  NoteCard.test.tsx            Renders title + content (with Provider + DndContext)
  notesSlice.test.ts           moveNote reducer
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

## Running Tests (@testing-library/react)

```bash
yarn test            # run all tests
yarn test:watch      # re-run on every save
yarn test:coverage   # with coverage report
```

<img width="281" height="172" alt="image" src="https://github.com/user-attachments/assets/c90926a8-1366-4878-a026-1d1807d1b3fd" />

---

## Learning Roadmap

### ✅ Step 1 — Foundation
- Next.js 16 App Router — layouts, pages, route handlers, server vs client components
- Redux Toolkit — store, slice, async thunks, typed hooks
- Axios — centralized API layer with error interceptor
- TypeScript — interfaces, union types, `ReturnType<>`
- Tailwind CSS v4 — utility classes, animations

### ✅ Step 2 — Drag & Drop
- dnd-kit — `DndContext`, `useSortable`, `useDroppable`, `SortableContext`, `DragOverlay`
- Cross-column move + reorder within column
- `moveNote` + `reorderNotes` Redux actions

### ✅ Step 3 — Dark / Light Mode
- Tailwind v4 `@variant dark` — class-based dark mode
- Context API — `ThemeProvider`, `useTheme`
- All components updated with `dark:` classes

### ✅ Step 4 — Edit & Delete
- Delete button on card hover — `window.confirm` + `deleteNote` thunk
- Edit button on card hover — pre-filled drawer + `updateNote` thunk
- Prop drilling — `page → NoteBoard → NoteColumn → NoteCard`
- Mock API module isolation fixed with `globalThis` singleton

### 🔲 Step 5 — Real Database
- Prisma + SQLite — replace mock API with real queries
- Full CRUD persisted to disk

---

## Screenshot

<img width="1457" height="856" alt="image" src="https://github.com/user-attachments/assets/03a6db3d-ad1e-48ac-a401-07196de35422" />

---

## Live Demo

[notes-dashboard](https://notes-dashboard-demo.netlify.app/)

---

## Author

**Cristian Manrique** — Front-End Developer · Designer
[crisman.dev](https://crisman.dev) · [LinkedIn](https://linkedin.com/in/cristian-manrique)

---

*"The future of design & development is Human + AI"*
