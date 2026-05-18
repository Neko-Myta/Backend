import { Request, Response, NextFunction } from "express";
import { logger } from "../lib/logger";
export const privateGuard = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization;
  logger.info("Private Guard middleware - check");
  if (token !== "qwerty007") {
    return res.status(401).json({ error: "Unathorized" });
  }
  next();
};