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
const baseQuery_1 = __importDefault(require("../common/baseQuery"));
exports.default = new (class loginQuery {
    constructor() {
        this.isAdminExist = (username) => __awaiter(this, void 0, void 0, function* () {
            try {
                let selectQuery = `SELECT u.email FROM dbo.neRegisterAdmin AS u where email = '${username}'`;
                const dbData = yield baseQuery_1.default.runQuery(selectQuery);
                return dbData;
            }
            catch (error) {
                throw error;
            }
        });
        this.adminPasswordVerification = (username, password) => __awaiter(this, void 0, void 0, function* () {
            try {
                const selectQuery = `SELECT isNull(u.password,'') as password FROM dbo.neRegisterAdmin AS u where email = '${username}'`;
                return (yield baseQuery_1.default.runQuery(selectQuery))[0]
                    .password;
            }
            catch (error) {
                throw error;
            }
        });
    }
})();
//# sourceMappingURL=query.js.map