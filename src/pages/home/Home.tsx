import Counter from "@/ui/Counter";
import style from "./home.module.scss";

const Home: React.FC = () => {
  return (
    <section className={style.container}>
      <h1 className={style.h1_head}>Your To Do List</h1>
      <div className={style.content}></div>
      <Counter />
    </section>
  );
};

export default Home;
