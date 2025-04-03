import { combineReducers } from "redux";
import todosReducer from "./slices/todosSlice";

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;
