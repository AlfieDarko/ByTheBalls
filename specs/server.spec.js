import request from 'supertest';
import app from '../app';

test('Server Testing Suite loads', () => {
    expect(1).toBe(1)
});

test('GET Paths', () => {
    describe('Test the root path', () => {
        it('It should response the GET method', async () => {
            const response = await request(app).get('/');
            expect(response.statusCode).toBe(200);
        });
    })
    
    describe('GET /api/v1/tournaments', () => {
        it('Can get all tournaments', async () => {
            const response = await request(app).get('/api/v1/tournaments')
            expect(response.body).toBeInstanceOf(Object);
        });
    });
    
});
