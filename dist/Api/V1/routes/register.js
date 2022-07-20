"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const register_1 = require("../controllers/register/register");
let registerLogin = new register_1.loginController();
const multer_1 = __importDefault(require("multer"));
const path = require("path");
// var storage = multer.diskStorage({
//   destination: function (req: any, file: any, cb: any) {
//     cb(null, "../../../public/profile");
//   },
//   filename: function (req: any, file: any, cb: any) {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });
// var upload = multer({ storage: storage });
const router = (0, express_1.Router)();
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        console.log(__dirname);
        cb(null, path.join(__dirname, "/uploads/"));
    },
    filename: function (req, file, cb) {
        console.log("Here", file.originalname);
        cb(null, file.originalname);
    },
});
// const fileFilter = (req: any, file: any, cb: any) => {
//   if (
//     file.mimetype === "image/jpg" ||
//     file.mimetype === "image/jpeg" ||
//     file.mimetype === "image/png"
//   ) {
//     cb(null, true);
//   } else {
//     cb(new Error("Image uploaded is not of type jpg/jpeg or png"), false);
//   }
// };
const upload = (0, multer_1.default)({ storage: storage });
router.post("/register", upload.single("image"), registerLogin.registerAdmin);
exports.default = router;
//# sourceMappingURL=register.js.map