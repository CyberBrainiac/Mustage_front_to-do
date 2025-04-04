import { I_Filters } from "@/interfaces/todoInterfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: I_Filters = {
  status: "2",
  searchStr: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
    setSearchStr: (state, action: PayloadAction<string>) => {
      state.searchStr = action.payload;
    },
    resetFilters: state => {
      state.status = "";
      state.searchStr = "";
    },
    setAllFilters: (state, action: PayloadAction<I_Filters>) => {
      return action.payload;
    },
  },
});

export const { setStatus, setSearchStr, resetFilters, setAllFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
