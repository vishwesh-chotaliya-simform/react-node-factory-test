import request from 'supertest';
import { describe, expect, it } from 'vitest';
import app from './app.js';

describe('/api/health edge cases', () => {
  it('answers GET with a query string', async () => {
    const res = await request(app).get('/api/health?probe=lb');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });

  it('answers GET without a request body or auth header', async () => {
    const res = await request(app).get('/api/health').set('Accept', 'application/json');
    expect(res.status).toBe(200);
    expect(Object.keys(res.body)).toEqual(['status']);
  });

  it('returns 404 for POST', async () => {
    const res = await request(app).post('/api/health').send({ status: 'ok' });
    expect(res.status).toBe(404);
  });

  it.each(['put', 'patch', 'delete'])('does not return 200 for %s', async (method) => {
    const res = await request(app)[method]('/api/health');
    expect(res.status).not.toBe(200);
  });

  it('leaves POST /api/users untouched', async () => {
    const bad = await request(app).post('/api/users').send({});
    expect(bad.status).toBe(400);
    const ok = await request(app).post('/api/users').send({ name: 'Ada', email: 'ada@example.com' });
    expect(ok.status).toBe(201);
  });
});
