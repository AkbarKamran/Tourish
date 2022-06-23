import { Request, Response, NextFunction } from "express";
import loginValidator from "./validation";
import loginService from "../../services/login/loginService";
import {
  successResponse,
  internalServerError,
  dbError,
} from "../../lib/helpers/response/responseHandler";

export default new (class loginController {
  login = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      const validCheck = await loginValidator.validLoginAdmin(
        username,
        password
      );
      if (validCheck)
        return successResponse(
          400,
          "Invalid Parameter",
          [{ valid: false }],
          res
        );
      try {
        const data = await loginService.login(username, password);
        successResponse(200, "success", [data], res);
      } catch (error: any) {
        dbError([{ valid: false, data: error.message }], res);
      }
    } catch (error: any) {
      internalServerError(
        "Server Error",
        [{ valid: false, data: error.message }],
        res
      );
    }
  };
})();
