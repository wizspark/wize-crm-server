import request from 'supertest';
import app from '../../../../../../';

describe('TEST GET /leads/:id/convert', () => {
    let server;

    before(async() => {
        server = await app.createServer();
    });

    it('should get 400 for /leads/1/convert', (done) => {
        request(server)
            .get('/api/leads/1/convert')
            .expect(400, (err, res) => {
                if (err) return done(err);
                done();
            });
    });
});