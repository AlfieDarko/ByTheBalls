import request from 'supertest';
import app from '../app';
import {
    doesNotReject
} from 'assert';
import db from '../database/database'


test('Server Testing Suite loads', () => {
    expect(1).toBe(1)
});

afterAll(async () => {
    await db.disconnect()
});

describe('GET Paths', () => {
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

        it('Should return object with correct properties', async () => {
            let expectedProps = ['tournamentName', 'players'];

            const response = await request(app).get('/api/v1/tournaments')
            let sampleKeys = Object.keys(response.body[0]);
            expectedProps.forEach((key) => {
                console.log(key)
                expect(sampleKeys.includes(key)).toBe(true);
            });
        });

        it('Should NOT return objects with extra properties', async () => {
            let expectedProps = ['tournamentName', 'players'];

            const response = await request(app).get('/api/v1/tournaments')
            let extraProps = Object.keys(response.body[0]).filter((key) => {
                return !expectedProps.includes(key);
            });
            expect(extraProps.length).toBe(0);
        });
    });

});

describe('POST Paths', () => {
    describe('POST /api/v1/tournaments', () => {
        it('Posts to new tournament path return status 200', async (done) => {
            const response = await request(app)
                .post('/api/v1/tournaments')
                .send({
                    tournamentName: 'Makers PingPong 112',
                    players: {
                        playerA: 'Jackie',
                        playerB: 'Brianna',
                        playerC: 'Chelsea',
                        playerD: 'Lisa',
                        playerE: 'Mark',
                        playerF: 'Jake',
                        playerG: 'Jason',
                        playerH: 'Aquelina'
                    }
                })
            expect(response.status).toBe(200);
            done()
        });
    });
});