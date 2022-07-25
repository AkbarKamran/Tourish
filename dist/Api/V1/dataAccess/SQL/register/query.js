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
                let selectQuery = `SELECT u.email FROM dbo.neRegisterUser AS u where email = '${username}'`;
                const dbData = yield baseQuery_1.default.runQuery(selectQuery);
                return dbData;
            }
            catch (error) {
                throw error;
            }
        });
        this.registerAdmin = (email, username, account_type, password, phone, imageUrl) => __awaiter(this, void 0, void 0, function* () {
            try {
                let insertQuery = `INSERT INTO dbo.neRegisterUser(email,username,account_type,password,phone,profile_image) VALUES('${email}','${username}',${account_type}, '${password}','${phone}','${imageUrl}') SELECT SCOPE_IDENTITY() as id `;
                let id = yield baseQuery_1.default.runQuery(insertQuery);
                let dbData = yield baseQuery_1.default.runQuery(`SELECT  profile_image,phone,email, username,account_type from dbo.neRegisterUser where id = ${id[0].id}`);
                return dbData;
            }
            catch (error) {
                throw error;
            }
        });
    }
})();
//# sourceMappingURL=query.js.map