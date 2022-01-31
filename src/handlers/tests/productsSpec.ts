import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);
describe("Products Endpoint Tests", () => {
    it("GET should return content type JSON", async () => {
        await request.get('/products').expect('Content-Type', /json/)
    })
})