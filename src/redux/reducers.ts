import { combineReducers } from "redux";
import todosReducer from "./slices/todosSlice";
import filtersReducer from "./slices/filtersSlice";

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
});

export default rootReducer;
