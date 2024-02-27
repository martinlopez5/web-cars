const request = require('supertest');
const app = require('../app'); // Import your Express app

describe('GET /users', () => {
    it('responds with an array of users', async () => {
        const response = await request(app).get('/api/manufacturer/renault');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Object);
        // Add more assertions as needed
    });
});