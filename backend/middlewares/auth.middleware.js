import User from "../models/User";
import jwt from "jsonwebtoken";
export const protectRoute = async (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;
    if (!accessToken) {
      return res.status(401).json({ message: "Unauthorized access" });
    }
    try {
      const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
      const user = await User.findById(decoded.userId).select("-password");
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      req.user = user;
      next();
    } catch (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Access token expired" });
      }
      throw err;
    }
  } catch (error) {
    console.error("Error in protectRoute middleware:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
