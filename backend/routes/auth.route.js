import express from "express";
import {
  login,
  logout,
  signup,
  refereshAccessToken,
  getProfile,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);
router.post("/refresh-token", refereshAccessToken);
router.get("/profile", protectRoute, getProfile);

export default router;
