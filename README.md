# 📋 Notes Dashboard — Kanban Board

> A modern drag-and-drop Kanban board built with Next.js 15, TypeScript, Tailwind CSS and Redux Toolkit.

![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=flat&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5-007ACC?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2-593D88?style=flat&logo=redux)
![Jest](https://img.shields.io/badge/Jest-29-C21325?style=flat&logo=jest)

---

## ✨ Features

- 📝 **Add, edit and delete notes** with title, content and color
- 🗂️ **3-column Kanban board** — To Do · In Progress · Done
- 🖱️ **Drag & Drop** between columns using dnd-kit
- 🌙 **Dark / Light mode** toggle via Context API
- 🔌 **REST API** built-in with Next.js Route Handlers
- 💾 **Persistent storage** with Prisma + SQLite
- 🧪 **Unit tests** with Jest + React Testing Library
- 📱 **Fully responsive** — mobile, tablet, desktop
- ⚡ **TypeScript strict** throughout

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS v4 |
| State Management | Redux Toolkit + Context API |
| Drag & Drop | dnd-kit |
| Database | Prisma + SQLite |
| Testing | Jest + React Testing Library |
| Deployment | Vercel |

---

## 🧠 Concepts Covered

This project is designed to learn and demonstrate key front-end engineering concepts:

| Concept | Implementation |
|---------|---------------|
| Redux Toolkit | Global notes state — actions, reducers, selectors |
| Redux Thunk | Async API calls before dispatching actions |
| Context API | Theme (dark/light) — simple global state |
| REST API | Next.js Route Handlers — GET, POST, PUT, DELETE |
| TypeScript | Strict typing — interfaces, unions, generics |
| Tailwind CSS | Utility-first styling, dark mode, responsive |
| Drag & Drop | dnd-kit — move notes between columns |
| Jest + RTL | Unit tests for components and Redux slices |
| Git workflow | Feature branches, PRs, conventional commits |
| Next.js App Router | Layouts, pages, server/client components |

---

## 📁 Project Structure

```
notes-dashboard/
├── app/
│   ├── layout.tsx              # Root layout — ThemeProvider
│   ├── page.tsx                # Dashboard page
│   └── api/
│       └── notes/
│           ├── route.ts        # GET all notes, POST new note
│           └── [id]/
│               └── route.ts    # PUT update, DELETE note
├── components/
│   ├── Board/
│   │   ├── NoteBoard.tsx       # Main board with 3 columns
│   │   ├── NoteColumn.tsx      # Individual column (To Do, etc.)
│   │   └── NoteCard.tsx        # Draggable note card
│   ├── Forms/
│   │   └── AddNoteForm.tsx     # Modal form to add a note
│   └── UI/
│       ├── ThemeToggle.tsx     # Dark/light mode button
│       └── Header.tsx          # App header
├── store/
│   ├── store.ts                # Redux store configuration
│   ├── notesSlice.ts           # Notes reducer + actions
│   └── hooks.ts                # Typed useAppDispatch/useAppSelector
├── context/
│   └── ThemeContext.tsx        # Context API for theme
├── types/
│   └── index.ts                # TypeScript interfaces
├── lib/
│   └── prisma.ts               # Prisma client singleton
├── prisma/
│   └── schema.prisma           # Database schema
├── __tests__/
│   ├── NoteCard.test.tsx       # Component tests
│   ├── AddNoteForm.test.tsx    # Form tests
│   └── notesSlice.test.ts      # Redux slice tests
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/cristianManrique/notes-dashboard.git
cd notes-dashboard
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Setup the database
```bash
npx prisma generate
npx prisma db push
```

### 4. Run the dev server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗄️ Database Schema

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

## 🔌 API Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Fetch all notes |
| POST | `/api/notes` | Create a new note |
| PUT | `/api/notes/:id` | Update a note (title, content, column) |
| DELETE | `/api/notes/:id` | Delete a note |

---

## 🧪 Running Tests

```bash
# Run all tests
npm test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

---

## 📦 Key Dependencies

```json
{
  "next": "^15.0.0",
  "react": "^18.3.0",
  "typescript": "^5.0.0",
  "tailwindcss": "^4.0.0",
  "@reduxjs/toolkit": "^2.0.0",
  "react-redux": "^9.0.0",
  "@dnd-kit/core": "^6.0.0",
  "@dnd-kit/sortable": "^8.0.0",
  "@prisma/client": "^5.0.0",
  "jest": "^29.0.0",
  "@testing-library/react": "^14.0.0"
}
```

## 🌐 Live Demo

[notes-dashboard.vercel.app](https://notes-dashboard.vercel.app) *(coming soon)*

---

## 👤 Author

**Cristian Manrique** — Front-End Developer · Designer
🌐 [crisman.dev](https://crisman.dev) · 💼 [LinkedIn](https://linkedin.com/in/cristian-manrique)

---

*"The future of design & development is Human + AI"*
