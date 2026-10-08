import request from 'supertest';
import { describe, expect, it } from 'vitest';
import app from './app.js';

describe('POST /api/users', () => {
  it('returns 400 when there is no body', async () => {
    const res = await request(app).post('/api/users');
    expect(res.status).toBe(400);
    expect(res.body).toEqual({ error: 'Invalid payload' });
  });

  it('returns 400 for an empty JSON object', async () => {
    const res = await request(app).post('/api/users').send({});
    expect(res.status).toBe(400);
    expect(res.body).toEqual({ error: 'Invalid payload' });
  });

  it('returns 400 when name or email is missing, empty or not a string', async () => {
    for (const payload of [
      { name: 'Ada' },
      { email: 'ada@example.com' },
      { name: '', email: 'ada@example.com' },
      { name: 'Ada', email: '' },
      { name: 1, email: 'ada@example.com' },
    ]) {
      const res = await request(app).post('/api/users').send(payload);
      expect(res.status).toBe(400);
      expect(res.body).toEqual({ error: 'Invalid payload' });
    }
  });

  it('returns 201 echoing name and email for a valid body', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({ name: 'Ada', email: 'ada@example.com' });
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ name: 'Ada', email: 'ada@example.com' });
  });
});
