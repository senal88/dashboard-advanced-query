# Dashboard: Advanced Query Interface

**Status**: Sprint 0 - Setup
**Target**: Week 1 Checkpoint (22 Feb) - React skeleton + State management

---

## 🎯 Objective

Build a production-ready web dashboard with:

- Complex filtering (status, role, date range, etc.)
- URL-driven state (100% filters in query params)
- Real-time data synchronization
- Export CSV/JSON
- Responsive (mobile/tablet/desktop)
- iOS support

---

## 📋 Tech Stack

- **Framework**: React 19+
- **Styling**: Tailwind CSS v4
- **Table**: TanStack Table v8
- **State**: URLSearchParams + useReducer
- **Testing**: Vitest + React Testing Library
- **Deployment**: Vercel

---

## 🚀 Quick Start (S0)

```bash
# Install
npm install

# Dev server (port 5173)
npm run dev

# Build
npm run build

# Test
npm run test
npm run test:ui
```

---

## 📁 Project Structure (Week 1)

```
dashboard/
├── src/
│   ├── components/
│   │   ├── DataTable.tsx       (TanStack Table wrapper)
│   │   ├── FilterSidebar.tsx   (Accordion filters)
│   │   ├── SearchBar.tsx       (Debounce search)
│   │   ├── TopBar.tsx          (Breadcrumbs + chips)
│   │   └── FilterChips.tsx     (Active filter tags)
│   ├── hooks/
│   │   ├── useFilterState.ts   (Read URL → apply filters)
│   │   ├── useFilterSync.ts    (Write to URL)
│   │   └── useDebounce.ts      (300ms debounce)
│   ├── api/
│   │   └── client.ts           (API layer scaffold)
│   ├── types/
│   │   ├── Filter.ts
│   │   └── Data.ts
│   ├── App.tsx
│   └── main.tsx
├── public/
│   └── mock_data.json          (100 rows for W1-2)
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md (este arquivo)
```

---

## 🗓️ Timeline

### Week 1 (16-22 Feb) - CHECKPOINT D1.0

- [ ] D1.1: React skeleton + layout
- [ ] D1.2: Component structure
- [ ] D1.3: URLSearchParams hook
- [ ] D1.4: Basic tests + CI/CD
- [ ] D1.5: Vercel deploy

**Deliverable**: Vercel URL with working layout + state management

### Week 2 (22-29 Feb)

- [ ] D2.1: Mock data (100 rows)
- [ ] D2.2: Filter components (status, role, date)
- [ ] D2.3: Debounce search
- [ ] D2.4: TanStack Table integration
- [ ] D2.5: Filter chips

**Deliverable**: Filters fully functional, data dynamically updates

### Week 3 (1-7 Mar) - CHECKPOINT D2.0

- [ ] D3.1: Test coverage >80%
- [ ] D3.2: Export CSV/JSON
- [ ] D3.3: Responsive + dark mode
- [ ] D3.4: API layer ready (mock → real)
- [ ] D3.5: Production performance

**Deliverable**: Dashboard ready for Agents API integration

---

## 🧪 Testing

```bash
# Run all tests
npm run test

# Watch mode
npm run test -- --watch

# Coverage report
npm run test -- --coverage
```

---

## 🚀 Deployment

### Local Development

```bash
npm run dev
# http://localhost:5173
```

### Vercel Production

```bash
# Auto-deploy on git push (configure in Vercel dashboard)
# Manual:
npm run build
# Push to GitHub → Vercel auto-builds + deploys
```

---

## 🔗 Integration Points (Week 4+)

- `src/api/client.ts` will connect to:
  - `GET http://localhost:9090/api/tasks` (Agents)
  - `POST http://localhost:9090/api/tasks/:id/approve` (Human loop)
  - `WebSocket ws://localhost:9090/api/tasks/:id/stream` (Real-time)

---

## 📚 Resources

- [Vite Docs](https://vitejs.dev/)
- [React 19 Docs](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TanStack Table](https://tanstack.com/table/v8/)
- [Vercel Docs](https://vercel.com/docs/)

---

## 🆘 Troubleshooting

| Problem               | Solution                                 |
| --------------------- | ---------------------------------------- |
| npm install fails     | `rm -rf node_modules && npm install`     |
| Vite port 5173 in use | `lsof -i :5173 && kill -9 <PID>`         |
| Tailwind not applying | Check `tailwind.config.ts` content paths |
| Tests fail            | `npm run test -- --no-cache`             |

---

## 🎯 Next Steps

1. **Today (S0)**: `npm install` ✓
2. **Tomorrow (S0+1)**: `npm run dev` + create first component (D1.1)
3. **Tuesday (Sync)**: Show Vercel URL + progress check

---

**Owner**: Frontend SKILL DEV
**Sync**: Every Tuesday @ 10h
**Questions?**: Ask in Sprint 0 sync or open GitHub issue
