"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./Api/V1/routes/router"));
const cors_1 = __importDefault(require("cors"));
class App {
    //   public Port: any = process.env.PORT;
    constructor() {
        this.app = (0, express_1.default)();
        this.initialize();
        (0, router_1.default)(this.app);
    }
    initialize() {
        this.app.use((0, cors_1.default)({ credentials: true, origin: true }));
        this.app.use(express_1.default.json());
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map