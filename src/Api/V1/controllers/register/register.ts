import { Request, Response, NextFunction } from "express";
import registerValidation from "./validation";
import registerService from "../../services/register/registerService";
import {
  dbError,
  internalServerError,
  successResponse,
} from "../../lib/helpers/response/responseHandler";

export class loginController {
  registerAdmin = async (req: Request, res: Response) => {
    try {
      const { email, username, account_type, password, phone } = req.body;
      const validCheck = await registerValidation.validRegisterAdmin(
        email,
        username,
        account_type,
        password,
        phone
      );
      if (validCheck)
        successResponse(400, "Invalid Parameter", [{ valid: false }], res);
      else {
        try {
          const imageUrl: any = req.file?.path;
          let data = await registerService.serviceRegisterAdmin(
            email,
            username,
            account_type,
            password,
            phone,
            imageUrl
          );
          successResponse(200, "success", [data], res);
        } catch (error: any) {
          dbError([{ valid: false, data: error.message }], res);
        }
      }
    } catch (error: any) {
      internalServerError(
        "Server Error",
        [{ valid: false, data: error.message }],
        res
      );
    }
  };
}
