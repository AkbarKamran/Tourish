"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controllers/user/userController"));
const middleware_1 = require("../middleware/middleware");
const router = (0, express_1.Router)();
router.get("/user", middleware_1.authenticateToken, userController_1.default.getUser);
exports.default = router;
//# sourceMappingURL=user.js.map