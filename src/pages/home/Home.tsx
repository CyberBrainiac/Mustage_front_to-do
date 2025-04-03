import TodoList from "@/ui/todoList/TodoList";
import style from "./home.module.scss";

const Home: React.FC = () => {
  return (
    <section className={style.container}>
      <h1 className={style.h1_head}>Your Tasks</h1>
      <div className={style.actions}> + Add Task / Filter by status</div>
      <div className={style.content}>
        <TodoList />
      </div>
    </section>
  );
};

export default Home;
