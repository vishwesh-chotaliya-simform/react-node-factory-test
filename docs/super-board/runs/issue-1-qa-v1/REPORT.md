# QA v1 - issue #1, PR #3 @ d112117

Result: PASS (4/4 AC). No app or test code changed.

| AC | Proof |
|---|---|
| Empty body (none or `{}`) returns 400 `{"error":"Invalid payload"}` | `server/users.test.js:6`, `:12`; live probe in `http-probe.log` rows 1-2 |
| Valid `name` + `email` returns 201 echoing both | `server/users.test.js:31`; probe row 3 |
| Supertest tests cover both and pass with `npm run test:node` | 4/4 green, `test-node.log` |
| `npm test` passes | 4/4 green; `npm run build` also green |

Test-gap check (not written, none High)
- Medium: dropping `.trim()` in `isFilled` (`server/app.js:6`) leaves all 4 tests green. A whitespace-only name returns 400 today (probe row 4) but nothing pins it. Witness: `{"name":"   ","email":"ada@example.com"}` expects 400.
- Medium: malformed JSON (`{bad`) returns 400 with an HTML error page, not `{"error":"Invalid payload"}` (probe row 7). Outside the ACs; the contract only names empty bodies.
- Low: extra fields (`role`) are dropped from the 201 echo (probe row 9); correct, unpinned.
