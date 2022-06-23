"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbError = exports.internalServerError = exports.successResponse = void 0;
function successResponse(code, message, data, res) {
    res.status(code).send({
        header: {
            code: code.toString(),
            status: true,
            message: message,
        },
        body: data,
    });
}
exports.successResponse = successResponse;
function internalServerError(message, err, res) {
    res.status(500).send({
        header: {
            code: "500",
            status: true,
            message: message,
        },
        body: err,
    });
}
exports.internalServerError = internalServerError;
function dbError(err, res) {
    res.status(500).send({
        header: {
            code: "500",
            status: true,
            message: "sql_Db Error",
        },
        body: err,
    });
}
exports.dbError = dbError;
//# sourceMappingURL=responseHandler.js.map