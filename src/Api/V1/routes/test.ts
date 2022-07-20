import { Router, Request, Response, NextFunction } from "express";
const router = Router();
router.get("/test", (req: Request, res: Response) => {
  res.status(200).json({ status: "success", message: "Welcome to Tourish" });
});

export default router;
