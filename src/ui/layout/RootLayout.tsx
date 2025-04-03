import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import style from "./rootLayout.module.scss";

const RootLayout: React.FC = () => {
  return (
    <section className={style.page}>
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
};

export default RootLayout;
