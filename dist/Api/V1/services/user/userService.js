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
const userLayer_1 = __importDefault(require("../../dataAccess/SQL/user/userLayer"));
exports.default = new (class userMobile {
    constructor() {
        this.getUser = (type) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!type) {
                    const userData = yield userLayer_1.default.user();
                    return userData;
                }
                else {
                    return { androidUser: "Android Ios User" };
                }
            }
            catch (error) {
                throw error.message;
            }
        });
        this.userType = (type) => __awaiter(this, void 0, void 0, function* () { });
    }
})();
//# sourceMappingURL=userService.js.map