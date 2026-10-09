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

  it('returns 400 for a malformed email', async () => {
    for (const email of ['ada', 'ada@', '@example.com', 'ada@example', 'ada@@example.com', 'ada @example.com']) {
      const res = await request(app).post('/api/users').send({ name: 'Ada', email });
      expect(res.status).toBe(400);
      expect(res.body).toEqual({ error: 'Invalid payload' });
    }
  });

  it('returns 400 for an email with tab, newline or padding whitespace, or a non-string email', async () => {
    for (const email of ['ada\t@example.com', 'ada@exa\nmple.com', ' ada@example.com', 'ada@example.com ', 'ada@example.', 'ada@.com', null, 42, ['ada@example.com'], { a: 1 }]) {
      const res = await request(app).post('/api/users').send({ name: 'Ada', email });
      expect(res.status).toBe(400);
      expect(res.body).toEqual({ error: 'Invalid payload' });
    }
  });

  it('returns 400 quickly for a ~90 KB email that ends in whitespace', async () => {
    const email = `a@${'.'.repeat(90000)} `;
    const started = Date.now();
    const res = await request(app).post('/api/users').send({ name: 'Ada', email });
    expect(res.status).toBe(400);
    expect(res.body).toEqual({ error: 'Invalid payload' });
    expect(Date.now() - started).toBeLessThan(500);
  });

  it('returns 201 for a plus-tagged or multi-label-domain email', async () => {
    for (const email of ['ada+tag@example.com', 'ada.l@mail.example.co.uk']) {
      const res = await request(app).post('/api/users').send({ name: 'Ada', email });
      expect(res.status).toBe(201);
      expect(res.body).toEqual({ name: 'Ada', email });
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
