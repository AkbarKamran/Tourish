"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const register_1 = require("../controllers/register/register");
let registerLogin = new register_1.loginController();
const multer_1 = __importDefault(require("../lib/helpers/ImageUpload/multer"));
const router = (0, express_1.Router)();
router.post("/register", multer_1.default.single("profile_image"), registerLogin.registerAdmin);
exports.default = router;
//# sourceMappingURL=register.js.map