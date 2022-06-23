"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const register_1 = __importDefault(require("./register"));
const login_1 = __importDefault(require("./login"));
const user_1 = __importDefault(require("./user"));
const router = [register_1.default, login_1.default, user_1.default];
const registerRouter = (app) => {
    router.map((route) => {
        app.use("/api", route);
    });
};
exports.default = registerRouter;
//# sourceMappingURL=router.js.map