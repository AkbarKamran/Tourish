import { Request, Response, NextFunction } from "express";
import {
  successResponse,
  internalServerError,
  dbError,
} from "../../lib/helpers/response/responseHandler";
import userMobile from "../../services/user/userService";
import validation from "./validation";
import { akbar } from "../../lib/helpers/helper";
export default new (class userNeeo {
  public getUser = async (req: Request, res: Response) => {
    try {
      const { type } = req.query;
      const validCheck = await validation.validUser(type);
      if (validCheck) {
        try {
          const allUser = await userMobile.getUser();
          successResponse(200, "All Users", [{ allUser: allUser }], res);
        } catch (error) {
          dbError(error, res);
        }
      } else {
        const userType = await validation.typeOfUser(type);
        if (userType.valid) {
          successResponse(200, "Users", [{ data: userType.type }], res);
        } else {
          return successResponse(400, "Invalid Parameter", [{ data: "" }], res);
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
})();
