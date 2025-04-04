import style from "./todoList.module.scss";
import React from "react";
import { useAppDispatch, useAppSelector } from "@hooks/redux";

import TodoItem from "./TodoItem";
import { I_Todo, I_TodoList } from "@/interfaces/todoInterfaces";
import { editTodoAsync } from "@/redux/thunks/todoThunks";

const TodoList: React.FC<I_TodoList> = ({ openEditPopup }) => {
  const { items, error } = useAppSelector(state => state.todos);
  const dispatch = useAppDispatch();
  const sortedItems = [...items].sort((a, b) => b.dateCreate - a.dateCreate);
  const activeItems = sortedItems.filter(item => !item.status);
  const completedItems = items.filter(item => item.status);
  const mergedItems = [...activeItems, ...completedItems];

  // Toggle status handler
  const handleStatusChange = (todo: I_Todo) => {
    const switchStatus = { ...todo, status: !todo.status };
    dispatch(editTodoAsync({ id: todo.id, todo: switchStatus }));
  };

  const onDoubleClick = (todo: I_Todo) => {
    openEditPopup(todo);
  };

  return (
    <div className={style.container}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {items[0] ? " " : <h2 className={style.saveText}>Create your first to do</h2>}
      {mergedItems.map(todo => (
        <TodoItem
          key={todo.id}
          item={todo}
          onStatusChange={handleStatusChange}
          onDoubleClick={onDoubleClick}
        />
      ))}
    </div>
  );
};

export default TodoList;
