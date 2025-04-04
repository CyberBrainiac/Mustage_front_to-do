import { I_CreateTodo, I_Todo } from "@/interfaces/todoInterfaces";
import getTestData from "@/utils/testData";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoState {
  items: I_Todo[];
  loading: boolean;
  error: string | null;
}

const initialState: TodoState = {
  items: getTestData(),
  loading: false,
  error: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<I_Todo>) => {
      state.items.push(action.payload);
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
    setItems: (state, action: PayloadAction<I_Todo[]>) => {
      state.items = action.payload;
    },
    updateItem: (state, action: PayloadAction<{ id: string; todo: I_CreateTodo }>) => {
      const { id, todo } = action.payload;
      const index = state.items.findIndex(item => item.id === id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...todo };
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { deleteItem, addItem, setItems, updateItem, setLoading, setError } =
  todosSlice.actions;
export default todosSlice.reducer;
