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

const client: Pool = new Pool({
  host: POSTGRES_HOST,
  database: ENV === "test" ? POSTGRES_DB_TEST : POSTGRES_DB,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  port: (POSTGRES_PORT as unknown) as number,
});
console.log(ENV)
export default client;
