import { createAsyncThunk } from "@reduxjs/toolkit";
import { addItem, deleteItem, setError, setLoading } from "../slices/todosSlice";
import { I_CreateTodo, I_Todo } from "@/interfaces/todoInterfaces";

const api = {
  addTodo: async (todo: I_CreateTodo): Promise<I_Todo> => {
    const response = await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    });
    if (!response.ok) throw new Error("Failed to add todo");
    return response.json();
  },
  deleteTodo: async (id: string): Promise<void> => {
    const response = await fetch(`/api/todos/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete todo");
  },
};

export const addTodoAsync = createAsyncThunk(
  "todos/addItem",
  async (todo: I_CreateTodo, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const newTodo = await api.addTodo(todo);
      dispatch(addItem(newTodo));
      return newTodo;
    } catch (error) {
      dispatch(setError((error as Error).message));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const deleteTodoAsync = createAsyncThunk(
  "todos/deleteItem",
  async (id: string, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      await api.deleteTodo(id);
      dispatch(deleteItem(id));
    } catch (error) {
      dispatch(setError((error as Error).message));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  }
);
