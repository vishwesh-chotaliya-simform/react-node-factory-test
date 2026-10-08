# QA v1 · issue #2 · UserStatusBadge

Head under test: `ae2cb8f`. Command: `npm test` (13/13), `npm run test:react` (13/13 after QA tests), `npm run build`.

| AC | Result | Proof |
|---|---|---|
| Named export, `status` prop, renders text | pass | `client/components/UserStatusBadge.test.jsx`, `UserStatusBadge.edge.test.jsx` |
| Active / Inactive / Pending colours | pass | computed style in Chromium: rgb(22,163,74), rgb(107,114,128), rgb(249,115,22) |
| Other status renders `Unknown` on `#6b7280` | pass | `Banned`, `undefined`, `null`, `''`, `active`, `constructor`, `toString`, `__proto__` all give Unknown on gray |
| `test:react` covers four cases | pass | 4 builder tests + 8 QA edge tests |
| `npm test` passes | pass | 3 files, 13 tests |

Screenshots: `desktop.png`, `tablet.png`, `mobile.png` (static render of Active, Inactive, Pending, Banned, undefined).
