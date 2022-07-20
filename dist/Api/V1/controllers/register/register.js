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
exports.loginController = void 0;
class loginController {
    constructor() {
        this.registerAdmin = (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log(JSON.stringify(req.file));
            res.json(req.file);
            // try {
            //   const { username, password } = req.body;
            //   const validCheck = await registerValidation.validRegisterAdmin(
            //     username,
            //     password
            //   );
            //   if (validCheck)
            //     successResponse(400, "Invalid Parameter", [{ valid: false }], res);
            //   else {
            //     try {
            //       let data = await registerService.serviceRegisterAdmin(
            //         username,
            //         password
            //       );
            //       successResponse(200, "success", [data], res);
            //     } catch (error: any) {
            //       dbError([{ valid: false, data: error.message }], res);
            //     }
            //   }
            // } catch (error: any) {
            //   internalServerError(
            //     "Server Error",
            //     [{ valid: false, data: error.message }],
            //     res
            //   );
            // }
        });
    }
}
exports.loginController = loginController;
//# sourceMappingURL=register.js.map