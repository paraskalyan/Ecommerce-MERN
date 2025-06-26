import { create } from "zustand";
import { toast } from "react-hot-toast";
import axiosInstance from "../lib/axios";
import axios from "axios";
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

  getProductsByCategory: async (category) => {
    set({ loading: true });
    try {
      const res = await axiosInstance.get(`/products/category/${category}`);
      set({ products: res.data.products });
    } catch (error) {
      console.error("Error fetching products by category:", error);
      toast.error(
        error.response?.data?.message ||
          "Failed to fetch products by category. Please try again."
      );
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
            ? { ...product, isFeatured: res.data.isFeatured }
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

  deleteProduct: async (productId) => {
    set({ loading: true });
    try {
      await axiosInstance.delete(`/products/${productId}`);
      set((state) => ({
        products: state.products.filter((product) => product._id !== productId),
      }));
      toast.success("Product deleted successfully!");
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Failed to delete product. Please try again.");
    } finally {
      set({ loading: false });
    }
  },

  fetchFeaturedProducts: async () => {
    set({ loading: true });
    try {
      const response = await axiosInstance.get("/products/featured");
      set({ products: response.data, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch products", loading: false });
      console.log("Error fetching featured products:", error);
    }
  },
}));

export default useProductStore;
