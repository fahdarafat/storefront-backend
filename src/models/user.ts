import Client from "../database";

export type User = {
    id?: number;
    firstName: string;
    lastName: string;
    password: string;
} 

export class UserStore {
    async index(): Promise<User[]> {
        try{
            const conn = await Client.connect();
            const sql = "SELECT * FROM users";
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        } catch(err) {
            throw new Error(`Cannot get users`);
        }
    }
    async show(id:string): Promise<User> {
        try {
            const conn = await Client.connect();
            const sql = "SELECT * FROM users WHERE id=($1)";
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        } catch(err) {
            throw new Error(`Could not get user id:${id}, Error: ${err}`);
        }
    }
    async create(user:User): Promise<User> {
        try {
            const conn = await Client.connect();
            const sql = "INSERT INTO users (firstName, lastName, password) VALUES($1, $2, $3) RETURNING *";
            const result = await conn.query(sql, [user.firstName, user.lastName, user.password]);
            conn.release();
            return result.rows[0];
        } catch(err) {
            throw new Error(`Could not create user, Error: ${err}`);
        }
    }
}