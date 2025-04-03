import style from "./todoList.module.scss";
import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "@hooks/redux";
import { addTodoAsync, deleteTodoAsync } from "@redux/thunks/todoThunks";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { items, loading, error } = useAppSelector(state => state.todos);
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    if (title.trim()) {
      dispatch(addTodoAsync({ title, description }));
      setTitle("");
      setDescription("");
    }
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTodoAsync(id));
  };

  // Edit todo handler (placeholder)
  const handleEdit = () => {
    console.log("Edit item:", title, description);
    // Implementation would go here
  };

  // Toggle status handler
  const handleStatusChange = (id: string) => {
    console.log("Change status:", id);
  };

  const onDoubleClick = (id: string) => {
    console.log("Double click:", id);
  };

  return (
    <div className={style.container}>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        <input value={title} onChange={e => setTitle(e.target.value)} disabled={loading} />
        <input
          value={description}
          onChange={e => setDescription(e.target.value)}
          disabled={loading}
        />
        <button onClick={handleAdd} disabled={loading}>
          {loading ? "Adding..." : "Add Todo"}
        </button>
      </div>

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
