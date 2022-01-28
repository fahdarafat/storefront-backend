"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var bcrypt_1 = __importDefault(require("bcrypt"));
var _a = process.env, SALT_ROUNDS = _a.SALT_ROUNDS, BCRYPT_SECRET = _a.BCRYPT_SECRET;
var hashPassword = function (req, res, next) {
    try {
        var password = req.body.password;
        res.locals.password = bcrypt_1["default"].hashSync(password + BCRYPT_SECRET, parseInt(SALT_ROUNDS));
        next();
    }
    catch (err) {
        res.status(400).json(err);
    }
};
exports["default"] = hashPassword;
