import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);
describe("User Endpoint Tests", () => {
    it('get /users users should return status 401 without authentication', async () => {
        const response = await request.get('/users')
        expect(response.status).toBe(401);
    })
    it('post /users/signup request for Signup should return 200', async () => {
        const token = await request.post('/users/signup').set('Content-Type', 'application/json').send({
            firstname: "Fahd",
            lastname: "Arafat",
            password: "password123"
        });
        expect(token).toBeTruthy();
    })
    it("get /users/1 should return Error message when called without token", async () => {
        const response = await request.get('/users/1');
        expect(response.text).toMatch("Invalid Token, TypeError: Cannot read property 'split' of undefined");
    })
    it("post /users for users should return 401 without token ", async () => {
        const response = await request.post('/users');
        expect(response.status).toBe(401)
    })
})
