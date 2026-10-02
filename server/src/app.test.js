import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from './app.js';

describe('GET /api/health', () => {
  it('returns 200 with the standard success envelope', async () => {
    const response = await request(app).get('/api/health');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      success: true,
      data: { status: 'ok', db: 'disconnected' },
    });
  });

  it('responds with JSON', async () => {
    const response = await request(app).get('/api/health');

    expect(response.headers['content-type']).toMatch(/application\/json/);
  });
});