"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const register_1 = require("../controllers/register/register");
let registerLogin = new register_1.loginController();
const router = (0, express_1.Router)();
router.post("/register", registerLogin.registerAdmin);
exports.default = router;
//# sourceMappingURL=register.js.map