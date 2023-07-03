import styles from "./styles.module.css";
import logo from "../../images/logo.svg";
import shoppingBag from "../../images/shoppingbag.svg";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" />
        <button>Каталог</button>
      </div>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink to="/categories">Категории</NavLink>
          </li>
          <li>
            <NavLink to="/coupon">Купон</NavLink>
          </li>
          <li>
            <NavLink to="/sales">Акции</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Контакты</NavLink>
          </li>
          <li>
       
            <NavLink to="/shoppingBag"><img src={shoppingBag} alt="Basket" /></NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
