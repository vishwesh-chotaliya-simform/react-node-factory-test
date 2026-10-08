import request from 'supertest';
import { describe, expect, it } from 'vitest';
import app from './app.js';

describe('GET /api/health', () => {
  it('returns 200 with { status: "ok" }', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toMatch(/application\/json/);
    expect(res.body).toEqual({ status: 'ok' });
  });

  it('does not return 200 for POST (route is GET only)', async () => {
    const res = await request(app).post('/api/health');
    expect(res.status).not.toBe(200);
  });
});
