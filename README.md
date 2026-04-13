# Notes Dashboard — Kanban Board

> A full-screen drag-and-drop Kanban board built with Next.js 16, TypeScript, Tailwind CSS v4, Redux Toolkit and Axios.

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5-007ACC?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2-593D88?style=flat&logo=redux)
![Axios](https://img.shields.io/badge/Axios-1-5A29E4?style=flat&logo=axios)
![Jest](https://img.shields.io/badge/Jest-30-C21325?style=flat&logo=jest)

---

## Features

- **3-column Kanban board** — To Do · In Progress · Done
- **Right-side drawer** — slide-in panel to add notes without leaving the board
- **Note cards** — title, content, color, column selector, live preview
- **Dark / Light mode** toggle via Context API
- **REST API** built with Next.js Route Handlers
- **Axios API layer** — typed helpers `apiGet`, `apiPost`, `apiPut`, `apiPatch`, `apiDelete`
- **Persistent storage** with Prisma + SQLite *(Week 2)*
- **Drag & Drop** between columns using dnd-kit *(Week 1 Day 5)*
- **Unit tests** with Jest + React Testing Library
- **TypeScript strict** throughout

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS v4 |
| State Management | Redux Toolkit + Context API |
| HTTP Client | Axios |
| Drag & Drop | dnd-kit |
| Database | Prisma + SQLite |
| Testing | Jest + React Testing Library |
| Deployment | Vercel |

---

## Concepts Covered

| Concept | Implementation |
|---------|---------------|
| Redux Toolkit | Global notes state — actions, reducers, selectors |
| Redux Thunk | Async API calls (`fetchNotes`, `createNote`, `updateNote`, `deleteNote`) |
| Context API | Theme (dark/light) — simple global state |
| Axios | Typed API layer with interceptors — `lib/Api.ts` |
| REST API | Next.js Route Handlers — GET, POST, PUT, DELETE |
| TypeScript | Strict typing — interfaces, unions, generics, `ReturnType<>` |
| Tailwind CSS v4 | Utility-first styling, dark mode, animations |
| Drag & Drop | dnd-kit — move notes between columns |
| Jest + RTL | Unit tests for components and Redux slices |
| Next.js App Router | Layouts, pages, server/client components, `StoreProvider` pattern |

---

## Project Structure

```
notes-dashboard/
├── app/
│   ├── layout.tsx              # Root layout — StoreProvider + ThemeProvider
│   ├── page.tsx                # Dashboard — manages drawer open state
│   └── api/
│       └── notes/
│           ├── route.ts        # GET all notes, POST new note
│           └── [id]/
│               └── route.ts    # PUT update, DELETE note
├── components/
│   ├── Board/
│   │   ├── NoteBoard.tsx       # Full-screen board, dispatches fetchNotes
│   │   ├── NoteColumn.tsx      # Column with accent, counter, skeleton, empty state
│   │   └── NoteCard.tsx        # Colored card with hover animation
│   ├── Forms/
│   │   └── NoteFormDrawer.tsx  # Slide-in right drawer — add note form
│   ├── StoreProvider.tsx       # Client wrapper for Redux <Provider>
│   └── UI/
│       ├── ThemeToggle.tsx     # Dark/light mode button
│       └── Header.tsx          # App header + "New Note" button
├── store/
│   ├── store.ts                # Redux store — RootState, AppDispatch
│   ├── notesSlice.ts           # Notes reducer + 4 async thunks via Axios
│   └── hooks.ts                # Typed useAppDispatch / useAppSelector
├── context/
│   └── ThemeContext.tsx        # Context API for theme
├── lib/
│   ├── Api.ts                  # Axios instance + apiGet/Post/Put/Patch/Delete
│   └── prisma.ts               # Prisma client singleton
├── types/
│   └── index.ts                # Note, NotesState, Column interfaces
├── prisma/
│   └── schema.prisma           # Note model
├── scripts/
│   └── start.js                # Dev server + auto-open browser (cross-platform)
└── __tests__/
    ├── NoteCard.test.tsx
    └── notesSlice.test.ts
```

---

## Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/cristianManrique/notes-dashboard.git
cd notes-dashboard
```

### 2. Install dependencies
```bash
yarn install
```

### 3. Start dev server + open browser
```bash
yarn start
```

The browser opens automatically at [http://localhost:3000](http://localhost:3000).

> For dev only (no auto-open): `yarn dev`

---

## Database Setup *(Week 2)*

```bash
npx prisma generate
npx prisma db push
```

Schema — `prisma/schema.prisma`:

```prisma
model Note {
  id        String   @id @default(cuid())
  title     String
  content   String
  column    String   @default("todo")
  color     String   @default("#ffffff")
  order     Int      @default(0)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

---

## API Routes

| Method | Endpoint | Thunk | Description |
|--------|----------|-------|-------------|
| GET | `/api/notes` | `fetchNotes` | Fetch all notes |
| POST | `/api/notes` | `createNote` | Create a new note |
| PUT | `/api/notes/:id` | `updateNote` | Update a note |
| DELETE | `/api/notes/:id` | `deleteNote` | Delete a note |

All requests go through the Axios layer in `lib/Api.ts`.

---

## API Layer — `lib/Api.ts`

```ts
apiGet<T>(url)              // GET
apiPost<T, B>(url, body)    // POST
apiPut<T, B>(url, body)     // PUT
apiPatch<T, B>(url, body)   // PATCH
apiDelete<T>(url)           // DELETE
```

Centralised error handling via `interceptors.response`. Auth token injection ready in `interceptors.request`.

---

## Running Tests

```bash
yarn test
yarn test:watch
yarn test:coverage
```

---

## Roadmap

### Week 1 — Skeleton (current)
- [x] Next.js 16 + TypeScript + Tailwind v4 setup
- [x] Redux store + notesSlice + typed hooks
- [x] Context API — dark/light theme
- [x] Full-screen Kanban board UI
- [x] Right-side drawer to add notes
- [x] REST API Route Handlers (mock)
- [x] Axios API layer
- [x] Jest skeleton tests
- [ ] Drag & Drop with dnd-kit *(Day 5)*

### Week 2 — Real Data
- [ ] Prisma + SQLite persistence
- [ ] Edit note in place
- [ ] Full CRUD synced with DB

### Week 3 — Polish
- [ ] Drag & Drop animations
- [ ] Mobile responsive layout
- [ ] Column note count badges
- [ ] Empty state illustrations

### Week 4 — Production
- [ ] Full Jest + RTL coverage
- [ ] Vercel deployment
- [ ] Add to portfolio crisman.dev

---
## Screenshot

<img width="1457" height="856" alt="image" src="https://github.com/user-attachments/assets/03a6db3d-ad1e-48ac-a401-07196de35422" />


---

## Live Demo

[notes-dashboard.vercel.app](https://notes-dashboard.vercel.app) *(coming soon)*

---

## Author

**Cristian Manrique** — Front-End Developer · Designer
[crisman.dev](https://crisman.dev) · [LinkedIn](https://linkedin.com/in/cristian-manrique)

---

*"The future of design & development is Human + AI"*
