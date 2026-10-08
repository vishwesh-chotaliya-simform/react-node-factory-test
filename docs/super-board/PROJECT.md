# react-node-factory-test

React client + Node (Express 5) server template. Early stage: `server/app.js` (POST /api/users) and `client/components/UserStatusBadge.jsx` are the first code.

| Area | Value |
|---|---|
| Server | Express 5, dotenv · code goes in `server/` |
| Client | React · code goes in `client/` |
| Unit / integration tests | Vitest: `npm run test:node` (server), `npm run test:react` (client), `npm test` (all) |
| HTTP tests | supertest |
| Browser tests | Playwright |
| Build | `npm run build` (placeholder: prints "Build passed") |
| Branches | work merges to `staging`; `master` is promoted by a human |
| Board | github.com/users/vishwesh-chotaliya-simform/projects/1 |
