# ✈️ Next.js in Practice — Building Qoomlee Airline's Flight Search & Booking

> **A workshop-style course for mobile & backend developers who want to master React and Next.js.**
> Build Qoomlee's flight search & booking flow as a **static, multi-route SPA** — deployed the way most companies actually deploy: static files, no Node server.

This file reflects what `slides/slides.md` actually teaches (rewritten 2026-06-30). The course pivoted hard from the original 5-workshop, JWT-auth, Vercel-deployed check-in app plan — see [🧭 Dropped From the Original Plan](#-dropped-from-the-original-plan-todo) for what got cut and why, and [📍 TODO — Where This Could Go Next](#-todo--where-this-could-go-next) for what's still open.

---

## 🎯 Who Is This Course For?

You're a developer who's comfortable with TypeScript and already knows how to build things — whether that's iOS/Android apps or backend services in Go. You understand REST APIs, you're not afraid of the terminal, and you know how async/await works.

What you *don't* know yet is the web frontend world: React, components, the DOM, and how Next.js ties it all together.

**Prerequisites:**
- TypeScript (types, interfaces, generics, enums)
- Familiarity with REST APIs and HTTP
- Comfortable with the terminal and Git
- [Bun](https://bun.sh) installed (`bun --version` works) — for everything from `01-hello-react` onward
- `00-plain-react` needs nothing but a text editor and a browser, on purpose

**Not required:**
- Any React or Next.js knowledge
- Deep HTML/CSS knowledge

---

## 🛠️ What We're Building

**Qoomlee Airlines — Flight Search & Booking**

Six real screens, three Next.js routes, zero full-page reloads:

| Route | Screens it owns |
|---|---|
| `/` | Flight Search → Select Dates → Search Results |
| `/booking` | Booking Details (passenger form) |
| `/payment` | Secure Payment → Booking Confirmation |
| *(bonus, not built)* | My Bookings — discussed, not implemented |

**The constraint that shapes everything:** "My company deploys the web app as static files." That one sentence is the spine of the whole course — see "⚠️ The Constraint That Shapes Everything" below.

**Tech Stack (actual):**
| Layer | Technology |
|---|---|
| Framework | Next.js 15, App Router, `output: 'export'` (static export) |
| Language & Style | TypeScript, Tailwind CSS, design tokens |
| Icons | Material Symbols Outlined |
| State | `useState` / `useReducer` locally, `Context` shared across the 3 routes |
| Tooling | Bun runtime, Turbopack (app build), Vite (slide deck only) |
| Testing | Vitest + React Testing Library (Workshop 6) |
| Deployment | `/out` folder → any static host (S3, Nginx, Netlify, Vercel, GitHub Pages) |

Notably **not** on this list: no database driver, no session store, no Node server in production, no auth, no Go backend.

---

## ⚠️ The Constraint That Shapes Everything

Deploying as static files rules out:
- ❌ Server Actions (`"use server"`) — there's no server at request time
- ❌ Middleware (`middleware.ts` — renamed **Proxy** / `proxy.ts` as of Next.js 16, same restriction) — no edge runtime to intercept requests
- ❌ Server Components that fetch *per-request* data — they only run once, at `next build`
- ❌ `cookies()` / server sessions — no server to read a cookie from

Everything in this course has to work as **plain HTML + CSS + JS sitting in a folder.**

---

## 📐 Course Structure — Workshop 0 through Workshop 6

### Workshop 0 — From Plain JS to React
**Goal:** build the same card three ways (plain JS, class component, function + hooks) before touching Qoomlee for real.
- Setup: Tier 0 (`00-plain-react`, no build step) vs. Tier 1 (`01-hello-react` onward, needs Bun)
- `00-plain-react` — one HTML file, no build step at all
- `01-hello-react` — first real project, intro to real tooling
- "🎯 What We're Building" — FlightCard mockup (collapsed/expanded), the shape every later hook example reuses
- Class components → the same card as a function → `useState` + `useEffect` replacing the class → a real `useEffect` dependency-array gotcha
- `useContext` (sharing without prop-drilling), `useReducer` (state pieces that move together), `useMemo` (don't recompute what hasn't changed)
- 🏋️ Try It Yourself: finish the functional version of `Hi.tsx`, fix the `useEffect` gotcha in `Heroes.tsx`
- Tech stack, the static-export constraint, why **three routes, not six, not one**, `next.config.js`, the domain model (`types/booking.ts`), design tokens, icons/fonts, `BookingContext`
- `layout.tsx` as a file convention (persists across navigation, root layout required, unaffected by static export) and `loading.tsx` (automatic per-route `Suspense` — covers route-transition latency, not the client-side `useEffect` fetch in Quest 3)

### Workshop 1 — Thinking in React, the Qoomlee Way
- **Quest 1 · Flight Search** — local state first, converting the design (the swap-origin/destination button). 🏋️ Try It Yourself 1.1
- **Quest 2 · Select Dates** — modeling a date range, converting the design (day cells). 🏋️ Try It Yourself 1.2

### Workshop 2 — Fetching & Shaping Data (Client-Side, Because No Server)
- **Quest 3 · Search Results** — where the data comes from, client-side fetch with `useEffect`, the mock API as a stand-in for a real backend, sorting without extra state (`useMemo`). 🏋️ Try It Yourself

### Workshop 3 — Forms, Derived State & Live Pricing
- **Quest 4 · Booking Details** — a form with a derived total, converting the design into one controlled form, the upsell toggle. 🏋️ Try It Yourself

### Workshop 4 — Multi-Step State, Timers & Effects
- **Quest 5 · Secure Payment** — `useReducer` for related state, a countdown timer with `useEffect`, tabs without a library. 🏋️ Try It Yourself
- Tying it together: three routes, three scopes of state

### Workshop 5 — Finishing the Journey & Shipping Static Files
- **Quest 6 · Booking Confirmation** — copy-to-clipboard, clearing state *and* changing routes back to home. 🏋️ Try It Yourself 5.1
- 🎁 Bonus Screen · My Bookings — "what would it take?" discussion only, not built
- Building for static export (`bun run build`, the `/out` folder), sharp edges (`next/image` needs a server, deep links can outrun `BookingContext`, env vars baked in at build time, "backend" is just `fetch` to an external API)
- Full architecture recap (structure + flow diagrams)
- 🧭 What's Next (Beyond Today): real backend, testing, accessibility, analytics

### Workshop 6 — Proving It Works
- Why test a static-export app at all
- Setting up Vitest (+ Testing Library)
- Testing a pure function (`paymentReducer`, `pickDate`)
- Testing a component (`render`/`screen`/`userEvent`)
- Testing a hook and mocking the fetch boundary (`vi.mock('@/lib/mock-api')`, mocked `useRouter`)
- 🏋️ Try It Yourself

---

## 📦 Concept Map (What Each Hook/Pattern Is Used For)

| Concept | Where it's used |
|---|---|
| Class component lifecycle | `Hi.tsx` / `Heroes.tsx` (Workshop 0, contrast only) |
| `layout.tsx` | `app/layout.tsx` — root shell, hosts `BookingProvider` (Workshop 0) |
| `loading.tsx` | one per route (`/`, `/booking`, `/payment`) — covers route-transition latency only (Workshop 0) |
| `useState` | every screen's local UI state |
| `useEffect` (+ cleanup) | client-side fetch, countdown timer, `sessionStorage` sync |
| `useContext` | `BookingContext` shared across `/`, `/booking`, `/payment` |
| `useReducer` | payment tabs + promo + terms (Quest 5) |
| `useMemo` | sorting search results, derived pricing totals |
| Controlled forms | Booking Details (Quest 4) |
| Client-side fetch | Search Results (Quest 3), against `lib/mock-api.ts` |
| Route guards + `router.replace()` | bouncing home when prerequisite state is missing |
| `output: 'export'` + `images.unoptimized` | the shippable static `/out` folder |
| Vitest + Testing Library | Workshop 6, full app |

---

## 🗂️ Folder Structure (Actual Repo)

```
course-nextjs/
├── 00-plain-react/        ← Workshop 0, Tier 0 — single HTML file, no build step
├── 01-hello-react/        ← Workshop 0, Tier 1 — CRA-shaped (react-scripts)
│   └── src/
│       ├── Hi.tsx          ← canonical useState demo (Try It Yourself target)
│       └── Heroes.tsx      ← canonical class/fetch/lifecycle demo
├── 03-qoomlee/            ← the actual Qoomlee app skeleton (App Router, create-next-app)
│   ├── app/
│   │   ├── layout.tsx      ← currently default scaffold; BookingProvider not yet checked in
│   │   └── page.tsx        ← currently default scaffold
│   └── services/
│       ├── average.ts      ← Workshop 6 test target
│       └── average.test.ts ← written before Vitest is installed, on purpose
└── slides/
    └── slides.md           ← all Qoomlee-specific code (FlightCard, BookingContext,
                                types/booking.ts, lib/mock-api.ts, the 3 real routes)
                                lives here as taught code blocks, not as files on disk
```

**By design**, `03-qoomlee` is *not* a finished app. The Qoomlee-specific code (domain types, `BookingContext`, the `/`, `/booking`, `/payment` routes, the mock API) is taught entirely as code blocks inside `slides.md` — each one anchored back to a real, runnable Tier-1 file (`Hi.tsx` for `useState`, `Heroes.tsx` for class/lifecycle/fetch patterns). This is the two-tier convention: Tier 1 is real and runnable; Tier 2 (Qoomlee) is illustrative and lives only in the deck. `02-nextjs-jest` is an older exploratory project (dashboard/invoice demo, Jest config) **not referenced anywhere in `slides.md`** — see TODO below on whether to prune it.

---

## 🧭 Dropped From the Original Plan (TODO)

The original plan was a 5-workshop airline **check-in** system with JWT auth against a Go backend, a seat map, baggage selection, a printable boarding pass, and Vercel deployment. None of that survived the pivot to a **search & booking** flow. Specifically dropped:

- [ ] JWT authentication flow, HTTP-only cookies, login Server Action
- [ ] Go (Gin) mock backend and its 4 endpoints
- [ ] Middleware/Proxy-based route protection
- [ ] `useReducer` seat map + `useOptimistic` seat selection
- [ ] Baggage & add-ons selector
- [ ] Digital boarding pass: `react-pdf` PDF export, `qrcode.react` QR code, `@print` CSS
- [ ] Vercel deployment workshop (preview deployments, env vars in Vercel dashboard)
- [ ] Server Actions as the form-handling pattern (incompatible with static export — deliberately excluded, not just dropped)

These weren't lost by accident — they're incompatible with the "static files, no server" constraint the course now teaches as its central lesson. If a future cohort wants any of these back, it needs a *non-static* deployment target first (Vercel, or any Node host), which reopens Server Actions, Middleware/Proxy, and per-request Server Components as options.

---

## 📍 TODO — Where This Could Go Next

**Content gaps worth scoping as a Workshop 7 (or a standalone bonus session), without abandoning static export:**
- [ ] Route Handlers (GET-only) — these *are* supported under static export, never demonstrated
- [ ] `error.tsx` and a genuine Suspense-driven client loading state (SWR `suspense: true` or React's `use()`) — `loading.tsx` is now covered (Workshop 0), but it only masks route-transition latency; `error.tsx` and real Suspense-around-client-fetch are still unshown
- [ ] `generateMetadata` / static SEO metadata, plus Metadata Files (`favicon.ico` already present, `sitemap.xml`, `robots.txt`, `manifest.json`, OG images) — all static-export-safe, cheap to add to the deployment slide
- [ ] Dynamic `[param]` routes + `generateStaticParams()` — not used since the app only has 3 fixed routes; worth at least explaining why
- [ ] `redirect()` / `notFound()` vs. the hand-rolled `router.replace('/')` guards already in use
- [ ] Building out the My Bookings bonus screen as a real 4th route (the slide already scopes what it would take)

**Repo hygiene:**
- [ ] `01-hello-react` is CRA-shaped (`react-scripts`), not Next.js — decide whether to re-scaffold with `create-next-app` for consistency, or leave it (it's Workshop 0, before Next.js is introduced, so the inconsistency may be intentional)
- [ ] `02-nextjs-jest` isn't referenced by any slide — confirm it's safe to delete, or document why it's kept around
- [ ] Decide whether `03-qoomlee` should eventually have the real `BookingProvider` / `types/booking.ts` / `lib/mock-api.ts` / 3-route implementation checked in as actual files (a working reference solution), or stay permanently as a skeleton with all Qoomlee code living only in `slides.md`

**Forward-looking (not yet actionable, framework still moving):**
- [ ] React's `<Activity>` component / Next.js "Preserving UI State" guide is the framework's built-in answer to exactly what `BookingProvider` + `sessionStorage` solves by hand today. It's gated behind `cacheComponents: true`, part of the dynamic-rendering pipeline — almost certainly incompatible with `output: 'export'` as of mid-2026. Worth revisiting if static export ever gains support, or if the course ever drops static export.
- [ ] Middleware → Proxy rename (Next.js 16): no functional change, just update terminology if the constraint slide is ever revised.

**Carried over from the original plan's "Next Steps" (still valid, never started):**
- [ ] Zustand or Jotai — for when `Context` isn't enough
- [ ] React Query / SWR — caching/sync layer for the client-side fetches already in place
- [ ] Prisma + PostgreSQL — if a real backend ever replaces `lib/mock-api.ts`
- [ ] Playwright E2E — Workshop 6 only covers unit/component tests with Vitest
- [ ] Internationalization
