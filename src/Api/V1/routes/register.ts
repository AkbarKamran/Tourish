import { Router } from "express";
import { Request, Response, NextFunction } from "express";
import { loginController } from "../controllers/register/register";
let registerLogin = new loginController();

import uploadMulter from "../lib/helpers/ImageUpload/multer";
const router = Router();

router.post(
  "/register",
  uploadMulter.single("profile_image"),
  registerLogin.registerAdmin
);

export default router;
