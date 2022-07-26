import { Router, Request, Response, NextFunction } from "express";
import uploadImage from "../lib/helpers/ImageUpload/upload";

import uploadMulter from "../lib/helpers/ImageUpload/multer";
const router = Router();
router.get("/test", (req: Request, res: Response) => {
  res.status(200).json({ status: "success", message: "Welcome to Tourish" });
});
router.post(
  "/image",
  uploadMulter.single("profile_image"),
  async (req: Request, res: Response) => {
    try {
      const imageUrl: any = req.file?.path;

      // console.log("This is image File Path in Server", imageUrl);
      const cloudinaryImageUrl = await uploadImage(
        imageUrl,
        req.file?.filename
      );
      // console.log("This is cloud Url", JSON.stringify(cloudinaryImageUrl));

      res.status(200).json({ status: "success", data: cloudinaryImageUrl });
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: "error", data: error });
    }
  }
);
router.get("/genderChecker", async (req: Request, res: Response) => {
  const name = req.query.name;
  const axios = require("axios");
  const options = {
    method: "GET",
    url: `https://api.genderize.io/?name=${name}`,
  };

  axios
    .request(options)
    .then(function (response: any) {
      res.json(response.data);
    })
    .catch(function (error: any) {
      console.error(error);
      res.send(error);
    });
});

export default router;
