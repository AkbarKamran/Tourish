"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const upload_1 = __importDefault(require("../lib/helpers/ImageUpload/upload"));
const multer_1 = __importDefault(require("../lib/helpers/ImageUpload/multer"));
const router = (0, express_1.Router)();
router.get("/test", (req, res) => {
    res.status(200).json({ status: "success", message: "Welcome to Tourish" });
});
router.post("/image", multer_1.default.single("profile_image"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const imageUrl = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path;
        // console.log("This is image File Path in Server", imageUrl);
        const cloudinaryImageUrl = yield (0, upload_1.default)(imageUrl, (_b = req.file) === null || _b === void 0 ? void 0 : _b.filename);
        // console.log("This is cloud Url", JSON.stringify(cloudinaryImageUrl));
        res.status(200).json({ status: "success", data: cloudinaryImageUrl });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ status: "error", data: error });
    }
}));
exports.default = router;
//# sourceMappingURL=test.js.map