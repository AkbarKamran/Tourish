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
Object.defineProperty(exports, "__esModule", { value: true });
const sqlConnection = require("../../../../../config/connection/connection");
exports.default = new (class baseQuery {
    constructor() {
        this.runQuery = (query, columns = {}) => __awaiter(this, void 0, void 0, function* () {
            try {
                return new Promise((resolve, reject) => {
                    sqlConnection
                        .getSqlConnection()
                        .then((pool) => {
                        let req = pool.request();
                        Object.entries(columns).length === 0
                            ? req.query(query, (error, record) => {
                                if (error)
                                    reject(error);
                                return resolve(record.recordsets[0]);
                            })
                            : req.query(query, columns, (error, record) => {
                                if (error)
                                    reject(error);
                                return resolve(record.recordsets[0]);
                            });
                    })
                        .catch((err) => {
                        return reject(err);
                    });
                });
            }
            catch (error) {
                throw error;
            }
        });
    }
})();
//# sourceMappingURL=baseQuery.js.map