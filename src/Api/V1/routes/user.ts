import { Router } from "express";
import userNeeo from "../controllers/user/userController";
import { authenticateToken } from "../middleware/middleware";
const router = Router();

router.get("/user", authenticateToken, userNeeo.getUser);
export default router;
