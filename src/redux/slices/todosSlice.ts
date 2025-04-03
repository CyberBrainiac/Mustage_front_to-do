import { I_Todo } from "@/interfaces/todoInterfaces";
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
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { deleteItem, addItem, setLoading, setError } = todosSlice.actions;
export default todosSlice.reducer;
