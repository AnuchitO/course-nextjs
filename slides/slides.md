---
theme: seriph
background: https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80
class: text-center
highlighter: shiki
lineNumbers: true
info: |
  ## Next.js in Practice
  Building Qoomlee Airline's Flight Search & Booking as a static, multi-route SPA.
drawings:
  persist: false
transition: slide-left
title: Next.js in Practice
mdc: true
---

# ✈️ Next.js in Practice
### Building Qoomlee Airline — Flight Search & Booking

<div class="text-sm opacity-70 mt-2">Three routes. Soft navigation. No server. Just files.</div>

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer hover:bg-white hover:bg-opacity-10" title="Next Page">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.prev" class="text-xl icon-btn opacity-50 !border-none hover:opacity-100" title="Previous Slide">
    <carbon:chevron-left/>
  </button>
  <button @click="$slidev.nav.next" class="text-xl icon-btn opacity-50 !border-none hover:opacity-100" title="Next Slide">
    <carbon:chevron-right/>
  </button>
</div>

---
layout: center
---

# 🎯 Who Is This Course For?

- **Mobile Developers**: iOS/Android context (UIKit, SwiftUI, Compose).
- **Backend Developers**: Go, REST, JWT, async/await knowledge.
- **Goal**: Master React + Next.js by shipping a real product, deployed the way *your company actually deploys* — static files, no Node server.

<v-click>

### House rules
- Every concept lands inside **Qoomlee's flight search & booking flow** — no throwaway examples.
- Every screen we build starts from a **real design** — we convert it to a real component, not a sketch.
- We write code in (almost) every slide. Open your editor now.
- "🏋️ Try It Yourself" slides are not optional — that's where the learning happens.

</v-click>

---
layout: section
---

# 🛠️ What We're Building

### Qoomlee Airlines — Flight Search & Booking
#### Three routes, one seamless flow — statically exported

---
layout: center
class: text-center
---

# 🛫 The Journey We're Building

<div class="text-lg opacity-70 mt-2 mb-10">Three routes. Six screens. Zero full-page reloads.</div>

<div class="flex items-start justify-center gap-2">

<div class="flex flex-col items-center gap-3 px-4 py-3 rounded-2xl border-2 border-blue-400/40 bg-blue-400/5">
<span class="text-xs font-mono text-blue-500">/</span>
<div class="flex items-center gap-2">

<div class="flex flex-col items-center gap-1 w-16">
  <div class="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg shadow-md shadow-blue-600/30">
    <carbon:search />
  </div>
  <span class="text-xs font-semibold">Search</span>
</div>

<div class="inline-flex">
  <carbon:arrow-right class="text-sm text-gray-400" />
</div>

<div class="flex flex-col items-center gap-1 w-16">
  <div class="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg shadow-md shadow-blue-600/30">
    <carbon:calendar />
  </div>
  <span class="text-xs font-semibold">Dates</span>
</div>

<div class="inline-flex">
  <carbon:arrow-right class="text-sm text-gray-400" />
</div>

<div class="flex flex-col items-center gap-1 w-16">
  <div class="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg shadow-md shadow-blue-600/30">
    <carbon:list />
  </div>
  <span class="text-xs font-semibold">Results</span>
</div>

</div>
</div>

<div class="flex flex-col items-center justify-center gap-1 px-1 mt-9">
  <carbon:arrow-right class="text-2xl text-gray-400" />
  <span class="text-[10px] uppercase tracking-wide opacity-50">navigate</span>
</div>

<div class="flex flex-col items-center gap-3 px-4 py-3 rounded-2xl border-2 border-violet-400/40 bg-violet-400/5">
<span class="text-xs font-mono text-violet-500">/booking</span>
<div class="flex flex-col items-center gap-1 w-16">
  <div class="w-11 h-11 rounded-full bg-violet-600 text-white flex items-center justify-center text-lg shadow-md shadow-violet-600/30">
    <carbon:user />
  </div>
  <span class="text-xs font-semibold">Booking</span>
</div>
</div>

<div class="flex flex-col items-center justify-center gap-1 px-1 mt-9">
  <carbon:arrow-right class="text-2xl text-gray-400" />
  <span class="text-[10px] uppercase tracking-wide opacity-50">navigate</span>
</div>

<div class="flex flex-col items-center gap-3 px-4 py-3 rounded-2xl border-2 border-emerald-400/40 bg-emerald-400/5">
<span class="text-xs font-mono text-emerald-500">/payment</span>
<div class="flex items-center gap-2">

<div class="flex flex-col items-center gap-1 w-16">
  <div class="w-11 h-11 rounded-full bg-emerald-600 text-white flex items-center justify-center text-lg shadow-md shadow-emerald-600/30">
    <carbon:purchase />
  </div>
  <span class="text-xs font-semibold">Payment</span>
</div>

<div class="inline-flex">
  <carbon:arrow-right class="text-sm text-gray-400" />
</div>

<div class="flex flex-col items-center gap-1 w-16">
  <div class="w-11 h-11 rounded-full bg-emerald-500 text-white flex items-center justify-center text-lg shadow-md shadow-emerald-500/30">
    <carbon:checkmark-filled />
  </div>
  <span class="text-xs font-semibold">Done</span>
</div>

</div>
</div>

</div>

<div class="mt-8 text-sm opacity-60">
Six real designs. Three Next.js routes. Every transition still feels instant.
</div>

---
layout: center
---

# 🔁 Our Job, Screen by Screen

Each screen is a **real Figma-to-HTML design** handed to us by the design team.

<v-clicks>

1. **Look at the design** — what does the user see?
2. **Understand the "why"** — what problem is this screen solving?
3. **Convert it** to a real Next.js component.
4. **Build it yourself** in the workshop.

</v-clicks>

---
layout: section
---

# 📦 Workshop 0
## From Plain JS to React

### Setup · Plain React · Class vs Functional · Hooks

---

# 🧰 Setup — What You Actually Need

<v-click>

There are two tiers today, and they need different things.

</v-click>

<v-click>

**Tier 0 — `00-plain-react`**
- A text editor and a browser. That's it.
- No install, no `node_modules`, no build step.

</v-click>

<v-click>

