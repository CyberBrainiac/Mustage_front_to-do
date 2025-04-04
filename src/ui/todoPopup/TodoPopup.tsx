import React, { useState, useEffect, useRef, useCallback } from "react";
import style from "./todoPopup.module.scss";
import { I_TodoPopupProps } from "@/interfaces/todoInterfaces";
import { useAppDispatch } from "@/hooks/redux";
import { addTodoAsync, deleteTodoAsync, editTodoAsync } from "@/redux/thunks/todoThunks";

const TodoPopup: React.FC<I_TodoPopupProps> = ({ isOpen, onClose, todo, isEditMode }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState("");
  const popupRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (todo && isOpen) {
      setTitle(todo.title);
      setDescription(todo.description || "");
    } else if (!isEditMode && isOpen) {
      // Reset fields in create mode
      setTitle("");
      setDescription("");
    }
    setTitleError("");
  }, [todo, isOpen, isEditMode]);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        onClose();
      }
    },
    [popupRef, onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  const validateTitle = () => {
    if (title.trim() === "") {
      setTitleError("Title cannot be empty");
      return false;
    }
    if (title.length > 40) {
      setTitleError("Title cannot exceed 40 characters");
      return false;
    }
    setTitleError("");
    return true;
  };

  const validateDescription = () => {
    return description.length <= 150;
  };

  const handleEdit = async () => {
    if (validateTitle() && validateDescription() && todo) {
      const editTodo = { ...todo, title, description };
      const res = await dispatch(editTodoAsync({ id: todo.id, todo: editTodo }));
      if (res.meta.requestStatus === "fulfilled") onClose();
    }
  };

  const handleDelete = async () => {
    console.log("Deleting todo:", todo?.id);
    if (todo) {
      const res = await dispatch(deleteTodoAsync(todo.id));
      if (res.meta.requestStatus === "fulfilled") onClose();
    }
  };

  const handleStatusChange = async () => {
    console.log("Changing status for todo:", todo?.id);
    if (validateTitle() && validateDescription() && todo) {
      const switchStatus = { ...todo, status: !todo.status };
      const res = await dispatch(editTodoAsync({ id: todo.id, todo: switchStatus }));
      if (res.meta.requestStatus === "fulfilled") onClose();
    }
  };

  const handleCreate = async () => {
    if (validateTitle() && validateDescription()) {
      const res = await dispatch(addTodoAsync({ title, description }));
      if (res.meta.requestStatus === "fulfilled") onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={style["todo-popup-overlay"]}>
      <div className={style["todo-popup"]} ref={popupRef}>
        <h2 className={style.heading}>{isEditMode ? "Edit Todo" : "Create Todo"}</h2>

        <div className={style["form-group"]}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            maxLength={40}
            className={titleError ? style["error"] : ""}
            onBlur={validateTitle}
          />
          {titleError && <span className={style["error-message"]}>{titleError}</span>}
          <small>{title.length}/40</small>
        </div>

        <div className={style["form-group"]}>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            maxLength={150}
          />
          <small>{description.length}/150</small>
        </div>

        <div className={style["button-group"]}>
          {isEditMode ? (
            <>
              <button onClick={handleEdit}>Save Changes</button>
              <button onClick={handleStatusChange}>
                Mark as {todo?.status ? "Incomplete" : "Complete"}
              </button>
              <button style={{ backgroundColor: "#ea7b7b" }} onClick={handleDelete}>
                Delete Todo
              </button>
            </>
          ) : (
            <button onClick={handleCreate}>Create Todo</button>
          )}
          <button onClick={onClose}>Close Window</button>
        </div>
      </div>
    </div>
  );
};

export default TodoPopup;
