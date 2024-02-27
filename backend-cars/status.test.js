const request = require('supertest');
const app = require('./server'); // Make sure this path is correct

describe('GET /api/manufacturer/renault', () => {
    it('responds with a 200 status ok and the correct data structure', async () => {
        const response = await request(app).get('/api/manufacturer/renault');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('models');
        // Assuming models is an array; adjust if it's supposed to be an object
        expect(response.body.models).toBeInstanceOf(Object);
    });
});