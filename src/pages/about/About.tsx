import style from "./about.module.scss";

const About: React.FC = () => {
  return (
    <section className={style.container}>
      <h1>About page</h1>
      <p>You can explore more about our company</p>
    </section>
  );
};

export default About;
