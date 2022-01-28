"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./handlers/index"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1["default"])();
var address = "0.0.0.0:3000";
app.use((0, cors_1["default"])());
app.use(express_1["default"].json());
app.use('/', index_1["default"]);
app.get('/', function (req, res) {
    res.send('Hello World!!!');
});
app.listen(3000, function () {
    console.log("starting app on: ".concat(address));
});