**Tier 1 — everything from `01-hello-react` onward**
- [Bun](https://bun.sh) installed (`bun --version` works)
- A terminal, and an editor that understands TypeScript

</v-click>

<div v-click class="mt-6 p-4 rounded bg-blue-500/10 border border-blue-500/30">
💡 We start with zero tooling on purpose — so the first time you see a build step, you've already seen what it's replacing.
</div>

---
layout: center
class: text-center
---

# 🧪 `00-plain-react` — No Build Step At All

<div class="mt-3 text-sm opacity-60">the entire project is one HTML file</div>

---

# 🛠️ The Whole Thing, Read Top to Bottom

```html {10-12,18-30}
<!-- 00-plain-react/index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <script src="react.production.min.js"></script>
  <script src="react-dom.production.min.js"></script>
  <script src="babel.min.js"></script>
</head>
<body>
  <div id="root">it will show here</div>
</body>
<script type="text/babel">
  const element = <h1>Hello Plain element</h1>;

  const App = () => {
    return <h1>Hello App</h1>;
  }

  ReactDOM.render(element, document.getElementById('root'))
</script>
</html>
```

<div class="mt-2 text-sm opacity-70">
No <code>npm</code>, no bundler, no JSX transform ahead of time. <code>babel.min.js</code> compiles the JSX <i>in the browser, on every page load</i> — convenient for a demo, never for production (every visitor pays that compile cost).
</div>

---

# 🤔 So What *Is* React, Really?

<v-click>

`React` and `ReactDOM` here are just two `<script>` tags — UMD builds, same as jQuery used to ship. There's no framework magic happening yet.

</v-click>

<v-click>

```html
<!-- JSX you write -->
<h1>Hello App</h1>

<!-- what Babel turns it into, before React ever sees it -->
React.createElement('h1', null, 'Hello App')
```

</v-click>

<v-click>

`ReactDOM.render(element, document.getElementById('root'))` then walks that plain JS object tree and calls the **exact same DOM APIs** you'd call by hand (`document.createElement`, `appendChild`, ...). React's whole job is deciding *when* and *what* to update — not inventing a new way to touch the page.

</v-click>

<div v-click class="mt-6 p-4 rounded bg-amber-500/10 border border-amber-500/30">
🧠 Mobile parallel: this is the same relationship SwiftUI/Compose have to the platform's native view APIs — a declarative layer on top of imperative calls you could still make yourself.
</div>

---
layout: center
class: text-center
---

# 📁 `01-hello-react` — Our First Real Project

<div class="mt-3 text-sm opacity-60">same React, now with a build step</div>

---

# 🛠️ What Changed — Quick Path

```bash
npx create-react-app@latest my-app

# or, with Bun — same template, faster install
bun create react@latest my-app --yes
```

<div class="mt-2 text-sm opacity-70">
This is how <code>01-hello-react</code> itself gets scaffolded — plain React with a build step, <b>not Next.js yet</b>. We meet <code>create-next-app</code> later, once Next.js itself enters the picture.
</div>

<v-click>

- Same Create React App template either way — Bun just runs it faster, and `--yes` skips every prompt.
- `npm start` / `bun start` boots a dev server with hot reload — edit a file, see it update without a manual refresh.

</v-click>

---

# 🛠️ What Changed — More Configuration (Vite)

```bash
npm create vite@latest my-app

# or, with Bun
bun create vite@latest my-app
```

<v-click>

- A couple more prompts (template, TypeScript or not) — in exchange, a noticeably faster dev server and build than Create React App.
- `npm run dev` / `bun run dev` boots it. JSX is compiled **ahead of time** by the bundler, not by every visitor's browser.
- `src/App.tsx` is the new `<script type="text/babel">` — `.tsx` by default now that TypeScript is wired up.

</v-click>

<div v-click class="mt-4 p-4 rounded bg-amber-500/10 border border-amber-500/30">
🧠 TypeScript is on, but we're not using it yet. The next two slides are plain <code>.js</code> — no type annotations — so you can focus on <i>React</i> first. We'll meet this same pattern again, typed, right after.
</div>

---

# 🎯 What We're Building

<div class="text-sm opacity-70 mt-1 mb-8">Every row in Search Results — one real design, converted.</div>

<div class="w-[440px] mx-auto rounded-2xl bg-gray-400/5 shadow-sm p-5">
    <div class="flex items-start justify-between">
        <img src="/demo/demo_flight_card.png" />
    </div>
</div>

<div class="mt-8 text-sm opacity-60 text-center">
Just data for now — no click. The next two slides build a simplified version of exactly this kind of card — one click, one boolean, one extra line — first as a class, then as a function.
</div>

---

# 🏛️ Class Components, Take One — Plain JavaScript

```jsx
// app/page.js — our very first component, no types yet
class FlightCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }
  toggle = () => {
    this.setState({ expanded: !this.state.expanded });
  };
  render() {
    const { airline, flightNumber, priceTHB, durationMins, stops } = this.props;
    return (
      <div onClick={this.toggle}>
        <h3>{airline} {flightNumber} — ฿{priceTHB.toLocaleString()}</h3>
        {this.state.expanded && (
          <p>{durationMins} min · {stops === 0 ? 'Direct' : `${stops} stop(s)`}</p>
        )}
      </div>
    );
  }
}
// <FlightCard airline="Qoomlee" flightNumber="QM102" priceTHB={3920} durationMins={150} stops={0} />
```

<div class="mt-2 text-sm opacity-70">
Click the card and <code>this.setState</code> flips <code>expanded</code> — React re-renders, and the extra line of detail shows up. <code>this.state</code>, <code>this.setState</code>, <code>this.props</code>: that's the entire class-component vocabulary.
</div>

---

# ⚡ Same Card, as a Function

```jsx
// app/page.js — identical behavior, no class
function FlightCard({ airline, flightNumber, priceTHB, durationMins, stops }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div onClick={() => setExpanded(!expanded)}>
      <h3>{airline} {flightNumber} — ฿{priceTHB.toLocaleString()}</h3>
      {expanded && (
        <p>{durationMins} min · {stops === 0 ? 'Direct' : `${stops} stop(s)`}</p>
      )}
    </div>
  );
}
// <FlightCard airline="Qoomlee" flightNumber="QM102" priceTHB={3920} durationMins={150} stops={0} />
```

<v-click>

- `this.state = { expanded: false }` → `const [expanded, setExpanded] = useState(false)`
- `this.setState({ expanded: !this.state.expanded })` → `setExpanded(!expanded)`
- `this.props.x` → destructured straight off the function's argument

</v-click>

<div v-click class="mt-4 p-4 rounded bg-amber-500/10 border border-amber-500/30">
🧠 Still plain JavaScript — no <code>: boolean</code>, no prop types. Next we meet this exact class-to-function move again, typed, and fetching real data instead of just toggling on click.
</div>

---

# 🏛️ Class Components — How React Used to Look

```tsx {1,7-13,15-17}
// Workshop 0 demo — same shape as Heroes.tsx, reimagined for Qoomlee
export class FlightResultsClass extends React.Component<{}, FlightState> {
  constructor(props: {}) {
    super(props);
    this.state = { flights: [], isLoading: true };
  }

  componentDidMount(): void {
    fetch('/api/flights?from=BKK&to=SYD')
      .then(r => r.json())
      .then(data => this.setState({ flights: data }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    return this.state.isLoading
      ? <p>Searching flights...</p>
      : <div>{this.state.flights.map((f, i) => <FlightCard key={i} {...f} />)}</div>;
  }
}
```

<div class="mt-2 text-sm opacity-70">
Same shape as the click-to-expand card from two slides ago — <code>this.state</code>, <code>this.setState(...)</code> — now typed, and now fetching real data through a lifecycle method (<code>componentDidMount</code>) instead of just toggling on click. You'll still meet this shape in older codebases — recognize it, you don't need to write it.
</div>

---

# ⚡ Functional Components — What We Actually Write

```tsx
// Workshop 0 demo — same shape as Hero, reimagined for Qoomlee
type FlightCardProps = { id: string; airline: string; flightNumber: string; priceTHB: number };

const FlightCard = ({ airline, flightNumber, priceTHB }: FlightCardProps) => {
  return (
    <>
      <h3>{airline} {flightNumber}</h3>
      <p>BKK → SYD</p>
      <p>฿{priceTHB.toLocaleString()}</p>
    </>
  );
};
```

<v-click>

No `class`, no `extends`, no `this`, no `render()` method. A functional component **is** the render method — props come in as arguments, JSX goes out as a return value. `FlightCard` above has no state at all yet; that's next. Notice the field names — `flightNumber`, `priceTHB` — they're not arbitrary, that's the real shape we'll use for `FlightOption` later today.

</v-click>

---

# 🪝 useState + useEffect — Replacing the Class

```tsx {1,2,4-13}
// Workshop 0 demo — same shape as Heroes, reimagined for Qoomlee
export const FlightResults = () => {
  const [flights, setFlights] = useState<FlightCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/flights?from=BKK&to=SYD')
      .then(r => r.json())
      .then(data => setFlights(data))
      .finally(() => setIsLoading(false));
  }, []);   // 🔑 empty array = run once, like componentDidMount

  return isLoading
    ? <p>Searching flights...</p>
    : <div>{flights.map((f, i) => <FlightCard key={i} {...f} />)}</div>;
};
```

<div class="mt-2 text-sm opacity-70">
Same component, same behavior as <code>FlightResultsClass</code> on the previous-previous slide — <code>useState</code> replaced <code>this.state</code>, <code>useEffect(fn, [])</code> replaced <code>componentDidMount</code>. Fewer moving parts, no <code>this</code> to lose track of.
</div>

---

# 🐛 A Real Gotcha With This Pattern

```tsx {2,3,4}
// Workshop 0 demo — right below the effect on the last slide
useEffect(() => {
  console.log('FlightResults updated:xxxx');
})   // ⚠️ no dependency array at all
```

<v-click>

- `useEffect(fn, [])` — runs once, after the first render.
- `useEffect(fn, [dep])` — runs once, then again whenever `dep` changes.
- `useEffect(fn)` — **no array** — runs after *every single render*, forever.

</v-click>

<div v-click class="mt-6 p-4 rounded bg-amber-500/10 border border-amber-500/30">
🧠 This is the real second <code>useEffect</code> sitting in <code>01-hello-react/src/Heroes.tsx</code> today (named for heroes, not flights) — open it and check: the dependency array isn't a style choice, it's the difference between "once" and "every render."
</div>

---

# 🪝 useContext — Sharing Without Prop-Drilling

```tsx {1,7}
// Workshop 0 demo — a taste of what BookingContext does later, today
const CurrencyContext = createContext<'THB' | 'USD'>('THB');

const PriceTag = ({ priceTHB }: { priceTHB: number }) => {
  const currency = useContext(CurrencyContext);
  return currency === 'THB'
    ? <p>฿{priceTHB.toLocaleString()}</p>
    : <p>${(priceTHB / 35).toFixed(0)}</p>;
};
```

<div class="mt-2 text-sm opacity-70">
<code>PriceTag</code> never received <code>currency</code> as a prop — it reached up and pulled it from context. This is the exact mechanism <code>BookingContext</code> uses later to hand state to <code>/</code>, <code>/booking</code>, and <code>/payment</code> without threading it through every component in between.
</div>

---

# 🪝 useReducer — When State Pieces Move Together

```tsx
// Workshop 0 demo — the same idea as paymentReducer, on something smaller
type TravelersState = { adults: number; children: number };
type TravelersAction = { type: 'ADD_ADULT' } | { type: 'REMOVE_ADULT' } | { type: 'ADD_CHILD' };

function travelersReducer(state: TravelersState, action: TravelersAction): TravelersState {
  switch (action.type) {
    case 'ADD_ADULT': return { ...state, adults: state.adults + 1 };
    case 'REMOVE_ADULT': return { ...state, adults: Math.max(1, state.adults - 1) };
    case 'ADD_CHILD': return { ...state, children: state.children + 1 };
  }
}

const [travelers, dispatch] = useReducer(travelersReducer, { adults: 1, children: 0 });
```

<div class="mt-2 text-sm opacity-70">
Two numbers that only ever change together belong in one reducer, not two separate <code>useState</code> calls. This is the exact shape <code>paymentReducer</code> takes later — tabs, promo code, and terms, all updated through one <code>dispatch</code>.
</div>

---

# 🪝 useMemo — Don't Recompute What Hasn't Changed

```tsx {1-4}
// Workshop 0 demo — the same idea Quest 3 uses to sort real search results
const cheapestFirst = useMemo(
  () => [...flights].sort((a, b) => a.priceTHB - b.priceTHB),
  [flights]   // only re-sort when the flight list itself changes
);
```

<div class="mt-2 text-sm opacity-70">
Without <code>useMemo</code>, this sort would re-run on <i>every</i> render — including renders caused by something unrelated elsewhere on the page. The dependency array works exactly like <code>useEffect</code>'s: <code>[flights]</code> means "only redo this when <code>flights</code> changes."
</div>

---

# 🏋️ Try It Yourself — Workshop 0

<v-click>

1. Open `01-hello-react/src/Hi.tsx` — it's a class component (`this.state`, `this.setState`, `this.props`). Right above it, commented out, is a functional skeleton someone started and abandoned.
2. **Finish that functional version**: replace the class with a function that uses `useState` for `count` and `age`, matching the class's current behavior exactly (including the "Increase Count" and "Increase Age" buttons).
3. Confirm the conditional `{age > 20 && <h1>Hangman</h1>}` line still works unchanged — conditional rendering doesn't care whether the state above it came from `this.state` or `useState`.
4. **Stretch goal**: in `01-hello-react/src/Heroes.tsx`, fix the gotcha from a few slides back — give the second `useEffect` a dependency array so it only logs when `heroes.length` actually changes.

</v-click>

---

# 📋 Workshop 0 Recap

| Concept | Class component | Function + Hooks |
|---|---|---|
| Define state | `this.state = {...}` in constructor | `useState(initialValue)` |
| Update state | `this.setState(...)` | call the setter function |
| Run on mount | `componentDidMount()` | `useEffect(fn, [])` |
| Run on every render | `componentDidUpdate()` (manual diffing) | `useEffect(fn)` — no array |
| Read props | `this.props.x` | destructure the function's arguments |
| Component *is* | a class with a `render()` method | a function that returns JSX |

---

# 📋 Workshop 0 Recap (continued)

| Concept | Class component | Function + Hooks |
|---|---|---|
| Share without prop-drilling | pass props down every level | `useContext(SomeContext)` |
| A few state pieces, one update | several `this.setState` calls | `useReducer(reducer, initial)` |
| Avoid recomputing | manual memoization (rare, fiddly) | `useMemo(fn, [deps])` |

<div class="mt-6 text-sm opacity-70">
Everything from here on — including all six Qoomlee screens — is functional components and hooks. You've now seen every hook this course actually uses, in miniature, before meeting any of them for real.
</div>

---

# 💻 Tech Stack

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
  <carbon:application-web class="text-2xl text-blue-500" />
  <div class="font-semibold mt-2">Framework</div>
  <div class="text-sm opacity-70">Next.js 15 · App Router · static export</div>
</div>

<div class="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
  <carbon:color-palette class="text-2xl text-blue-500" />
  <div class="font-semibold mt-2">Language & Style</div>
  <div class="text-sm opacity-70">TypeScript · Tailwind CSS · design tokens</div>
</div>

<div class="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
  <carbon:cube class="text-2xl text-blue-500" />
  <div class="font-semibold mt-2">Icons</div>
  <div class="text-sm opacity-70">Material Symbols Outlined</div>
</div>

<div class="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
  <carbon:data-base class="text-2xl text-blue-500" />
  <div class="font-semibold mt-2">State</div>
  <div class="text-sm opacity-70"><code>useState</code> / <code>useReducer</code> locally, <code>Context</code> shared across routes</div>
</div>

<div class="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
  <carbon:package class="text-2xl text-blue-500" />
  <div class="font-semibold mt-2">Tooling</div>
  <div class="text-sm opacity-70">Bun runtime · Turbopack (build) · Vite (this deck)</div>
</div>

<div class="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
  <carbon:rocket class="text-2xl text-blue-500" />
  <div class="font-semibold mt-2">Deployment</div>
  <div class="text-sm opacity-70"><code>/out</code> → S3, Nginx, Netlify, Vercel — any static host</div>
</div>

</div>

<div class="mt-6 text-sm opacity-70 text-center">
Notice what's <b>not</b> on this list: no database driver, no session store, no Node server in production.
</div>

---
layout: center
---

# ⚠️ The Constraint That Shapes Everything

<v-click>

> "My company deploys the web app as **static files**."

</v-click>

<v-click>

That one sentence rules out:

- ❌ Server Actions (`"use server"`) — there's no server at request time.
- ❌ Middleware (`middleware.ts`) — nothing intercepts requests, there's no edge runtime.
- ❌ Server Components that fetch *per-request* data — they only run once, at `next build` time.
- ❌ `cookies()` / server sessions — no server to read a cookie.

</v-click>

<v-click>

Everything we build today has to work as **plain HTML + CSS + JS sitting in a folder**. That's the whole course.

</v-click>

---

# 📐 Three Routes, Not Six — and Not One

Next.js can give every screen its own route — `app/search/page.tsx`, `app/dates/page.tsx`, `app/results/page.tsx`... six routes for six screens. It can also do the opposite: one route, six components swapped by a reducer.

**We're landing in between: one route per *phase* of the journey.**

<div class="grid grid-cols-2 gap-6 mt-6">
<div>

### Six routes — too granular
```
app/
  search/page.tsx
  dates/page.tsx
  results/page.tsx
  booking/page.tsx
  payment/page.tsx
  confirmation/page.tsx
```
Search → Dates → Results is really *one task*. It shouldn't fight for a URL on every tap.

</div>
<div v-click>

### What we're building
```
app/
  layout.tsx     ← BookingProvider (shared state)
  page.tsx        ← "/" — Search → Dates → Results
  booking/
    page.tsx       ← "/booking" — Passenger Details
  payment/
    page.tsx       ← "/payment" — Payment → Confirmation
```
Each route owns a cluster of related screens via local state.

</div>
</div>

---

# 🤔 Why Three Routes (Not Six, Not One)?

<v-click>

- **Real URLs without six of them** — `/`, `/booking`, `/payment` are bookmarkable, and the browser back button works the way users expect from "search → confirm → pay."
- **State still flows forward** — search criteria, the selected flight, passenger info all live in one `BookingProvider` (`Context`), not duplicated per route or refetched.
- **Navigation stays soft** — we move between routes with `<Link>` / `router.push()`, which Next.js runs as a client-side transition. No full reload, no flash of blank page — it still *feels* like one app.
- **Each route ships only its own code** — the `/` bundle doesn't carry the payment form, and `/payment` doesn't carry the calendar. Six components in one bundle can't do that.
- **It still deploys as static files** — three routes just means three more pre-rendered HTML files sitting in `/out`. Nothing about this needs a server.

</v-click>

<div v-click class="mt-6 p-4 rounded bg-blue-500/10 border border-blue-500/30">
💡 "Single page" and "no full reloads" aren't the same thing. We're giving up <i>one route</i>, not the smooth, app-like feel.
</div>

---

# 🏗️ `next.config.js` — Turning On Static Export

```js {2,3,7}
// next.config.js
const nextConfig = {
  output: 'export',          // ← emit plain HTML/CSS/JS into /out, no Node server needed
  trailingSlash: true,       // ← every route becomes /path/index.html (avoids 404s on static hosts)
  images: {
    unoptimized: true,       // ← next/image's optimizer needs a server; we don't have one
  },
};

module.exports = nextConfig;
```

<v-click>

- `next build` now produces a static `/out` folder — open `out/index.html` directly in a browser and it works, no server required.
- We have **three routes** now (`/`, `/booking`, `/payment`), so `trailingSlash: true` actually matters this time: it's what makes each one export as `out/booking/index.html` instead of `out/booking.html` — the shape every static host (S3, Nginx, Netlify) expects when someone requests `/booking/`.

</v-click>

---

# 🧱 Our Domain Model

These types appear in almost every code sample today — write them once, reuse forever.

```ts
// types/booking.ts
export type CabinClass = 'economy' | 'business';
export type TripType = 'roundtrip' | 'oneway';

export type SearchCriteria = {
  tripType: TripType;
  from: string;
  to: string;
  departDate: string;   // ISO date, e.g. "2024-10-24"
  returnDate?: string;
  travelers: number;
  cabinClass: CabinClass;
};
```

---

# 🧱 Our Domain Model (continued)

What a search result looks like once it comes back.

```ts
export type FlightOption = {
  id: string;
  airline: string;
  flightNumber: string;       // e.g. "QQ101"
  from: string;
  to: string;
  departTime: string;         // "08:00"
  arriveTime: string;         // "16:30"
  durationMins: number;
  stops: 0 | 1 | 2;
  layover?: string;           // "2h layover KUL"
  priceTHB: number;
  badge?: 'best-value';
};
```

---

# 🧱 Our Domain Model (continued)

What we collect on the way to payment.

```ts
export type Passenger = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export type PaymentMethod = 'card' | 'promptpay' | 'bank' | 'other';

export type BookingDraft = {
  flight: FlightOption;
  passenger: Passenger;
  upgradeToBusiness: boolean;
  insurance: boolean;
  promoCode?: string;
  promoDiscountTHB: number;
};
```

---

# 🧱 Our Domain Model (continued)

What we're left holding after a successful payment.

```ts
export type ConfirmedBooking = BookingDraft & {
  pnr: string;          // "QM92Z4"
  seat: string;          // "14A"
  totalPaidTHB: number;
};
```

<div class="mt-4 text-sm opacity-70">
One note from the design handoff: the original mockups mixed ฿ and $ across screens, and one screen used flight number <code>QM-204</code> instead of <code>QQ101</code>. Real design files are messy like this — we standardize on <b>Thai Baht</b> and <b>one flight number</b> the moment we write code. That's a real part of the job.
</div>

---

# 🎨 Design Tokens → Tailwind Config

The design team didn't hand us colors like `blue-500`. They handed us **semantic tokens**: `primary`, `surface-container-lowest`, `on-primary-container`. These map directly into `tailwind.config.ts`.

```ts {4-13,16-19}
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: '#0057a2',
        'primary-container': '#0e70ca',
        'on-primary-container': '#f0f4ff',
        secondary: '#465f84',
        surface: '#f8f9ff',
        'surface-container': '#e5eeff',
        'surface-container-lowest': '#ffffff',
        'on-surface-variant': '#414752',
        outline: '#717783',
        'outline-variant': '#c1c6d4',
        error: '#ba1a1a',
      },
      spacing: { xs: '4px', sm: '8px', md: '16px', lg: '24px', xl: '32px', xxl: '48px' },
      borderRadius: { DEFAULT: '0.25rem', lg: '0.5rem', xl: '0.75rem', full: '9999px' },
    },
  },
};
```

<div class="mt-2 text-sm opacity-70">
Same tokens, every screen. Set it up once here — every component we write today uses these exact class names.
</div>

---

# 🔤 Icons & Fonts — Static-Export Friendly

```tsx
// app/layout.tsx
import { Inter } from 'next/font/google';   // ✅ resolved at BUILD time — static-export safe

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Material Symbols is not in next/font's catalog — a plain <link> works fine, it's just a static asset */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-surface text-on-surface">{children}</body>
    </html>
  );
}
```

---

# 🔤 Icons & Fonts (continued)

The custom wrapper around Material Symbols:

```tsx
// components/Icon.tsx
export function Icon({ name, filled = false, className = '' }: { name: string; filled?: boolean; className?: string }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{ fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' 24` }}
    >
      {name}
    </span>
  );
}
```

<div class="mt-2 text-sm opacity-70">
💡 <code>next/font</code> downloads &amp; self-hosts fonts at build time — fully static-export safe. It's <code>next/image</code>'s runtime optimizer that needs a server, not <code>next/font</code>. (The provider that shares state across our three routes wraps <code>{children}</code> right here too — next up.)
</div>

---

# 🧩 Sharing State Across Routes — `BookingContext`

Three routes need *one* source of truth for search criteria, the selected flight, and the booking draft. A React Context, mounted once, survives every soft navigation between them.

```tsx
// lib/booking-context.tsx
'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import type { SearchCriteria, FlightOption, BookingDraft } from '@/types/booking';

