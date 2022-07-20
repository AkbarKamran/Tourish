import { Router } from "express";
import { Request, Response, NextFunction } from "express";
import { loginController } from "../controllers/register/register";
let registerLogin = new loginController();
import multer from "multer";
const path = require("path");

// var storage = multer.diskStorage({
//   destination: function (req: any, file: any, cb: any) {
//     cb(null, "../../../public/profile");
//   },
//   filename: function (req: any, file: any, cb: any) {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });
// var upload = multer({ storage: storage });
const router = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(__dirname);

    cb(null, path.join(__dirname, "/uploads/"));
  },

  filename: function (req: any, file: any, cb: any) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const fileFilter = (req: any, file: any, cb: any) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Image uploaded is not of type jpg/jpeg or png"), false);
  }
};
const upload = multer({ storage: storage, fileFilter: fileFilter });
router.post(
  "/register",
  upload.single("profile_image"),
  registerLogin.registerAdmin
);

export default router;
