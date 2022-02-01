import express, { response } from 'express'
import { Order, OrderStore } from '../models/order'
import authenticate from '../middleware/authenticate';

const store = new OrderStore;
const orders = express.Router();

orders.get('/', authenticate, async (req: express.Request, res: express.Response) => {
    try {
        const result = await store.index();
        res.status(200).json(result);
    } catch (err) {
        res.status(400).send(err);
    }
})
orders.get('/:id', authenticate, async (req: express.Request, res: express.Response) => {
    try {
        const id: Order["id"] = parseInt(req.params.id) ? parseInt(req.params.id) : undefined
        if (id) {
            const result = await store.show(id);
            res.status(200).json(result);
        } else {
            res.send('Please provide user id as a number');
        }
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
orders.post('/', authenticate, async (req: express.Request, res: express.Response) => {
    const id: Order["user_id"] = parseInt(req.params.id) ? parseInt(req.params.id) : undefined
    if (id) {
        try {
            const order: Order = {
                user_id: id,
            }
            const result = await store.create(order);
            res.status(200).json(result);
        } catch (err) {
            res.status(400).send(err)
        }
    } else {
        res.json("user_id must be a number");
    }
})
orders.put('/:id/complete', authenticate, async (req: express.Request, res: express.Response) => {
    try {
        const id: string = req.params.id;
        const result: Order = await store.completeOrder(id);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).send(err);
    }
})

export default orders