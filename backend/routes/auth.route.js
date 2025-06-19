import express from "express";
import {
  login,
  logout,
  signup,
  refereshAccessToken,
} from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);
router.post("/refresh-token", refereshAccessToken);

export default router;
