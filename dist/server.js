"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const app_1 = __importDefault(require("./app"));
const apps = new app_1.default().app;
var httpServer = http.createServer(apps);
const PORT = process.env.PORT || 3000;
const start = () => {
    httpServer.listen(PORT, () => {
        console.log(`Server is running:  http://localhost:${PORT}`);
    });
};
start();
//# sourceMappingURL=server.js.map