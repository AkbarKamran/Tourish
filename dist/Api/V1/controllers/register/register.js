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
exports.loginController = void 0;
const validation_1 = __importDefault(require("./validation"));
const registerService_1 = __importDefault(require("../../services/register/registerService"));
const responseHandler_1 = require("../../lib/helpers/response/responseHandler");
class loginController {
    constructor() {
        this.registerAdmin = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, password } = req.body;
                const validCheck = yield validation_1.default.validRegisterAdmin(username, password);
                if (validCheck)
                    (0, responseHandler_1.successResponse)(400, "Invalid Parameter", [{ valid: false }], res);
                else {
                    try {
                        let data = yield registerService_1.default.serviceRegisterAdmin(username, password);
                        (0, responseHandler_1.successResponse)(200, "success", [data], res);
                    }
                    catch (error) {
                        (0, responseHandler_1.dbError)([{ valid: false, data: error.message }], res);
                    }
                }
            }
            catch (error) {
                (0, responseHandler_1.internalServerError)("Server Error", [{ valid: false, data: error.message }], res);
            }
        });
    }
}
exports.loginController = loginController;
//# sourceMappingURL=register.js.map