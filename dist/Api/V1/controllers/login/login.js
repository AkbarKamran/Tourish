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
const validation_1 = __importDefault(require("./validation"));
const loginService_1 = __importDefault(require("../../services/login/loginService"));
const responseHandler_1 = require("../../lib/helpers/response/responseHandler");
exports.default = new (class loginController {
    constructor() {
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                // console.log(email, password);
                const validCheck = yield validation_1.default.validLoginAdmin(email, password);
                if (validCheck)
                    return (0, responseHandler_1.successResponse)(400, "Invalid Parameter", [{ valid: false }], res);
                try {
                    const data = yield loginService_1.default.login(email, password);
                    (0, responseHandler_1.successResponse)(200, "success", data, res);
                }
                catch (error) {
                    (0, responseHandler_1.dbError)([{ valid: false, data: error.message }], res);
                }
            }
            catch (error) {
                (0, responseHandler_1.internalServerError)("Server Error", [{ valid: false, data: error.message }], res);
            }
        });
    }
})();
//# sourceMappingURL=login.js.map