"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/test", (req, res) => {
    res.status(200).json({ status: "success", message: "Welcome Tourish" });
});
exports.default = router;
//# sourceMappingURL=test.js.map