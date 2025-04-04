import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addItem,
  deleteItem,
  setError,
  setItems,
  setLoading,
  updateItem,
} from "../slices/todosSlice";
import { I_CreateTodo, I_Filters } from "@/interfaces/todoInterfaces";
import api from "@/axios/api";

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

export const getTodoAsync = createAsyncThunk(
  "todos/getItem",
  async ({ filters }: { filters: I_Filters }, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const todos = await api.getTodo(filters);
      dispatch(setItems(todos));
      return todos;
    } catch (error) {
      dispatch(setError((error as Error).message));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const editTodoAsync = createAsyncThunk(
  "todos/editItem",
  async ({ id, todo }: { id: string; todo: I_CreateTodo }, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      await api.editTodo(id, todo);
      dispatch(updateItem({ id, todo }));
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
