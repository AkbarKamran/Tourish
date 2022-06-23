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
        this.login = (username, password) => __awaiter(this, void 0, void 0, function* () {
            try {
                const adminExist = yield query_1.default.isAdminExist(username);
                return adminExist.length
                    ? this.adminExists(password, username)
                    : {
                        valid: false,
                        username: "",
                        token: "",
                        message: "please enter the valid username!",
                    };
            }
            catch (error) {
                throw error;
            }
        });
        this.adminExists = (password, username) => __awaiter(this, void 0, void 0, function* () {
            try {
                const dbHash = yield query_1.default.adminPasswordVerification(username, password);
                return this.verifyPassword(password, dbHash, username);
            }
            catch (error) {
                throw error;
            }
        });
        this.verifyPassword = (password, dbHash, username) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (yield (0, hash_1.verifyHash)(password, dbHash)) {
                    const token = yield (0, middleware_1.createToken)(username);
                    let data = {
                        valid: true,
                        data: username,
                        token: token,
                        message: "welcome",
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