"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var products_1 = __importDefault(require("./products"));
var users_1 = __importDefault(require("./users"));
var orders_1 = __importDefault(require("./orders"));
var routes = express_1["default"].Router();
routes.use('/products', products_1["default"]);
routes.use('/users', users_1["default"]);
routes.use('/orders', orders_1["default"]);
exports["default"] = routes;
