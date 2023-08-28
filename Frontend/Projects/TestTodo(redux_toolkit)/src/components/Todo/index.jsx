import { useDispatch } from "react-redux";
import styles from "./Todo.module.scss";
import { checkTodo, deletTodo } from "../../redux/todoSlice";

export const Todo = ({ title, text, deadLine, check, id }) => {
  const dispatch = useDispatch();

  const delet = (idEl) => {
    dispatch(deletTodo(idEl));
  };
  const changeStatusTodo = (idEl) => {
    dispatch(checkTodo(idEl));
  };

  return (
    <div
      className={!check ? styles.wrapper : styles.wrapper + " " + styles.check}
    >
      <div className={styles.mainContainer}>
      <input
        type="checkbox"
        checked={check}
        onChange={() => changeStatusTodo(id)}
      />
      <p>{text}</p>
      <span>{deadLine}</span>
      <button onClick={() => delet(id)}>X</button>
      </div>
<p className={styles.title}>{title}</p>
    </div>
  );
};