type BookingState = { search?: SearchCriteria; selectedFlight?: FlightOption; booking?: BookingDraft };

const BookingContext = createContext<{ state: BookingState; setState: (s: BookingState) => void } | null>(null);
```

---

# 🧩 Sharing State Across Routes (continued)

The provider — read on mount, persist on every change:

```tsx
export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<BookingState>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem('qoomlee-booking');   // rehydrate — no server session to fall back on
    if (saved) setState(JSON.parse(saved));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) sessionStorage.setItem('qoomlee-booking', JSON.stringify(state));
  }, [state, hydrated]);

  return <BookingContext.Provider value={{ state, setState }}>{children}</BookingContext.Provider>;
}
```

---

# 🧩 Sharing State Across Routes (continued)

The hook every component actually calls:

```tsx
export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used inside <BookingProvider>');
  return ctx;
}
```

<div class="mt-2 text-sm opacity-70">
One Provider, mounted once in <code>app/layout.tsx</code>, outlives every <code>router.push()</code> between our three routes. <code>sessionStorage</code> is the safety net for a hard refresh or a pasted-in URL.
</div>

---

# 📄 `layout.tsx` — The Shell Every Route Shares

<v-click>

A `layout.tsx` wraps every `page.tsx` inside its folder — and it **does not re-render** on navigation between them. Mount something here once, and it survives every `router.push()` underneath it.

</v-click>

<v-click>

- **The root `app/layout.tsx` is required** — it's the only file that renders `<html>` and `<body>`, for every route in the app.
- A layout persists across navigation *within its segment* — exactly the property `BookingContext` needs to survive `/` → `/booking` → `/payment`.
- It's a Server Component by default — like everything else in this course, it runs once at `next build` and ships as static markup. **Static export doesn't change anything about how `layout.tsx` works.**

</v-click>

<div v-click class="mt-6 p-4 rounded bg-blue-500/10 border border-blue-500/30">
💡 You've actually already used this — the next slide just names what <code>app/layout.tsx</code> was already doing for <code>BookingProvider</code>.
</div>

---

# 🧩 Wiring the Provider

```tsx
// app/layout.tsx
import { BookingProvider } from '@/lib/booking-context';
// ...next/font + Material Symbols <link>, same as before...

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-surface text-on-surface">
        <BookingProvider>{children}</BookingProvider>
      </body>
    </html>
  );
}
```

<div class="mt-2 text-sm opacity-70">
One Provider, mounted once in <code>app/layout.tsx</code>, wraps every route. Whichever page renders, <code>useBooking()</code> sees the same state.
</div>

---

# 🧩 Moving Between Routes

```tsx {7-10,12-13}
// app/booking/page.tsx
'use client';
import { useRouter } from 'next/navigation';
import { useBooking } from '@/lib/booking-context';
import { BookingForm } from '@/components/Booking/BookingForm';

