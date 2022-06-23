"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SQL_CONFIGURATION = require("../DatabaseConfig.json");
const SQL = require("mssql");
const helper_1 = require("../../Api/V1/lib/helpers/helper");
let connection = null;
const getSqlConnection = () => {
    try {
        return new Promise((resolve, reject) => {
            if (connection) {
                resolve(connection);
            }
            else {
                SQL.connect(SQL_CONFIGURATION)
                    .then((pool) => {
                    connection = pool;
                    (0, helper_1.akbar)("New connection in connection.ts");
                    resolve(connection);
                })
                    .catch((error) => {
                    reject(error);
                });
            }
        });
    }
    catch (err) {
        console.log("error while connecting db", err);
        return err;
    }
};
const closeConnection = () => {
    if (connection) {
        connection.close();
        connection = null;
        console.log("Connection Close");
    }
};
module.exports = { getSqlConnection, closeConnection };
//# sourceMappingURL=connection.js.map