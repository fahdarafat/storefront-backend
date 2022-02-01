import supertest from 'supertest';
import app from '../../server';
import jwt from "jsonwebtoken"

const request = supertest(app);
describe("Orders Endpoint Tests", () => {
    const testUser = {
        firstname: "Fahd",
        lastname: "Arafat",
        password: "asdfqwer1234"
    }
    const token = jwt.sign({ user: testUser }, process.env.TOKEN_SECRET as string);
    it("get /orders should return status 200 when token is provided", async () => {
        await request.get('/orders').set('Authorization', `Bearer ${token}`).expect(200);
    })
    it("post /orders should return an error message when given string as user_id", async () => {
        const result = await request.post('/orders').set('Authorization', `Bearer ${token}`).send({ "user_id": "abc" })
        expect(result.body).toMatch("user_id must be a number")
    })
    it("get /orders/user/:id should return Error message when called without token", async () => {
        await request.get('/orders/user/:id').expect(401);
    })
    it("get /orders/:id should return status 200", async () => {
        await request.get('/orders/1').set('Authorization', `Bearer ${token}`).expect(200);
    })
});