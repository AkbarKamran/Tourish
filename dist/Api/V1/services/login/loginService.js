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
const query_1 = __importDefault(require("../../dataAccess/SQL/login/query"));
const middleware_1 = require("../../middleware/middleware");
const hash_1 = require("../../lib/dataManipulations/hashing/hash");
exports.default = new (class loginService {
    constructor() {
        this.login = (email, password) => __awaiter(this, void 0, void 0, function* () {
            try {
                const adminExist = yield query_1.default.isAdminExist(email);
                return adminExist.length
                    ? this.adminExists(adminExist, password)
                    : {
                        valid: false,
                        token: "",
                        message: "Please enter the valid email!",
                    };
            }
            catch (error) {
                throw error;
            }
        });
        this.adminExists = (UserExists, password) => __awaiter(this, void 0, void 0, function* () {
            try {
                const dbHash = yield query_1.default.adminPasswordVerification(UserExists[0].email, UserExists[0].password);
                return this.verifyPassword(UserExists, password, dbHash);
            }
            catch (error) {
                throw error;
            }
        });
        this.verifyPassword = (UserExists, password, dbHash) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (yield (0, hash_1.verifyHash)(password, dbHash)) {
                    const token = yield (0, middleware_1.createToken)(UserExists[0].email);
                    let data = {
                        valid: true,
                        token: token,
                        id: UserExists[0].ID,
                        email: UserExists[0].email,
                        username: UserExists[0].username,
                        account_type: UserExists[0].account_type,
                        phone: UserExists[0].phone,
                        profile_image: UserExists[0].profile_image,
                    };
                    return data;
                }
                else {
                    return {
                        valid: false,
                        username: "",
                        token: "",
                        message: "Invalid Password",
                    };
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
})();
//# sourceMappingURL=loginService.js.map