export default function BookingPage() {
  const router = useRouter();
  const { state, setState } = useBooking();

  if (!state.selectedFlight) {
    router.replace('/');               // landed here with no flight picked — bounce home
    return null;
  }

  function handleContinue(booking: BookingDraft) {
    setState({ ...state, booking });
    router.push('/payment');            // a real navigation — Next.js still runs it client-side
  }

  return <BookingForm flight={state.selectedFlight} onContinue={handleContinue} />;
}
```

<div class="mt-2 text-sm opacity-70">
Moving between routes is now <code>router.push()</code> instead of <code>dispatch({ type: 'NEXT_STEP' })</code> — same mental model, real URL. The guard at the top is new: unlike a single-page wizard, someone <i>can</i> land directly on <code>/booking</code> without having searched first.
</div>

---

# 📄 `loading.tsx` — Automatic Loading UI (Static-Export Edition)

<v-click>

Drop a `loading.tsx` next to any `page.tsx` and Next.js wraps that route in a `<Suspense>` boundary automatically — no JSX changes to the page itself.

</v-click>

```tsx
// app/booking/loading.tsx
export default function Loading() {
  return <div className="p-10 text-center text-sm opacity-60">Loading your booking…</div>;
}
```

<v-click>

**The catch, specific to static export:** our pages are plain Client Components, prerendered once at build time — there's no per-request server work for `loading.tsx` to mask. What it *actually* covers is the brief moment Next.js fetches the next route's prebuilt HTML/JS chunk during `router.push()`.

</v-click>

<v-click>

It does **not** cover the `useEffect` fetch inside Search Results (Quest 3) — that fetch starts *after* the route has already loaded. That's still a hand-rolled `isLoading` state, same as today.

</v-click>

<div v-click class="mt-4 p-4 rounded bg-blue-500/10 border border-blue-500/30">
💡 Add one to each of <code>/</code>, <code>/booking</code>, <code>/payment</code> — free, on by default, worth the five minutes. Just don't expect it to replace the loading state you already wrote.
</div>

---
layout: section
---

# 📦 Workshop 1
## Thinking in React, the Qoomlee Way

### Quest 1: Flight Search · Quest 2: Select Dates

---
layout: center
class: text-center
---

# 🔍 Quest 1 · Flight Search

<div class="flex items-end justify-center gap-6">
  <img src="/screens/01_desktop_flight_search.png" class="h-105 rounded-2xl shadow-2xl border border-gray-200" />
  <img src="/screens/01_mobile_flight_search.png" class="h-105 rounded-2xl shadow-2xl border border-gray-200" />
</div>

<div class="mt-3 text-sm opacity-60">design source: ui/01-flight-search · live app, desktop + mobile</div>

---

# 🎯 What Are We Building?

Look at the screen again. Strip away the visuals — what is the user actually *doing* here?

<v-click>

- Pick **one-way or round-trip** (a toggle — two mutually exclusive states).
- Type a **From** and **To** city, and **swap** them with one tap.
- Pick **dates** (we'll build the actual calendar in Quest 2 — for now it's just a tappable field).
- Pick **travelers & class**.
- Tap **Search Flights** to move to the next screen.
- Below the fold: a **Popular Destinations** grid — purely informational, no state needed.

</v-click>

<v-click>

This is **5 pieces of state living in one component**, plus a button that hands all of it off to the next step. Nothing here needs a server.

</v-click>

---

# 🛠️ How To Do It — Local State First

```tsx {3-8,17-19}
// components/steps/SearchStep.tsx
'use client';
import { useState } from 'react';
import type { SearchCriteria, TripType } from '@/types/booking';

export function SearchStep({ dispatch }: { dispatch: (a: any) => void }) {
  const [tripType, setTripType] = useState<TripType>('roundtrip');
  const [from, setFrom] = useState('BKK');
  const [to, setTo] = useState('SYD');
  const [travelers, setTravelers] = useState(1);

  function swapCities() {
    setFrom(to);
    setTo(from);
  }

  function handleSearch() {
    const criteria: SearchCriteria = { tripType, from, to, departDate: '', travelers, cabinClass: 'economy' };
    dispatch({ type: 'SET_SEARCH', payload: criteria });
  }

  return (
    <main className="max-w-md mx-auto px-md pb-xxl">
      <TripTypeToggle value={tripType} onChange={setTripType} />
      <CityInputs from={from} to={to} onSwap={swapCities} onChangeFrom={setFrom} onChangeTo={setTo} />
      <button onClick={handleSearch} className="w-full bg-primary text-white rounded-xl py-md mt-lg">
        Search Flights
      </button>
    </main>
  );
}
```

<div class="mt-2 text-sm opacity-70">
💡 This <code>dispatch</code> is local to the search phase — owned by <code>app/page.tsx</code>, never leaves the <code>/</code> route. We'll meet the <i>cross-route</i> state (<code>BookingContext</code>) once Results hands off to <code>/booking</code>.
</div>

---

# 🛠️ Converting the Design — The Swap Button

The mockup's HTML (`class=`) becomes React's `className=` — and the static `swap_vert` icon click becomes a real event handler.

```tsx
// components/SearchForm/CityInputs.tsx
import { Icon } from '@/components/Icon';

type Props = {
  from: string; to: string;
  onSwap: () => void;
  onChangeFrom: (v: string) => void; onChangeTo: (v: string) => void;
};
```

---

# 🛠️ Converting the Design — The Swap Button (continued)

```tsx
export function CityInputs({ from, to, onSwap, onChangeFrom, onChangeTo }: Props) {
  return (
    <div className="relative bg-surface-container-lowest border border-outline-variant rounded-xl p-md">
      <input value={from} onChange={(e) => onChangeFrom(e.target.value)}
        className="w-full bg-transparent border-b border-outline-variant py-sm" placeholder="From" />
      <input value={to} onChange={(e) => onChangeTo(e.target.value)}
        className="w-full bg-transparent py-sm" placeholder="To" />
      <button onClick={onSwap} aria-label="Swap cities"
        className="absolute right-md top-1/2 -translate-y-1/2 bg-surface-container-lowest border border-outline-variant rounded-full p-sm">
        <Icon name="swap_vert" className="text-primary" />
      </button>
    </div>
  );
}
```

---

# 🏋️ Try It Yourself — Workshop 1.1

<v-click>

1. Build `TripTypeToggle` — two buttons (`Round trip` / `One way`), active one gets `bg-primary text-white`, inactive gets `bg-surface-container text-on-surface-variant`. It's a **controlled component**: the parent owns the state, the toggle just renders it and calls `onChange`.
2. Wire up `swapCities` — confirm From/To actually swap (not just look like they did).
3. **Stretch goal**: add a `travelers` stepper (`-` / `+` buttons, clamp between 1 and 9).
4. Render the **Popular Destinations** grid from a plain array of `{ city, price, image }` objects — no state needed, just `.map()`.

</v-click>

<div v-click class="mt-6 p-4 rounded bg-amber-500/10 border border-amber-500/30">
🧠 Notice: nothing above touched <code>fetch</code>, a database, or a server. That's the whole point of "thinking in React" — UI is just state + the functions that change it.
</div>

---
layout: center
class: text-center
---

# 📅 Quest 2 · Select Dates

<div class="flex items-end justify-center gap-6">
  <img src="/screens/01_desktop_flight_search.png" class="h-105 rounded-2xl shadow-2xl border border-gray-200" />
  <img src="/screens/01_mobile_flight_search.png" class="h-105 rounded-2xl shadow-2xl border border-gray-200" />
</div>

<div class="mt-3 text-sm opacity-60">design source: ui/02-flight-select-dates — in the shipped app, this calendar opens inline from the date field above; there's no separate full-page screen to capture</div>

---

# 🎯 What Are We Building?

<v-click>

- A **calendar grid** for the current month (and the next), each day a tappable cell.
- A **range selection**: first tap sets the departure date, second tap (if later) sets the return date — everything in between gets highlighted.
- A **sticky bottom bar** summarizing the selected range with a "Confirm" button.

</v-click>

<v-click>

The interesting problem: **how do you model "a range with a start, an end, and everything in between" as state** — and re-render the right cells without looping through the DOM (the old vanilla-JS mockup did exactly that, with `document.querySelectorAll`. We won't).

</v-click>

---

# 🛠️ How To Do It — Modeling a Date Range

```tsx
// components/steps/DatesStep.tsx
'use client';
import { useState } from 'react';

