import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();
const {
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_DB_TEST,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  ENV,
} = process.env;
let db;
let port;
if (ENV === 'test') {
  console.log('ENV IS TEST IS TRUE')
  db = POSTGRES_DB_TEST
} else {
  db = POSTGRES_DB
}
const client: Pool = new Pool({
  host: POSTGRES_HOST,
  database: db,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  port: POSTGRES_PORT as unknown as number,
});
console.log(ENV, db, port)
export default client;
