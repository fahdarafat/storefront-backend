import express from 'express'
import { Order, OrderStore } from '../models/order'
import authenticate from '../middleware/authenticate';

const store = new OrderStore;
const orders = express.Router();

orders.get('/', async (req: express.Request, res: express.Response) => {
    try {
        const result = await store.index();
        res.status(200).json(result);
    } catch (err) {
        res.status(400).send(err);
    }
})
orders.get('/:id', async (req: express.Request, res: express.Response) => {
    try {
        const id: string = req.params.id
        const result = await store.show(id);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).send(err);
    }
})
orders.get('/user/:id', authenticate, async (req: express.Request, res: express.Response) => {
    try {
        const id: string = req.params.id
        const result: Order = await store.showByUserID(id);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).send(err);
    }
})
orders.post('/', async (req: express.Request, res: express.Response) => {
    try {
        const order: Order = {
            userID: req.body.user_id,
        }
        const result = await store.create(order);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).send(err)
    }
})
orders.put('/:id/complete', async (req: express.Request, res: express.Response) => {
    try {
        const id: string = req.params.id;
        const result: Order = await store.completeOrder(id);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).send(err);
    }
})

export default orders