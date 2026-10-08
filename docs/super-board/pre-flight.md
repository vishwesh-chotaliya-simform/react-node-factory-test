# Pre-flight — React-node-factory-test board

Written by `super-board lint` on 2026-10-08. Each `[ ]` is a halt gate for `super-board run`.

## 🔑 Credentials the loop will need
- [✓] None — #1 and #2 need no API keys, test logins or `.env` values

## 🛠 Tools the loop will need
- [✓] gh CLI authenticated with `project` scope (verified · gh 2.102.0 in `~/.local/bin`)
- [✓] Node 20+ (verified · v22.23.2, npm 10.9.8)
- [✓] Vitest + supertest installed (devDependencies) — #1, #2
- [✓] Playwright Chromium installed (`~/.cache/ms-playwright`) — QA lane
- [✓] npm registry reachable for new dev dependencies (react, react-dom, @testing-library/react, jsdom) — #2

## 🌐 Environment
- [✓] `staging` branch exists on origin (base branch)

> Not checkable from here: dynamic workflows must be ON in `/config`; `super-board run` checks it at start.
