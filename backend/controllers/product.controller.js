import { redisClient } from "../lib/redis";
import Product from "../models/Product.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ products });
  } catch (error) {
    console.error("Error fetching products:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getFeaturedProducts = async (req, res) => {
  try {
    let featuredProducts = await redisClient.get("featured_products");
    if (featuredProducts) {
      return res
        .status(200)
        .json({ featuredProducts: JSON.parse(featuredProducts) });
    }

    featuredProducts = await Product.find({ isFeatured: true }).lean();

    await redisClient.set(
      "featured_products",
      JSON.stringify(featuredProducts)
    );

    res.status(200).json({ featuredProducts });
  } catch (error) {
    console.error("Error fetching featured products:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
