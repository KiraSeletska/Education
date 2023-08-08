import styles from "./styles.module.scss";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.navContainer}>
        <div className={styles.linkWrapper}>
          <NavLink to="/mainPage">Main Page</NavLink>
        </div>
      </div>
    </section>
  );
};
