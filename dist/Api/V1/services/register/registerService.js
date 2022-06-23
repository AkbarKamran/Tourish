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
const query_1 = __importDefault(require("../../dataAccess/SQL/register/query"));
exports.default = new (class registerService {
    constructor() {
        this.serviceRegisterAdmin = (username, password) => __awaiter(this, void 0, void 0, function* () {
            try {
                let adminExist = yield query_1.default.isAdminExist(username);
                return !adminExist.length
                    ? this.registerAdmin(username, password)
                    : {
                        valid: false,
                        username: username,
                        message: "Username Already Exist",
                    };
            }
            catch (error) {
                throw error;
            }
        });
        this.registerAdmin = (username, password) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield query_1.default.registerAdmin(username, password);
                return {
                    valid: true,
                    username: username,
                    message: "Username Registered",
                };
            }
            catch (error) {
                throw error;
            }
        });
    }
})();
//# sourceMappingURL=registerService.js.map