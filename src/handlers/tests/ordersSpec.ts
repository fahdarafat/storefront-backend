import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);
describe("Orders Endpoint Tests", () => {
    it("GET Orders should return status 200", async () => {
        const response = await request.get('/orders');
        expect(response.status).toEqual(200);
    });
    it("Create Order status should be 200", async () => {
        const response = await request.post('/orders').set('Content-Type', 'application/json').send({
            user_ID: 1
        })
        expect(response.status).toEqual(200);
    })
});