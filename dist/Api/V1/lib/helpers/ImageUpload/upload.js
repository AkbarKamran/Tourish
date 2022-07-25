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
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const path = require("path");
const config = require("./config.json");
const uploadImage = (url, filename) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        cloudinary.config(config);
        console.log("This is path pof image", path.join(__dirname, `/uploadProfile/${filename}`));
        cloudinary.uploader
            .upload(path.join(__dirname, `/uploadProfile/${filename}`))
            .then((result) => {
            // console.log(__dirname);
            // fs.unlinkSync(path.join(__dirname, `/uploadProfile/${filename}`));
            resolve(result);
        })
            .catch((error) => {
            console.log(error);
            reject(error);
        });
    });
});
exports.default = uploadImage;
//# sourceMappingURL=upload.js.map