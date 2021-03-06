import request from 'supertest';
import app from '../app';

import db from '../database/database';

test('Server Testing Suite loads', () => {
  expect(1).toBe(1);
});

afterAll(async () => {
  await db.disconnect();
});

describe('GET Paths', () => {
  describe('Test the root path', () => {
    it('It should response the GET method', async () => {
      const response = await request(app).get('/');
      expect(response.statusCode).toBe(200);
    });
  });

  describe('GET /api/v1/tournaments', () => {
    it('Can get all tournaments', async () => {
      const response = await request(app).get('/api/v1/tournaments');
      expect(response.body).toBeInstanceOf(Object);
    });

    it('Should return object with correct properties', async () => {
      let expectedProps = ['tournamentName', 'players', '_id'];

      const response = await request(app).get('/api/v1/tournaments');
      let sampleKeys = Object.keys(response.body[0]);
      expectedProps.forEach(key => {
        expect(sampleKeys.includes(key)).toBe(true);
      });
    });

    it('Should NOT return objects with extra properties', async () => {
      let expectedProps = ['tournamentName', 'players', '_id'];

      const response = await request(app).get('/api/v1/tournaments');
      let extraProps = Object.keys(response.body[0]).filter(key => {
        return !expectedProps.includes(key);
      });
      expect(extraProps.length).toBe(0);
    });
  });
});
