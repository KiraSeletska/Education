import { useSelector } from "react-redux";
import styles from "./MainTodo.module.scss";
import { Todo } from "../Todo";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deletFolder } from "../../redux/folderSlice";

export const MainTodo = ({ title, deadline, id }) => {

  const todos = useSelector((state) => state.todos.todos);
  const newTodos = [...todos];
  const todoArr = newTodos.filter((el) => el.title === title);
const [position, setPosition] = useState(false)

const dispatch = useDispatch();

const delFolder = (idEl) => {
dispatch(deletFolder(idEl))
} 
 return (
    <div className={!position ? styles.wrapper : styles.wrapper + ' ' + styles.main} onClick={()=> setPosition(!position)} >
      <button className={styles.deletFolder} onClick={()=>delFolder(id)}>X</button>
      <h2 className={styles.title} >{title}</h2>
      <p className={styles.total}>Tasks to be completed: {todoArr.length}</p>
      <p className={styles.deadLine}>Deadline: <span>{deadline} </span></p>
      <div className={styles.todoListinMain}>
        {todoArr.map((el) => (
          <Todo key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
};
 