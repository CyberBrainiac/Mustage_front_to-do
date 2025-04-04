import { I_CreateTodo, I_Filters, I_Todo } from "@/interfaces/todoInterfaces";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4201/api";
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const api = {
  addTodo: async (todo: I_CreateTodo): Promise<I_Todo> => {
    try {
      const response = await apiClient.post("/todos", todo);
      return response.data;
    } catch (error) {
      throw new Error("Failed to add todo");
    }
  },

  getTodo: async (filters: I_Filters): Promise<I_Todo[]> => {
    try {
      const params = new URLSearchParams();
      if (filters.status) params.append("status", filters.status);
      if (filters.searchStr) params.append("search", filters.searchStr);

      const response = await apiClient.get(`/todos`, { params });
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch todo");
    }
  },

  editTodo: async (id: string, todo: I_CreateTodo): Promise<void> => {
    try {
      await apiClient.patch(`/todos/${id}`, todo);
    } catch (error) {
      throw new Error("Failed to update todo");
    }
  },

  deleteTodo: async (id: string): Promise<void> => {
    try {
      await apiClient.delete(`/todos/${id}`);
    } catch (error) {
      throw new Error("Failed to delete todo");
    }
  },
};

export default api;
