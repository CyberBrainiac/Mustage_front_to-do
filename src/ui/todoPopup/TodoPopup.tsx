import React, { useState, useEffect, useRef, useCallback } from "react";
import style from "./todoPopup.module.scss";
import { I_TodoPopupProps } from "@/interfaces/todoInterfaces";

const TodoPopup: React.FC<I_TodoPopupProps> = ({ isOpen, onClose, todoData, isEditMode }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState("");
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (todoData && isOpen) {
      setTitle(todoData.title);
      setDescription(todoData.description || "");
    } else if (!isEditMode && isOpen) {
      // Reset fields in create mode
      setTitle("");
      setDescription("");
    }
    setTitleError("");
  }, [todoData, isOpen, isEditMode]);

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

  const handleEdit = () => {
    if (validateTitle() && validateDescription()) {
      console.log("Editing todo:", { id: todoData?.id, title, description });
    }
  };

  const handleDelete = () => {
    console.log("Deleting todo:", todoData?.id);
  };

  const handleStatusChange = () => {
    console.log("Changing status for todo:", todoData?.id);
  };

  const handleCreate = () => {
    if (validateTitle() && validateDescription()) {
      console.log("Creating new todo:", { title, description });
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
                Mark as {todoData?.status ? "Incomplete" : "Complete"}
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
