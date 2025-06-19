export const adminRoute = async (req, res, next) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).json({ message: "Unauthorized access" });
    }
    if (user.role !== "admin") {
      return res.status(403).json({ message: "Forbidden: Admins only" });
    }
    next();
  } catch (error) {
    console.error("Error in adminRoute middleware:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
