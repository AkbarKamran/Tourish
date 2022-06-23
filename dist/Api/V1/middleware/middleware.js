"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = exports.createToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv_1 = require("dotenv");
const responseHandler_1 = require("../lib/helpers/response/responseHandler");
const secretKey = process.env.ACCESS_TOKEN_KEY;
(0, dotenv_1.config)();
function createToken(username) {
    try {
        return (0, jsonwebtoken_1.sign)(username, secretKey);
    }
    catch (error) {
        return error;
    }
}
exports.createToken = createToken;
function authenticateToken(req, res, next) {
    try {
        const authToken = req.headers["authorization"];
        const token = authToken && authToken.split(" ")[1];
        if (token == null)
            return (0, responseHandler_1.successResponse)(404, "No Token", [{ data: "" }], res);
        (0, jsonwebtoken_1.verify)(token, process.env.ACCESS_TOKEN_KEY, (err, user) => {
            if (err)
                return (0, responseHandler_1.successResponse)(404, "Invalid Token", [{ data: "" }], res);
            next();
        });
    }
    catch (error) {
        res.send(error);
    }
}
exports.authenticateToken = authenticateToken;
//# sourceMappingURL=middleware.js.map