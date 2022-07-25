import { Request, Response, NextFunction } from "express";
import registerValidation from "./validation";
import registerService from "../../services/register/registerService";
import {
  dbError,
  internalServerError,
  successResponse,
} from "../../lib/helpers/response/responseHandler";
import uploadImage from "../../lib/helpers/ImageUpload/upload";

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
          const cloudImageUrl: any = await uploadImage(imageUrl);
          let data = await registerService.serviceRegisterAdmin(
            email,
            username,
            account_type,
            password,
            phone,
            cloudImageUrl.url
          );
          successResponse(200, "success", data, res);
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
