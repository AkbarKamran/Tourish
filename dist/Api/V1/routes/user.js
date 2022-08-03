"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controllers/user/userController"));
const multer_1 = __importDefault(require("../lib/helpers/ImageUpload/multer"));
const router = (0, express_1.Router)();
router.post("/tour", 
// authenticateToken,
//   uploadMulter.array("bus_images"),
multer_1.default.fields([
    {
        name: "bus_images",
    },
    {
        name: "tour_images",
    },
]), userController_1.default.getTourDetails);
exports.default = router;
//# sourceMappingURL=user.js.map