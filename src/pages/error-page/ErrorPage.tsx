import style from "./errorPage.module.scss";
import { Link, Navigate, useLocation } from "react-router-dom";

function ErrorPage() {
  const location = useLocation();
  const currentPath = location.pathname;

  // Immediate redirect to home page
  return <Navigate to="/" replace />;

  return (
    <section className={style.container}>
      <div className={style.message}>
        <p>404 page not found</p>
        <p>Path: {currentPath}</p>
      </div>
      <Link to="/">
        <div className={style.linkButton}>Go back</div>
      </Link>
    </section>
  );
}

export default ErrorPage;
