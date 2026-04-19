# Basic React Todo List

A local-first todo app built with React 19, TypeScript, Vite, and IndexedDB. The UI is intentionally lightweight, but the implementation uses modern patterns: Suspense-driven data loading, optimistic SWR mutations, accessible tabs, and a native `<dialog>`-based modal.

## Why This Project Exists

This repo is small on purpose. It is a good reference app for:

- React 19 client-side patterns such as `useActionState`, `useTransition`, and Suspense.
- Local persistence with IndexedDB through [`idb`](https://github.com/jakearchibald/idb).
- Optimistic UI updates with [`swr`](https://swr.vercel.app/).
- Keyboard-accessible UI primitives implemented without a component library.
- Writing focused tests with Vitest and Testing Library.

## Feature Highlights

- Persists todos in IndexedDB, so data survives refreshes in the same browser profile.
- Seeds the database with starter items the first time the app runs.
- Supports create, edit, complete, undo, and delete flows.
- Uses optimistic updates so mutations feel instant while the database write finishes.
- Includes accessible tab navigation with arrow-key, Home, and End support.
- Uses a native modal dialog with focus restoration when the dialog closes.

## Stack

- React 19
- TypeScript
- Vite via `rolldown-vite`
- SWR for cache + optimistic mutation flow
- `idb` for IndexedDB access
- Vitest + Testing Library for tests
- Plain CSS for styling

## Getting Started

### Requirements

- Node.js `>=24`
- npm `>=11`

### Install

```bash
npm install
```

### Start the App

```bash
npm run dev
```

Open the local Vite URL shown in the terminal, usually `http://localhost:5173`.

## Available Scripts

| Command              | What it does                                                 |
| -------------------- | ------------------------------------------------------------ |
| `npm run dev`        | Starts the local Vite development server.                    |
| `npm run typecheck`  | Runs TypeScript in no-emit mode for the app and Vite config. |
| `npm run test`       | Runs the Vitest suite once in jsdom.                         |
| `npm run test:watch` | Runs Vitest in watch mode.                                   |
| `npm run build`      | Creates the production bundle.                               |
| `npm run preview`    | Serves the production bundle locally.                        |

## Project Structure

```text
src/
  app.tsx           App composition, Suspense boundary, SWR cache provider
  context.ts        UI state for the modal and selected todo
  todo-store.ts     IndexedDB persistence layer
  use-todos.ts      SWR-backed todo mutations and optimistic updates
  todo-tabs.tsx     Sidebar + filtered todo views
  tabs.tsx          Reusable accessible tabs primitive
  test/             Vitest and Testing Library coverage
```

## Architecture Notes

### Data Flow

`src/todo-store.ts` is the persistence boundary. It owns the IndexedDB schema, seeding, and CRUD operations.

`src/use-todos.ts` wraps that store with SWR so the UI gets:

- Suspense-based initial loading
- Optimistic cache updates for create, edit, delete, and completion toggles
- Automatic rollback if a mutation fails

### UI State

Transient UI state such as whether the modal is open and which todo is being edited lives in `src/context.ts`. That keeps the storage layer and UI behavior separated cleanly.

### Accessibility

The app avoids heavy abstractions and leans on native semantics where possible:

- Tabs expose the expected ARIA roles and keyboard behavior.
- The modal uses `<dialog>` and restores focus to the previously active element.
- Error and loading states use semantic regions and live feedback.

## JSDoc

Key exported modules now include JSDoc comments, especially around the storage layer, state context, and reusable hooks/components. In a TypeScript codebase, that is most useful at module boundaries where editors can surface intent directly during navigation instead of forcing readers to reverse-engineer behavior from implementation details.

## Testing

The test suite covers the main user flows and persistence behavior, including:

- seeded IndexedDB state
- add, edit, complete, undo, and delete mutations
- modal behavior
- keyboard navigation for tabs

Run the suite with:

```bash
npm run test
```

## Production Notes

- This app is browser-local only; there is no backend or sync layer.
- IndexedDB storage is scoped to the browser profile and origin.
- The production build is a static bundle, which makes it easy to deploy to platforms such as Vercel.
