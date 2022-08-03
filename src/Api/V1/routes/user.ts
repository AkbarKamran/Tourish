import { Router } from "express";
import Tour from "../controllers/user/userController";
import { authenticateToken } from "../middleware/middleware";
import uploadMulter from "../lib/helpers/ImageUpload/multer";
const router = Router();

router.post(
  "/tour",
  // authenticateToken,
  //   uploadMulter.array("bus_images"),
  uploadMulter.fields([
    {
      name: "bus_images",
    },
    {
      name: "tour_images",
    },
  ]),
  Tour.getTourDetails
);
export default router;
