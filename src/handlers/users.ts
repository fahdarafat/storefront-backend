import express from 'express'
import {User , UserStore} from '../models/user'

const store = new UserStore;
const users = express.Router();

users.get('/', async (req:express.Request, res:express.Response):Promise<void> => {
    try {
        const result = await store.index();
        res.status(200).json(result);
    } catch(err) {
        res.status(400).send(err)
    }
})
users.get('/:id', async (req:express.Request, res:express.Response):Promise<void> => {
    try {
        const id = req.params.id;
        const result = await store.show(id);
        res.status(200).json(result).end();
    } catch(err) {
        res.status(400).send(err).end();
    }
})
users.post('/',async (req:express.Request, res:express.Response):Promise<void> => {
    try {
        const user:User = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password
        }
        const result = await store.create(user);
        res.status(200).json(result).end();
    } catch(err) {
        res.status(400).send(err).end();
    }
})

export default users