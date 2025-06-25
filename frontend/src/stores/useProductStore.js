import { create } from "zustand";
import { toast } from "react-hot-toast";
import axiosInstance from "../lib/axios";
import { getAllProducts } from "../../../backend/controllers/product.controller";
const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  loading: false,

  createProduct: async (product) => {
    set({ loading: true });
    try {
      const res = await axiosInstance.post("/products", product);
      set((state) => ({
        products: [...state.products, res.data],
      }));
      toast.success("Product created successfully!");
    } catch (error) {
      console.error("Error creating product:", error);
      toast.error("Failed to create product. Please try again.");
    } finally {
      set({ loading: false });
    }
  },

  getAllProducts: async () => {
    set({ loading: true });
    try {
      const res = await axiosInstance.get("/products");
      set({ products: res.data.products });
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Failed to fetch products. Please try again.");
    } finally {
      set({ loading: false });
    }
  },
}));

export default useProductStore;
