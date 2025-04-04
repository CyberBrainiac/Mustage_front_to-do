import style from "./todoList.module.scss";
import React from "react";
import { useAppSelector } from "@hooks/redux";

import TodoItem from "./TodoItem";
import { I_Todo, I_TodoList } from "@/interfaces/todoInterfaces";

const TodoList: React.FC<I_TodoList> = ({ openEditPopup }) => {
  const { items, error } = useAppSelector(state => state.todos);

  // Toggle status handler
  const handleStatusChange = (id: string) => {
    console.log("Change status:", id);
  };

  const onDoubleClick = (todo: I_Todo) => {
    openEditPopup(todo);
  };

  return (
    <div className={style.container}>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {items.map(todo => (
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
