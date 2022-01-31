import client from "../database";

export type Order = {
    id?: number,
    is_complete?: boolean,
    userID: string,
}
export class OrderStore {
    async index(): Promise<Order[]> {
        try {
            const conn = await client.connect();
            const sql = 'SELECT * FROM orders';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        } catch (err) {
            throw new Error(`Could not get orders: ${err}`);
        }
    }
    async show(id: string): Promise<Order> {
        try {
            const conn = await client.connect();
            const sql = 'SELECT * FROM orders WHERE id=($1)';
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`Could not get order id ${id}, Error: ${err}`);
        }
    }
    async create(order: Order): Promise<Order> {
        try {
            const conn = await client.connect();
            const sql = 'INSERT INTO orders (user_id) VALUES ($1)RETURNING *';
            const result = await conn.query(sql, [order.userID]);
            conn.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`Could not create order, Error: ${err}`);
        }
    }
    async showByUserID(user_id: string): Promise<Order> {
        try {
            const conn = await client.connect();
            const sql = 'SELECT * FROM orders WHERE user_id=($1)';
            const result = await conn.query(sql, [user_id]);
            conn.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`Could not fetch order for user_id ${user_id}, Error: ${err}`)
        }
    }
    async completeOrder(id: string): Promise<Order> {
        try {
            const conn = await client.connect();
            const sql = 'UPDATE orders SET is_complete=true WHERE id=($1) RETURNING *';
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`Could not complete order ${id}, Error: ${err}`)
        }
    }
}