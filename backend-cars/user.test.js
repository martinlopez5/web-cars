const request = require('supertest');
const app = require('./server.js'); // Import your Express app

describe('GET /api/manufacturer/renault', () => {
    it('responds with a 200 status ok', async () => {
        const response = await request(app).get('/api/manufacturer/renault');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Object);
        // Add more assertions as needed
    });
});