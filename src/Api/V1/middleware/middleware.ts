import { sign, verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { config } from "dotenv";
import { successResponse } from "../lib/helpers/response/responseHandler";
const secretKey: string = process.env.ACCESS_TOKEN_KEY as string;
config();
function createToken(username: string) {
  try {
    return sign(username, secretKey) as string;
  } catch (error) {
    return error;
  }
}
function authenticateToken(req: Request, res: Response, next: NextFunction) {
  try {
    const authToken = req.headers["authorization"];
    const token = authToken && authToken.split(" ")[1];
    if (token == null)
      return successResponse(404, "No Token", [{ data: "" }], res);
    verify(token, process.env.ACCESS_TOKEN_KEY as string, (err, user) => {
      if (err)
        return successResponse(404, "Invalid Token", [{ data: "" }], res);

      next();
    });
  } catch (error) {
    res.send(error);
  }
}
export { createToken, authenticateToken };
