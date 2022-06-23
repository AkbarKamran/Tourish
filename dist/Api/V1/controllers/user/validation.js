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
exports.default = new (class userValidation {
    constructor() {
        this.validUser = (type) => __awaiter(this, void 0, void 0, function* () {
            return !!type && typeof type === "string" ? false : true;
        });
        this.typeOfUser = (type) => __awaiter(this, void 0, void 0, function* () {
            if (type.toString().toLowerCase() === "android") {
                return { type: "android", valid: true };
            }
            else if (type.toString().toLowerCase() === "ios") {
                return { type: "ios", valid: true };
            }
            else {
                return { valid: false };
            }
        });
    }
})();
//# sourceMappingURL=validation.js.map