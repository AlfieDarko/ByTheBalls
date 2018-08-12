import request from 'supertest';
import app from '../app';

test('Server Testing Suite loads', () => {
    expect(1).toBe(1)
});

describe('Test the root path', () => {
    it('It should response the GET method', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
})

