"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/test", (req, res) => {
    res.status(200).json({ status: "success", message: "Welcome to Tourish" });
});
exports.default = router;
//# sourceMappingURL=test.js.map