type Range = { start: string | null; end: string | null };

function pickDate(range: Range, isoDate: string): Range {
  if (!range.start || (range.start && range.end)) {
    return { start: isoDate, end: null };          // start a fresh range
  }
  if (isoDate < range.start) {
    return { start: isoDate, end: range.start };    // tapped an earlier date — swap
  }
  return { start: range.start, end: isoDate };       // complete the range
}
```

<div class="mt-2 text-sm opacity-70">
All the logic lives in one pure function, <code>pickDate</code> — easy to unit test, no DOM querying required.
</div>

---

# 🛠️ How To Do It — Modeling a Date Range (continued)

The component that wires `pickDate` into state:

```tsx
export function DatesStep({ dispatch }: { dispatch: (a: any) => void }) {
  const [range, setRange] = useState<Range>({ start: null, end: null });

  return (
    <CalendarGrid
      range={range}
      onPickDate={(isoDate) => setRange((r) => pickDate(r, isoDate))}
    />
  );
}
```

---

# 🛠️ Converting the Design — Day Cells

```tsx {10-13}
// components/Calendar/DayCell.tsx
type Props = { isoDate: string; day: number; range: { start: string | null; end: string | null }; onPick: () => void };

export function DayCell({ isoDate, day, range, onPick }: Props) {
  const isStart = isoDate === range.start;
  const isEnd = isoDate === range.end;
  const inRange = !!range.start && !!range.end && isoDate > range.start && isoDate < range.end;

  return (
    <button
      onClick={onPick}
      className={[
        'h-10 w-10 rounded-full flex items-center justify-center text-sm transition-colors',
        isStart || isEnd ? 'bg-primary text-white' : '',
        inRange ? 'bg-primary-container/20 text-primary' : '',
        !isStart && !isEnd && !inRange ? 'hover:bg-surface-container' : '',
      ].join(' ')}
    >
      {day}
    </button>
  );
}
```

<div class="mt-2 text-sm opacity-70">
The mockup did this with three separate CSS classes (<code>.range-start</code>, <code>.range-end</code>, <code>.in-range</code>) toggled by hand. In React, it's just <b>derived booleans from props</b> — no class list to keep in sync manually.
</div>

---

# 🏋️ Try It Yourself — Workshop 1.2

<v-click>

1. Write a helper `getMonthDays(year, month)` that returns an array of ISO date strings for every day in that month (use plain `Date`, no library needed yet).
2. Render the grid with `DayCell`, wiring `onPick` to call `setRange`.
3. Build the **sticky bottom bar**: show `range.start` and `range.end` (or placeholders if not picked yet), disable "Confirm" until both are set.
4. On Confirm, `dispatch({ type: 'SET_DATES', payload: range })` and move the wizard to `'results'`.

</v-click>

<div v-click class="mt-6 p-4 rounded bg-blue-500/10 border border-blue-500/30">
🧠 Stretch goal: support tapping a date <i>before</i> the current start to restart the range, exactly like real flight-booking calendars do.
</div>

---

# 📋 Workshop 1 Recap

| Concept | Where we used it |
|---|---|
| `useState` for primitive & object state | trip type, cities, date range |
| Controlled components | `TripTypeToggle`, city inputs |
| Derived boolean state (no extra state needed) | `isStart`, `isEnd`, `inRange` |
| Pure helper functions | `pickDate`, `getMonthDays` |
| Lifting state up via props | parent owns state, children call `onChange`/`onPick` |

<div class="mt-6 text-sm opacity-70">
Notice: zero <code>useEffect</code>, zero <code>fetch</code> so far. Workshop 2 is where data enters the picture.
</div>

---
layout: section
---

# 📦 Workshop 2
## Fetching & Shaping Data — Client-Side, Because No Server

### Quest 3: Search Results — the first stop that leaves "/"

---
layout: center
class: text-center
---

# 📋 Quest 3 · Search Results

<div class="flex items-end justify-center gap-6">
  <img src="/screens/02_desktop_flight_search_result.png" class="h-105 rounded-2xl shadow-2xl border border-gray-200" />
  <img src="/screens/02_mobile_flight_search_result.png" class="h-105 rounded-2xl shadow-2xl border border-gray-200" />
</div>

<div class="mt-3 text-sm opacity-60">design source: ui/03-flight-search-result · live app, desktop + mobile</div>

---

# 🎯 What Are We Building?

<v-click>

- A list of **flight result cards** (airline, times, duration, stops, price, a "Best Value" badge).
- **Sticky filter chips** (Best / Price / Stops / Departure / Duration / Airlines) — tapping one re-sorts the list.
- A **"Show 20 more results"** button — classic pagination.
- A **loading state** while results "load" — the search criteria from Quest 1 has to actually go fetch something.

</v-click>

---

# 🤔 Where Does the Data Come From?

<v-click>

This is the moment that would normally make a Next.js course reach for an `async` Server Component:

```tsx
// ❌ This is what a server-rendered Next.js app would do —
// it does NOT work with output: 'export', because there's no
// server running at request time to execute this fetch per search.
export default async function ResultsPage() {
  const flights = await fetch('https://api.qoomlee.com/search').then(r => r.json());
  return <FlightList flights={flights} />;
}
```

</v-click>

<v-click>

Static export only runs Server Components **once, at `next build` time** — long before any user has typed a search. Since the search criteria is only known *in the browser*, the fetch has to happen **in the browser** too.

</v-click>

---

# 🛠️ How To Do It — Client-Side Fetch with `useEffect`

```tsx {7-15}
// components/steps/ResultsStep.tsx
'use client';
import { useEffect, useState } from 'react';
import type { FlightOption, SearchCriteria } from '@/types/booking';
import { searchFlights } from '@/lib/mock-api';

export function ResultsStep({ state, dispatch }: { state: { search: SearchCriteria }; dispatch: (a: any) => void }) {
  const [flights, setFlights] = useState<FlightOption[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    searchFlights(state.search).then((results) => {
      if (!cancelled) setFlights(results);
    });
    return () => { cancelled = true; };   // avoid setting state after unmount
  }, [state.search]);

  if (flights === null) return <ResultsSkeleton />;
  return <FlightResultsList flights={flights} dispatch={dispatch} />;
}
```

<div class="mt-2 text-sm opacity-70">
<code>searchFlights</code> can call a real HTTP API <i>or</i> resolve from an in-memory mock — the component doesn't care. That's the same shape you'd use to call any third-party REST API from a static SPA.
</div>

---

# 🛠️ The Mock API (Stand-In for a Real Backend)

```ts
// lib/mock-api.ts
import type { FlightOption, SearchCriteria } from '@/types/booking';

const ALL_FLIGHTS: FlightOption[] = [
  { id: '1', airline: 'Qoomlee', flightNumber: 'QQ101', from: 'BKK', to: 'SYD',
    departTime: '08:00', arriveTime: '16:30', durationMins: 510, stops: 0,
    priceTHB: 8450, badge: 'best-value' },
  { id: '2', airline: 'SkyLink', flightNumber: 'SL302', from: 'BKK', to: 'SYD',
    departTime: '10:15', arriveTime: '21:45', durationMins: 690, stops: 1,
    layover: '2h layover KUL', priceTHB: 7200 },
];

export function searchFlights(criteria: SearchCriteria): Promise<FlightOption[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(ALL_FLIGHTS), 600);   // simulate real network latency
  });
}
```

<div class="mt-2 text-sm opacity-70">
Swap the body of <code>searchFlights</code> for a real <code>fetch(...)</code> later — every component above stays unchanged. That boundary is the whole reason we isolated it into <code>lib/mock-api.ts</code>.
</div>

---

# 🛠️ Sorting Without Extra State — `useMemo`

```tsx {6}
// components/steps/ResultsStep.tsx (continued)
import { useMemo, useState } from 'react';

type SortKey = 'best' | 'price' | 'stops';

const [sortKey, setSortKey] = useState<SortKey>('best');

const sorted = useMemo(() => {
  if (!flights) return [];
  const copy = [...flights];
  if (sortKey === 'price') copy.sort((a, b) => a.priceTHB - b.priceTHB);
  if (sortKey === 'stops') copy.sort((a, b) => a.stops - b.stops);
  return copy;   // 'best' = keep server-given order
}, [flights, sortKey]);
```

<div class="mt-2 text-sm opacity-70">
<code>sortKey</code> is the only state we need — the sorted list is <b>derived</b>, not stored separately. Storing both would let them drift out of sync; deriving one from the other can't.
</div>

---

# 🏋️ Try It Yourself — Workshop 2

<v-click>

1. Build `FlightResultCard` — convert the mockup's card markup (airline, times, `8h 30m · Non-stop`, price, "Select →" button) into a component that takes one `FlightOption` as a prop.
2. Build the **filter chips row** — buttons for Best/Price/Stops, active chip styled with `bg-primary text-white`. Wire each to `setSortKey`.
3. Build `ResultsSkeleton` — three pulsing gray placeholder cards shown while `flights === null`.
4. Implement **pagination**: show the first 3 results, "Show 20 more results" reveals the rest (`useState<number>` for how many are visible, `.slice(0, visibleCount)`).
5. On "Select →", commit `search` and the chosen flight into `useBooking()`'s shared state, then `router.push('/booking')` — the first time in the course a screen transition is a real route change, not a local one.

</v-click>

---
layout: section
---

# 📦 Workshop 3
## Forms, Derived State & Live Pricing

### Quest 4: Booking & Passenger Details — now its own route, `/booking`

---
layout: center
class: text-center
---

# 🧾 Quest 4 · Booking Details

<div class="flex items-end justify-center gap-6">
  <img src="/screens/03_desktop_booking.png" class="h-105 rounded-2xl shadow-2xl border border-gray-200" />
  <img src="/screens/03_mobile_booking.png" class="h-105 rounded-2xl shadow-2xl border border-gray-200" />
</div>

<div class="mt-3 text-sm opacity-60">design source: ui/04-booking-flight · live app, desktop + mobile</div>

---

# 🎯 What Are We Building?

<v-click>

- A **flight summary** recap card — read-only, just rendering data we already have from Quest 3.
- A **passenger details form** — First Name, Last Name, Email, Phone — all controlled inputs.
- A **payment summary** that computes a live total — base fare + taxes, plus an "Upgrade to Business" upsell that adds ฿299× to the total when toggled on.
- A **"Continue to Payment"** button that should be disabled until the form is actually valid.

</v-click>

<v-click>

The new idea here: **the total isn't typed in anywhere — it's calculated from other state.**

</v-click>

---

# 🛠️ How To Do It — A Form with Derived Total

```tsx {16-19}
// components/steps/BookingStep.tsx
'use client';
import { useState } from 'react';
import type { FlightOption, Passenger } from '@/types/booking';

