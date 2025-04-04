import TodoList from "@/ui/todoList/TodoList";
import style from "./home.module.scss";
import { useEffect, useState } from "react";
import { I_Todo } from "@/interfaces/todoInterfaces";
import TodoPopup from "@/ui/todoPopup/TodoPopup";
import SearchField from "@/ui/search/Search";
import StatusFilter from "@/ui/filters/StatusFilter";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getTodoAsync } from "@/redux/thunks/todoThunks";

const Home: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<I_Todo | undefined>(undefined);
  const [isEditMode, setIsEditMode] = useState(false);
  const filters = useAppSelector(state => state.filters);
  const dispatch = useAppDispatch();

  const openCreatePopup = () => {
    setSelectedTodo(undefined);
    setIsEditMode(false);
    setIsPopupOpen(true);
  };

  const openEditPopup = (todo: I_Todo) => {
    setSelectedTodo(todo);
    setIsEditMode(true);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    dispatch(getTodoAsync({ filters }));
  }, [filters, dispatch]);

  return (
    <section className={style.container}>
      <div className={style.actions}>
        <button className={style.addBtn} onClick={openCreatePopup}>
          + Add Todo
        </button>{" "}
        <StatusFilter />
        <SearchField />
        <div className={style.helpButton} title="Double click on todo item to edit">
          ?
        </div>
      </div>
      <div className={style.content}>
        <TodoList openEditPopup={openEditPopup} />
      </div>
      <TodoPopup
        isOpen={isPopupOpen}
        onClose={closePopup}
        todo={selectedTodo}
        isEditMode={isEditMode}
      />
    </section>
  );
};

export default Home;
