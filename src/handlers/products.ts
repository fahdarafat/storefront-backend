import express from 'express'
import { Product, ProductStore } from '../models/product'
import authenticate from '../middleware/authenticate';

const store = new ProductStore;

const products = express.Router();

products.get('/', async (req: express.Request, res: express.Response) => {
    try {
        const products = await store.index();
        res.status(200).json(products);
    } catch (err) {
        res.send(err);
    }
})
products.get('/:id', async (req: express.Request, res: express.Response) => {
    const id: number | undefined = parseInt(req.params.id) ? parseInt(req.params.id) : undefined
    if (id) {
        try {
            const result = await store.show(id);
            res.status(200).json(result);
        } catch (err) {
            res.send(err);
        }
    } else {
        res.send('Please provide a number for product id')
    }
})
products.post('/', authenticate, async (req: express.Request, res: express.Response) => {
    const product = req.body;
    try {
        const result = await store.create(product);
        res.status(200).json(result)
    } catch (err) {
        res.send(err)
    }
})
products.delete('/:id', authenticate, async (req: express.Request, res: express.Response) => {
    const id: number | undefined = parseInt(req.params.id) ? parseInt(req.params.id) : undefined
    if (id) {
        try {
            const result = await store.delete(id);
            res.status(200).json(result);
        } catch (err) {
            res.send(err)
        }
    } else {
        res.send('Please provide a number for product id')
    }
})
export default products