const BASE_FARE = 8450;
const TAXES = 1250;
const BUSINESS_UPGRADE = 2990;

type BookingPayload = { passenger: Passenger; upgradeToBusiness: boolean; total: number };

export function BookingStep({ state, onContinue }: { state: { selectedFlight: FlightOption }; onContinue: (payload: BookingPayload) => void }) {
  const [passenger, setPassenger] = useState<Passenger>({ firstName: '', lastName: '', email: '', phone: '' });
  const [upgradeToBusiness, setUpgradeToBusiness] = useState(false);

  const isValid =
    passenger.firstName.trim() !== '' &&
    passenger.lastName.trim() !== '' &&
    /\S+@\S+\.\S+/.test(passenger.email);

  const total = BASE_FARE + TAXES + (upgradeToBusiness ? BUSINESS_UPGRADE : 0);

  function handleContinue() {
    onContinue({ passenger, upgradeToBusiness, total });
  }

  return (
    <main className="max-w-md mx-auto px-md pb-xxl">
      <PassengerForm value={passenger} onChange={setPassenger} />
      <PriceSummary total={total} upgradeToBusiness={upgradeToBusiness} onToggleUpgrade={setUpgradeToBusiness} />
      <button disabled={!isValid} onClick={handleContinue}
        className="w-full bg-primary disabled:bg-outline-variant text-white rounded-xl py-md mt-lg">
        Continue to Payment
      </button>
    </main>
  );
}
```

<div class="mt-2 text-sm opacity-70">
<code>onContinue</code> is supplied by <code>app/booking/page.tsx</code> (see the routing section) — it commits to <code>BookingContext</code> and calls <code>router.push('/payment')</code>. <code>BookingStep</code> itself doesn't know routing exists.
</div>

---

# 🛠️ Converting the Design — One Controlled Form

A common beginner mistake: four separate `useState` calls for First Name, Last Name, Email, Phone. One object is easier to pass around and validate.

```tsx
// components/Booking/PassengerForm.tsx
import type { Passenger } from '@/types/booking';

type Props = { value: Passenger; onChange: (p: Passenger) => void };

export function PassengerForm({ value, onChange }: Props) {
  function update<K extends keyof Passenger>(key: K, val: Passenger[K]) {
    onChange({ ...value, [key]: val });
  }

  // ...JSX continued next slide
```

<div class="mt-2 text-sm opacity-70">
One <code>update()</code> helper handles every field via a spread — adding a 5th field later means zero new state, zero new handlers.
</div>

---

# 🛠️ Converting the Design — One Controlled Form (continued)

```tsx
  return (
    <div className="space-y-md">
      <div className="grid grid-cols-2 gap-md">
        <input value={value.firstName} onChange={(e) => update('firstName', e.target.value)}
          placeholder="First Name" className="border border-outline-variant rounded-xl px-md py-md" />
        <input value={value.lastName} onChange={(e) => update('lastName', e.target.value)}
          placeholder="Last Name" className="border border-outline-variant rounded-xl px-md py-md" />
      </div>
      <input value={value.email} onChange={(e) => update('email', e.target.value)} type="email"
        placeholder="Email Address" className="w-full border border-outline-variant rounded-xl px-md py-md" />
    </div>
  );
}
```

---

# 🛠️ Converting the Design — The Upsell Toggle

```tsx
// components/Booking/PriceSummary.tsx
type Props = { total: number; upgradeToBusiness: boolean; onToggleUpgrade: (v: boolean) => void };

export function PriceSummary({ total, upgradeToBusiness, onToggleUpgrade }: Props) {
  return (
    <div className="bg-surface-container border border-outline-variant rounded-xl p-lg mt-lg">
      <div className="flex justify-between"><span>Base Fare</span><span>฿8,450.00</span></div>
      <div className="flex justify-between"><span>Taxes &amp; Fees</span><span>฿1,250.00</span></div>
      <button
        onClick={() => onToggleUpgrade(!upgradeToBusiness)}
        className={`mt-md w-full flex justify-between items-center p-md rounded-xl border ${upgradeToBusiness ? 'bg-tertiary-fixed border-tertiary' : 'bg-surface-container-lowest border-outline-variant'}`}
      >
        <span>Upgrade to Business — Lounge access &amp; more</span>
        <span>+฿2,990</span>
      </button>
      <div className="flex justify-between mt-lg font-bold text-primary text-headline-md">
        <span>Total Amount</span><span>฿{total.toLocaleString()}.00</span>
      </div>
    </div>
  );
}
```

---

# 🏋️ Try It Yourself — Workshop 3

<v-click>

1. Wire the **flight summary recap** card to render `state.selectedFlight` from Quest 3's selection — no new state, just props.
2. Add **phone number** to `PassengerForm` (it needs a country-code `<select>` + a text input — model it as one string in the `Passenger` object).
3. Make `isValid` actually check the **phone** field too (e.g. at least 9 digits).
4. **Stretch goal**: show an inline error message under the Email field only after the user has typed *something* and it's invalid — research the "touched" state pattern for forms.

</v-click>

<div v-click class="mt-6 p-4 rounded bg-amber-500/10 border border-amber-500/30">
🧠 This entire screen — form + live price calculation + validation — runs with three <code>useState</code> calls and zero libraries. You don't need a form library until forms get genuinely complex.
</div>

---
layout: section
---

# 📦 Workshop 4
## Multi-Step State, Timers & Effects

### Quest 5: Secure Payment — now its own route, `/payment`

---
layout: center
class: text-center
---

# 💳 Quest 5 · Secure Payment

<div class="flex items-end justify-center gap-6">
  <img src="/screens/04_desktop_payment.png" class="h-105 rounded-2xl shadow-2xl border border-gray-200" />
  <img src="/screens/04_mobile_payment.png" class="h-105 rounded-2xl shadow-2xl border border-gray-200" />
</div>

<div class="mt-3 text-sm opacity-60">design source: ui/05-secure-payment · live app, desktop + mobile</div>

---

# 🎯 What Are We Building?

<v-click>

- A **4-step progress stepper** (Flights ✓ → Seats ✓ → Extras ✓ → Payment) — purely visual, but it has to reflect real state.
- A **booking summary** with a live **countdown timer** ("14:32" — the price hold expires).
- A **promo code** field that, when valid, discounts the total.
- **Payment method tabs** (Card / PromptPay / Bank / Other) — only one tab's form is visible at a time.
- A **"Pay ฿X Securely"** button, disabled until Terms are accepted.

</v-click>

<v-click>

Three new ideas land on this one screen: a **timer that ticks on its own** (`useEffect` + `setInterval`), **several related pieces of state that change together** (a good fit for `useReducer`), and **conditional rendering by tab**.

</v-click>

---

# 🛠️ How To Do It — `useReducer` for Related State

Promo code, active tab, and terms-accepted all change *together* as part of one "payment form" — a single reducer keeps them consistent.

```tsx
// lib/payment-reducer.ts
type PaymentState = {
  activeTab: 'card' | 'promptpay' | 'bank' | 'other';
  promoCode: string;
  promoApplied: boolean;
  termsAccepted: boolean;
};

type PaymentAction =
  | { type: 'SET_TAB'; tab: PaymentState['activeTab'] }
  | { type: 'SET_PROMO'; value: string }
  | { type: 'APPLY_PROMO' }
  | { type: 'TOGGLE_TERMS' };
```

---

# 🛠️ How To Do It — `useReducer` for Related State (continued)

The reducer itself — one named case per transition:

```tsx
export function paymentReducer(state: PaymentState, action: PaymentAction): PaymentState {
  switch (action.type) {
    case 'SET_TAB': return { ...state, activeTab: action.tab };
    case 'SET_PROMO': return { ...state, promoCode: action.value };
    case 'APPLY_PROMO':
      return { ...state, promoApplied: state.promoCode.toUpperCase() === 'QOOMFIRST' };
    case 'TOGGLE_TERMS': return { ...state, termsAccepted: !state.termsAccepted };
  }
}
```

<div class="mt-2 text-sm opacity-70">
Compare this to four separate <code>useState</code> calls: here, every transition is named, testable, and visible in one place — <code>console.log</code> the action and you have a full audit trail of what the user did.
</div>

---

# 🛠️ How To Do It — A Countdown Timer with `useEffect`

```tsx {5-12}
// components/Payment/CountdownTimer.tsx
'use client';
import { useEffect, useState } from 'react';

export function CountdownTimer({ initialSeconds }: { initialSeconds: number }) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  useEffect(() => {
    const id = setInterval(() => {
      setSecondsLeft((s) => Math.max(0, s - 1));
    }, 1000);
    return () => clearInterval(id);   // 🔑 cleanup — or you'll leak a timer on every re-render
  }, []);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  return <span className="font-mono-data text-primary">{minutes}:{seconds.toString().padStart(2, '0')}</span>;
}
```

<div class="mt-2 text-sm opacity-70">
The original mockup did this with a raw <code>setInterval</code> mutating <code>textContent</code> directly. In React, the interval only ever <i>calls <code>setState</code></i> — React still owns the render. The <b>cleanup function</b> is the part most tutorials skip and most bugs come from.
</div>

---

# 🛠️ Converting the Design — Tabs Without a Library

```tsx
// components/Payment/PaymentMethodTabs.tsx
const TABS = ['card', 'promptpay', 'bank', 'other'] as const;

type Props = { active: typeof TABS[number]; onChange: (t: typeof TABS[number]) => void };

