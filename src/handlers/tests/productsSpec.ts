import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);
describe("Products Endpoint Tests", () => {
    it("get /products should return content type JSON", async () => {
        await request.get('/products').expect('Content-Type', /json/)
    })
    it("get products/:id should return status 200", async () => {
        await request.get('/products/1').expect(200);
    })
    it("post /products should return 401 when token is missing", async () => {
        await request.post('/products').expect(401);
    })
})