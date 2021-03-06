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
const responseHandler_1 = require("../../lib/helpers/response/responseHandler");
const userService_1 = __importDefault(require("../../services/user/userService"));
const validation_1 = __importDefault(require("./validation"));
exports.default = new (class userNeeo {
    constructor() {
        this.getUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { type } = req.query;
                const validCheck = yield validation_1.default.validUser(type);
                if (validCheck) {
                    try {
                        const allUser = yield userService_1.default.getUser();
                        (0, responseHandler_1.successResponse)(200, "All Users", [{ allUser: allUser }], res);
                    }
                    catch (error) {
                        (0, responseHandler_1.dbError)(error, res);
                    }
                }
                else {
                    const userType = yield validation_1.default.typeOfUser(type);
                    if (userType.valid) {
                        (0, responseHandler_1.successResponse)(200, "Users", [{ data: userType.type }], res);
                    }
                    else {
                        return (0, responseHandler_1.successResponse)(400, "Invalid Parameter", [{ data: "" }], res);
                    }
                }
            }
            catch (error) {
                (0, responseHandler_1.internalServerError)("Server Error", [{ valid: false, data: error.message }], res);
            }
        });
    }
})();
//# sourceMappingURL=userController.js.map