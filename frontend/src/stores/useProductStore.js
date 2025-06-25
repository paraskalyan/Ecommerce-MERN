import { create } from "zustand";
import { toast } from "react-hot-toast";
import axiosInstance from "../lib/axios";
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

  toggleFeaturedProduct: async (productId) => {
    set({ loading: true });
    try {
      const res = await axiosInstance.patch(`/products/${productId}`);
      set((state) => ({
        products: state.products.map((product) =>
          product._id === productId
            ? { ...product, featured: res.data.featured }
            : product
        ),
      }));
      toast.success("Product featured status updated successfully!");
    } catch (error) {
      console.error("Error toggling featured product:", error);
      toast.error("Failed to update featured status. Please try again.");
    } finally {
      set({ loading: false });
    }
  },
}));

export default useProductStore;
