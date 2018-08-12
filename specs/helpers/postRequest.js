import request from 'supertest';

export function sendPostRequest(app, url, tournamentName) {
    return request(app)
        .post(url)
        .send({
            tournamentName: tournamentName,
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
}