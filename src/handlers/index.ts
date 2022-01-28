import express from 'express'
import products from './products';
import users from './users';
import orders from './orders'

const routes = express.Router();

routes.use('/products', products);
routes.use('/users', users);
routes.use('/orders', orders);

export default routes