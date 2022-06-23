import { Router } from "express";
import { loginController } from "../controllers/register/register";
let registerLogin = new loginController();

const router = Router();

router.post("/register", registerLogin.registerAdmin);

export default router;
