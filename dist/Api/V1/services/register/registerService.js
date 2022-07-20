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
const helper_1 = require("../../lib/helpers/helper");
exports.default = new (class registerService {
    constructor() {
        this.serviceRegisterAdmin = (email, username, account_type, password, phone, imageUrl) => __awaiter(this, void 0, void 0, function* () {
            try {
                let adminExist = yield query_1.default.isAdminExist(email);
                console.log("Admin Exist", adminExist);
                return !adminExist.length
                    ? this.registerAdmin(email, username, account_type, password, phone, imageUrl)
                    : {
                        valid: false,
                        username: username,
                        message: "User Already Exist",
                    };
            }
            catch (error) {
                throw error;
            }
        });
        this.registerAdmin = (email, username, account_type, password, phone, imageUrl) => __awaiter(this, void 0, void 0, function* () {
            try {
                let account = 0;
                if (account_type.toLowerCase() === "driver") {
                    account = helper_1.User.Driver;
                }
                else if (account_type.toLowerCase() === "company") {
                    account = helper_1.User.Company;
                }
                else if (account_type.toLowerCase() === "manager") {
                    account = helper_1.User.Manager;
                }
                yield query_1.default.registerAdmin(email, username, account, password, phone, imageUrl);
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