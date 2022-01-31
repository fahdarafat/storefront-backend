import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);
describe("User Endpoint Tests", () => {
    it('GET users should return status 401 without authentication', async () => {
        const response = await request.get('/users')
        expect(response.status).toBe(401);
    })
    it('POST request for Signup should return 200', async () => {
        const token = await request.post('/users/signup').set('Content-Type', 'application/json').send({
            firstname: "Fahd",
            lastname: "Arafat",
            password: "password123"
        });
        expect(token).toBeTruthy();
    })
})