export function PaymentMethodTabs({ active, onChange }: Props) {
  return (
    <div className="flex bg-surface-container rounded-xl p-xs gap-xs">
      {TABS.map((tab) => (
        <button key={tab} onClick={() => onChange(tab)}
          className={`flex-1 py-sm rounded-lg capitalize ${
            active === tab ? 'bg-surface-container-lowest shadow-sm text-primary' : 'text-on-surface-variant'
          }`}>
          {tab}
        </button>
      ))}
    </div>
  );
}
```

---

# 🛠️ Converting the Design — Tabs Without a Library (continued)

Wiring it into the payment form:

```tsx
{state.activeTab === 'card' && <CardForm />}
{state.activeTab === 'promptpay' && <PromptPayQr />}
```

<div class="mt-2 text-sm opacity-70">
The mockup's <code>switchTab()</code> function manually added/removed CSS classes on four buttons by ID. In React: one piece of state, one conditional render — the DOM updates itself.
</div>

---

# 🏋️ Try It Yourself — Workshop 4

<v-click>

1. Wire up `paymentReducer` in `PaymentStep` with `useReducer`.
2. Implement the **promo code** flow: typing updates `promoCode`, clicking "Apply" dispatches `APPLY_PROMO`. If `promoApplied` is true, subtract ฿500 from the total and show the "QOOMFIRST applied!" banner.
3. Build `CardForm` — Cardholder Name, Card Number, Expiry, CVV — plain controlled inputs, no need for real card validation today.
4. Gate the **"Pay Securely"** button: disabled unless `termsAccepted` is true.
5. On a successful pay, commit the resulting `ConfirmedBooking` (PNR, seat, total) into `BookingContext` via `useBooking().setState(...)`, then flip a local `'form' | 'confirmation'` step to show `ConfirmationStep` — still inside `/payment`, no route change needed.
6. **Stretch goal**: when the countdown timer hits `0`, show a "Your price hold expired — search again" message and disable the Pay button.

</v-click>

---

# 🧵 Tying It All Together — Three Routes, Three Scopes of State

Notice we never needed one giant reducer. State naturally split into three scopes, each as small as it can be:

```ts
// Inside app/page.tsx — local to the search phase only
type SearchPhaseStep = 'search' | 'dates' | 'results';
// useState/useReducer here never leaves this route.

// Inside app/payment/page.tsx — local to the payment phase only
type PaymentPhaseStep = 'form' | 'confirmation';
// same story — never leaves this route.

// lib/booking-context.tsx — the only state that crosses route boundaries
type BookingState = {
  search?: SearchCriteria;
  selectedFlight?: FlightOption;
  booking?: BookingDraft;
  confirmed?: ConfirmedBooking;
};
```

---

# 🧵 Tying It All Together (continued)

<v-click>

- Search → Dates → Results: **local state**, thrown away the moment you leave `/`.
- `/booking` only needs the *result* of that phase (the chosen flight), not its keystrokes — that's the one thing promoted into `BookingContext`.
- Payment → Confirmation: **local state** again, inside `/payment` — only the final `ConfirmedBooking` gets written back to context, so "Back to Home" has something to clear.

</v-click>

<div v-click class="mt-6 text-sm opacity-70">
Compare this to one global reducer holding all six steps: that file would only grow as the app grows. Scoping state to where it's used is the same "lift state up" lesson from Workshop 1 — just applied across routes instead of components.
</div>

---
layout: section
---

# 📦 Workshop 5
## Finishing the Journey & Shipping Static Files

### Quest 6: Confirmation (still `/payment`) · Static Export · Deploy

---
layout: center
class: text-center
---

# ✅ Quest 6 · Booking Confirmation

<div class="flex items-end justify-center gap-6">
  <img src="/screens/05_desktop_booking_confirm.png" class="h-105 rounded-2xl shadow-2xl border border-gray-200" />
  <img src="/screens/05_mobile_booking_confirm.png" class="h-105 rounded-2xl shadow-2xl border border-gray-200" />
</div>

<div class="mt-3 text-sm opacity-60">design source: ui/06-booking-confirmation · live app, desktop + mobile</div>

---

# 🎯 What Are We Building?

<v-click>

- A **success state** — checkmark animation, "Booking Confirmed!"
- A **PNR card** with a **copy-to-clipboard** button.
- A **flight timeline** — purely presentational, rendering data we already have.
- An **action list** (Add to Calendar, Download PDF, View Details) — links for now.
- A **"Back to Home"** button that has to reset the *entire* wizard back to step one.

</v-click>

---

# 🛠️ How To Do It — Copy to Clipboard

```tsx
// components/Confirmation/PnrCard.tsx
'use client';
import { useState } from 'react';
import { Icon } from '@/components/Icon';

export function PnrCard({ pnr }: { pnr: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(pnr);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  // ...JSX continued next slide
```

---

# 🛠️ How To Do It — Copy to Clipboard (continued)

```tsx
  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex justify-between items-center">
      <div>
        <p className="text-label-sm text-on-surface-variant uppercase">Booking Reference</p>
        <p className="font-mono-data text-headline-lg text-primary tracking-widest">{pnr}</p>
      </div>
      <button onClick={handleCopy} className="p-sm rounded-full border border-outline-variant">
        <Icon name={copied ? 'check' : 'copy_all'} />
      </button>
    </div>
  );
}
```

<div class="mt-2 text-sm opacity-70">
<code>navigator.clipboard</code> is a browser API — works identically whether the page came from a Node server or a plain static file. Another reminder that "static" only restricts the <i>server</i> side, not what the browser itself can do.
</div>

---

# 🛠️ Back to Home — Clearing State *and* Changing Routes

```tsx
// components/steps/ConfirmationStep.tsx
'use client';
import { useRouter } from 'next/navigation';
import { useBooking } from '@/lib/booking-context';

export function ConfirmationStep() {
  const router = useRouter();
  const { setState } = useBooking();
  function handleBackToHome() {
    setState({});          // clear the shared booking state
    router.push('/');      // back to the search phase — a real route change
  }

  return (
    <button onClick={handleBackToHome} className="w-full border border-primary text-primary py-md rounded-xl">
      Back to Home
    </button>
  );
}
```

<div class="mt-2 text-sm opacity-70">
"Start over" is one <code>setState({})</code> plus a real <code>router.push('/')</code> — no URL trick needed.
</div>

---

# 🏋️ Try It Yourself — Workshop 5.1

<v-click>

1. Build the **flight timeline** — departure/arrival time, airport codes, a dashed line between two flight icons, duration label.
2. Build the **action list** — three rows, icon + label + chevron, no real navigation needed today (just `console.log` on click).
3. Wire up `PnrCard` with a real generated PNR (e.g. `` `QM${Math.random().toString(36).slice(2, 6).toUpperCase()}` ``).
4. Wire "Back to Home" to clear `BookingContext` and `router.push('/')` — confirm it actually takes you back to the search phase with empty state.

</v-click>

---
layout: center
class: text-center
---

# 🎁 Bonus Screen · My Bookings

<div class="flex items-end justify-center gap-6">
  <img src="/screens/06_desktop_my_booking.png" class="h-105 rounded-2xl shadow-2xl border border-gray-200" />
  <img src="/screens/06_mobile_my_booking.png" class="h-105 rounded-2xl shadow-2xl border border-gray-200" />
</div>

<div class="mt-3 text-sm opacity-60">live app, desktop + mobile — not built in today's workshops</div>

---

# 🤔 What Would It Take?

The live app ships a fourth screen we haven't touched: a list of past bookings.

<v-click>

- A **fourth route**, `/bookings` — same static-export rules apply: prerendered once at build time, fills in client-side.
- A **list** of `ConfirmedBooking`s instead of just one — `BookingContext` (or `sessionStorage`) would need to *accumulate* confirmations across visits, not overwrite the last one.
- Each card reuses the same **PNR + flight summary** pieces from Quest 6 — nothing new to design, just rendered in a loop with `.map()`.

</v-click>

<div v-click class="mt-6 p-4 rounded bg-blue-500/10 border border-blue-500/30">
💡 Not one of today's six quests — a good check on whether the patterns from Workshops 1–5 actually transfer to a screen you haven't seen built yet.
</div>

---

# 🚀 Building for Static Export

```bash
bun run build
```

```
▲ Next.js 15.x
  Creating an optimized production build...
✓ Compiled successfully
✓ Exporting (5/5)

out/
  index.html              ← "/"        — search phase
  booking/
    index.html             ← "/booking" — passenger details
  payment/
    index.html             ← "/payment" — payment + confirmation
  _next/
    static/...
  screens/
    01_desktop_flight_search.png
    ...
