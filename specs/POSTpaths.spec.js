import app from '../app';
import db from '../database/database'
import {
    sendPostRequest
} from './helpers/postRequest'

test('Server Testing Suite loads', () => {
    expect(1).toBe(1)
});

afterAll(async () => {
    await db.disconnect()
});


describe('POST Paths', () => {
    describe('POST /api/v1/tournaments', () => {
        const API_POST_URL = '/api/v1/tournaments'

        it('Posts the request to the tournament path successfully with 201 status code', async (done) => {
            const response = await sendPostRequest(app, API_POST_URL, 'makers')
            expect(response.status).toBe(201);
            expect(response.body.message).toBe('Success!');
            done()
        });


        it('Should reject Request when name parameter is missing', async (done) => {
            const response = await sendPostRequest(app, API_POST_URL)
            expect(response.status).toBe(400);
            done()
        });
    });
});