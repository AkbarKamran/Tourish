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
const helper_1 = require("../../../lib/helpers/helper");
exports.default = new (class getUserFromDb {
    constructor() {
        this.user = (type) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!type) {
                    const query = `select COUNT(username) as totalNeeoUser from dbo.neUserExtension`;
                    const allUser = yield baseQuery_1.default.runQuery(query);
                    (0, helper_1.akbar)(allUser);
                    (0, helper_1.akbar)("abdul Rehman");
                    return allUser[0].totalNeeoUser;
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
})();
//# sourceMappingURL=userLayer.js.map