```

<v-click>

- Three routes in, three HTML files out — each one is a complete, independent page. Open any of them directly in a browser and it renders, no server needed.
- Once JS loads, Next's client router stitches all three back into one soft-navigating app — that's what makes `router.push('/booking')` feel instant instead of a reload.
- Drop the whole `out/` folder onto S3, Nginx, Netlify, GitHub Pages — anywhere that can serve static files.

</v-click>

---

# 🩹 Static Export — Sharp Edges to Know

<v-click>

- **`next/image` optimization needs a server.** We already set `images.unoptimized: true` — images are served as-is, no on-the-fly resizing. For a real app, pre-resize images at build time or use a CDN loader (Cloudinary, Imgix).
- **Deep links and refreshes can outrun `BookingContext`.** Refresh, hit back/forward, or paste `/payment` straight into a new tab, and the Provider may have nothing in it. We already guard for this — every route checks its prerequisite state and `router.replace('/')`s if it's missing — and `sessionStorage` rehydration covers most real refreshes. A brand-new tab with no session, though, always bounces home.
- **Environment variables are baked in at build time.** `NEXT_PUBLIC_*` values are inlined into the JS bundle during `next build` — there's no runtime to read fresh env vars from, so a config change means a rebuild + redeploy.
- **Any "backend" work (real flight search, real payments) is just an external API your client-side code calls with `fetch`.** The static export constraint is about *Next.js's own server*, not about whether your app can talk to a backend at all.

</v-click>

---

# 📋 Workshop 4 & 5 Recap

| Concept | Where we used it |
|---|---|
| `useReducer` for related state | payment tabs + promo + terms |
| `useEffect` + cleanup | countdown timer, `sessionStorage` sync |
| Conditional rendering by tab/state | payment method forms |
| `navigator.clipboard` | PNR copy button |
| `Context` for cross-route state | `BookingContext` shared by `/`, `/booking`, `/payment` |
| Route guards + `router.replace()` | bouncing home when prerequisite state is missing |
| `output: 'export'` + `unoptimized: true` | shippable static `/out` folder, three routes deep |

---
layout: center
---

# 🗺️ Full Architecture — Structure

<div class="text-sm opacity-70 mt-1 mb-8">One Provider contains three routes. Nothing else crosses a boundary.</div>

<div class="flex justify-center">

<div class="rounded-2xl border-2 border-gray-400/40 bg-gray-400/5 px-6 py-6">

<div class="text-center font-mono text-sm mb-5">
app/layout.tsx — <span class="text-amber-500 font-semibold">&lt;BookingProvider&gt;</span>
</div>

<div class="flex items-center justify-center gap-3">

<div class="flex flex-col items-center gap-2 px-4 py-3 rounded-2xl border-2 border-blue-400/40 bg-blue-400/5 w-44">
  <span class="text-xs font-mono text-blue-500">/</span>
  <carbon:search class="text-2xl text-blue-600" />
  <span class="text-xs font-semibold text-center">Search → Dates → Results</span>
</div>

<div class="flex justify-center">
  <carbon:arrow-right class="text-xl text-gray-400" />
</div>

<div class="flex flex-col items-center gap-2 px-4 py-3 rounded-2xl border-2 border-violet-400/40 bg-violet-400/5 w-44">
  <span class="text-xs font-mono text-violet-500">/booking</span>
  <carbon:user class="text-2xl text-violet-600" />
  <span class="text-xs font-semibold text-center">Passenger Details</span>
</div>

<div class="flex justify-center">
  <carbon:arrow-right class="text-xl text-gray-400" />
</div>

<div class="flex flex-col items-center gap-2 px-4 py-3 rounded-2xl border-2 border-emerald-400/40 bg-emerald-400/5 w-44">
  <span class="text-xs font-mono text-emerald-500">/payment</span>
  <carbon:purchase class="text-2xl text-emerald-600" />
  <span class="text-xs font-semibold text-center">Payment → Confirmation</span>
</div>

</div>
</div>
</div>

<div class="mt-8 text-sm opacity-60 text-center">
Every route can read and update the same <code>BookingState</code> — only the Provider knows all three routes exist, and <code>sessionStorage</code> keeps it alive across a refresh.
</div>

---
layout: center
---

# 🗺️ Full Architecture — Flow

<div class="text-sm opacity-70 mt-1 mb-8">What actually crosses a route boundary, and what doesn't.</div>

<div class="flex items-center justify-center gap-2">

<div class="flex flex-col items-center gap-1 px-4 py-3 rounded-2xl border-2 border-blue-400/40 bg-blue-400/5">
  <span class="text-xs font-mono text-blue-500">/</span>
  <span class="text-xs font-semibold">search</span>
</div>

<div class="flex flex-col items-center gap-1 px-1">
  <carbon:arrow-right class="text-xl text-gray-400" />
  <span class="text-[9px] text-center opacity-60 leading-tight">push('/booking')<br/>commit flight</span>
</div>

<div class="flex flex-col items-center gap-1 px-4 py-3 rounded-2xl border-2 border-violet-400/40 bg-violet-400/5">
  <span class="text-xs font-mono text-violet-500">/booking</span>
  <span class="text-xs font-semibold">booking</span>
</div>

<div class="flex flex-col items-center gap-1 px-1">
  <carbon:arrow-right class="text-xl text-gray-400" />
  <span class="text-[9px] text-center opacity-60 leading-tight">push('/payment')<br/>commit booking</span>
</div>

<div class="flex flex-col items-center gap-1 px-4 py-3 rounded-2xl border-2 border-emerald-400/40 bg-emerald-400/5">
  <span class="text-xs font-mono text-emerald-500">/payment</span>
  <span class="text-xs font-semibold">payment</span>
</div>

</div>

<div class="flex justify-center mt-3">
  <span class="text-[10px] opacity-50 leading-tight">↩ push('/') · clear state — back to search</span>
</div>

<div class="flex justify-center gap-8 mt-10">
  <div class="flex items-center gap-2 text-sm opacity-70"><carbon:cloud-download class="text-lg" /> <code>useEffect</code> + <code>lib/mock-api.ts</code> on <code>/</code></div>
  <div class="flex items-center gap-2 text-sm opacity-70"><carbon:save class="text-lg" /> <code>sessionStorage</code> survives a refresh</div>
</div>

<div class="mt-6 text-sm opacity-60 text-center">
No box here runs on a server at request time, and no arrow between routes is a hard reload. That's the whole assignment, visualized.
</div>

---

# 🧭 What's Next (Beyond Today)

<v-click>

- **Real backend**: replace `lib/mock-api.ts` with real `fetch()` calls to whatever Qoomlee's actual flight-search and payment APIs are — the component layer doesn't change.
- **Testing**: the local phase reducers and `paymentReducer` are pure functions — perfect candidates for unit tests with zero mocking.
- **Accessibility pass**: keyboard navigation through the calendar, focus management between wizard steps.
- **Analytics**: since every transition is a dispatched action, logging user funnel drop-off is one `console.log`/analytics call inside the reducer away.

</v-click>

<div v-click class="mt-6 p-4 rounded bg-blue-500/10 border border-blue-500/30">
💡 We're not leaving "Testing" as just a bullet point — Workshop 6 sets it up for real, right now.
</div>

---
layout: section
---

# 📦 Workshop 6
## Proving It Works

### Setup Vitest · Component Tests · Reducers & Hooks

---

# 🧪 Why Test a Static-Export App?

<v-click>

There's no server-side anything to hide bugs behind — the HTML/JS sitting in `/out` after `bun run build` **is** the product. If `paymentReducer` has a bug, every visitor hits it.

</v-click>

<v-click>

The good news: the things most worth testing here are things we already isolated, on purpose, back in earlier workshops.

</v-click>

<v-click>

- `paymentReducer`, `pickDate` — pure functions, already separated from any component.
- `lib/mock-api.ts` — the one place a real `fetch()` will eventually go; already a single mockable boundary.
- `BookingContext` — already guards against being used outside its `<BookingProvider>`.

</v-click>

<div v-click class="mt-6 p-4 rounded bg-amber-500/10 border border-amber-500/30">
🧠 `03-qoomlee` already has one real test file — <code>services/average.test.ts</code> — using <code>describe</code>/<code>test</code>/<code>expect</code>. There's just no test runner installed yet to actually run it.
</div>

---

# 🛠️ Setting Up Vitest

```bash
bun add -D vitest @vitejs/plugin-react jsdom \
  @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

```ts {3,8,9}
// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    globals: true,
  },
});
```

<div class="mt-2 text-sm opacity-70">
<code>globals: true</code> is what lets <code>describe</code>/<code>test</code>/<code>expect</code> in <code>average.test.ts</code> run with zero changes — same global API Jest uses. Vitest runs standalone against the TS source; it doesn't need <code>next build</code> first.
</div>

---

# 🛠️ Test a Pure Function First

```ts
// lib/payment-reducer.test.ts
import { describe, test, expect } from 'vitest';
import { paymentReducer } from './payment-reducer';

describe('paymentReducer', () => {
  test('APPLY_PROMO accepts QOOMFIRST case-insensitively', () => {
    // Arrange
    const state = { activeTab: 'card' as const, promoCode: 'qoomfirst', promoApplied: false };

    // Act
    const next = paymentReducer(state, { type: 'APPLY_PROMO' });

    // Assert
    expect(next.promoApplied).toBe(true);
  });
});
```

<div class="mt-2 text-sm opacity-70">
Same Arrange/Act/Assert shape as <code>average.test.ts</code>. No rendering, no DOM, no mocking — a reducer is just a function: state and action in, new state out.
</div>

---

# 🛠️ Test a Component — Testing Library

```tsx {6,8,10}
// components/SearchForm/CityInputs.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect, vi } from 'vitest';
import { CityInputs } from './CityInputs';

test('swap button calls onSwap', async () => {
  const onSwap = vi.fn();
  render(<CityInputs from="BKK" to="SYD" onSwap={onSwap} />);

  await userEvent.click(screen.getByRole('button', { name: /swap cities/i }));

  expect(onSwap).toHaveBeenCalledOnce();
});
```

<div class="mt-2 text-sm opacity-70">
Queries by <strong>role and accessible name</strong> — <code>aria-label="Swap cities"</code>, the same attribute from Quest 1 — not by CSS class. The test survives a redesign that a class-name selector wouldn't.
</div>

---

# 🛠️ Test a Hook — and Mock the Fetch Boundary

```tsx
// lib/booking-context.test.tsx
import { renderHook } from '@testing-library/react';
import { test, expect } from 'vitest';
import { useBooking } from './booking-context';

test('throws when used outside BookingProvider', () => {
  expect(() => renderHook(() => useBooking())).toThrow(/must be used inside/);
});
```

<v-click>

```tsx
// components/steps/ResultsStep.test.tsx
vi.mock('@/lib/mock-api', () => ({
  searchFlights: vi.fn().mockResolvedValue([{ id: '1', airline: 'Qoomlee' }]),
}));

// render <ResultsStep />, then:
await waitFor(() => expect(screen.getByText(/Qoomlee/)).toBeInTheDocument());
```

</v-click>

<div v-click class="mt-2 text-sm opacity-70">
Because <code>searchFlights</code> was already isolated into its own module, swapping it for a mock is one <code>vi.mock</code> call — no network interception library needed.
</div>

---

# 🏋️ Try It Yourself — Workshop 6

<v-click>

1. Install Vitest in `03-qoomlee` and get `services/average.test.ts` actually running — it's been sitting there the whole time.
2. Write a test for `pickDate`'s range logic: tapping an earlier date after a range is already set should restart the range, not extend it.
3. Render `PriceSummary` with the seat-upgrade toggle on and off — assert the displayed total text changes.
4. **Stretch**: mock `next/navigation`'s `useRouter` and assert `app/booking/page.tsx` redirects to `/` when `state.selectedFlight` is missing — the guard clause from Workshop 3.

</v-click>

---

# 📋 Workshop 6 Recap

| What we tested | Tool / technique |
|---|---|
| Pure functions (`paymentReducer`, `pickDate`) | plain `expect()`, no rendering at all |
| Components | `render` + `screen` + `userEvent`, query by role/label |
| Hooks | `renderHook` |
| The fetch boundary | `vi.mock('@/lib/mock-api')` |
| Route guards | mock `next/navigation`'s `useRouter` |

<div class="mt-6 text-sm opacity-70">
Tests run in Node/jsdom and never touch a server either — the exact same constraint that's shaped every screen we built today.
</div>

---
layout: center
class: text-center
---

# 🎉 You Built Qoomlee's Booking Flow

### Six real screens. Three soft-navigated routes. Zero servers.

<div class="mt-8 text-sm opacity-70">
Questions? Open an issue, or just open your editor and keep building.
</div>

<PoweredBySlidev mt-10 />
