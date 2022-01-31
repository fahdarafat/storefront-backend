"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var pg_1 = require("pg");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
var _a = process.env, POSTGRES_HOST = _a.POSTGRES_HOST, POSTGRES_DB = _a.POSTGRES_DB, POSTGRES_DB_TEST = _a.POSTGRES_DB_TEST, POSTGRES_PORT = _a.POSTGRES_PORT, POSTGRES_USER = _a.POSTGRES_USER, POSTGRES_PASSWORD = _a.POSTGRES_PASSWORD, ENV = _a.ENV;
var db;
var port;
if (ENV === 'test') {
    console.log('ENV IS TEST IS TRUE');
    db = POSTGRES_DB_TEST;
}
else {
    db = POSTGRES_DB;
}
var client = new pg_1.Pool({
    host: POSTGRES_HOST,
    database: db,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    port: POSTGRES_PORT
});
console.log(ENV, db, port);
exports["default"] = client;
