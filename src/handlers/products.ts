import express from 'express'
import {Product, ProductStore} from '../models/product'
import authenticate from '../middleware/authenticate';

const store = new ProductStore;

const products = express.Router();

products.get('/',async (req:express.Request, res:express.Response) => {
    const products = await store.index();
    res.status(200).json(products);
})
products.get('/:id',async (req:express.Request, res:express.Response) => {
    try {
        const id = req.params.id;
        const result = await store.show(id);
        res.status(200).json(result);
    } catch(err) {
        res.send(err);
    }
})
products.post('/', authenticate, async (req:express.Request, res:express.Response) => {
    const product = req.body;
    try {
        const result = await store.create(product);
        res.status(200).json(result)
    } catch(err) {
        res.send(err)
    }
})
products.delete('/:id', authenticate, async (req:express.Request, res:express.Response) => {
    try {
        const id = req.params.id;
        const result = await store.delete(id);
        res.status(200).json(result);
    } catch(err) {
        res.send(err)
    }
})
export default products