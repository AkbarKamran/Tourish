import { Router, Request, Response, NextFunction } from "express";
const router = Router();
router.post("/test", (req: Request, res: Response) => {
  res.status(200).json({ status: "success", message: "Welcome Tourish" });
});

export default router;
