import { Link } from "react-router-dom";
import style from "./header.module.scss";
import logo from "@img/to-do-list-icon.svg";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <header className={style.container}>
      <Link className={style.logoLink} to="/">
        <div className={style.logo}>
          <img src={logo} alt="Logo" />
        </div>
      </Link>
      <nav className={style.nav}>
        <Link className={style.navItem} to="/about">
          About
        </Link>
        <Link className={style.navItem} to="/userPolicy">
          UserPolicy
        </Link>
      </nav>
      <div className={style.user}>
        <FaUserCircle className={style.userIcon} />
      </div>
    </header>
  );
}

export default Header;
