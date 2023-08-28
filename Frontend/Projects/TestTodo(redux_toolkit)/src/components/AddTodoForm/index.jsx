import { useDispatch } from "react-redux";
import styles from "./AddTodoForm.module.scss";
import { getRandomID } from "../../util/randimId";
import { useState } from "react";
import { addTodo } from "../../redux/todoSlice";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { addFolder } from "../../redux/folderSlice";

export const AddTodoForm = () => {
  const [todoText, setTodoText] = useState("");
  const [date, setData] = useState("");
  const [select, setSelect] = useState("");
  const [addFolderWindow, setAddFolderWindow] = useState(0);
  const [folderName, setFolderName] = useState('');

  const dataMainTodo = useSelector((state) => state.folders.folders);

  const dispatch = useDispatch();

  const newTodo = {
    id: getRandomID(),
    title: select,
    text: todoText,
    deadLine: date.split("-").reverse().join("."),
    check: false,
    status: 0,
  };

  const add = () => {
    dispatch(addTodo(newTodo));
    setTodoText("");
  };
  const newFolder = {
    id: getRandomID(),
    title: folderName,
    deadline: "",
  };

  const sendFolder = () => {
    setAddFolderWindow(0);

    const patter = new RegExp (`^[A-Za-z0-9]+$`)
patter.test(folderName) &&
    dispatch(addFolder(newFolder));
    setFolderName('')
  };
  return (
    <div className={styles.wrapper}>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          onChange={(e) => setTodoText(e.target.value)}
          value={todoText}
        />
  
        {addFolderWindow === 1 ? (
          <div className={styles.select}>
            {" "}
            <input
              type="text"
              onChange={(e) => setFolderName(e.target.value)}
              value={folderName}
            />
          </div>
        ) : (
          <select
            className={styles.select}
            name=""
            id=""
            onChange={(e) => setSelect(e.target.value)}
          >
            {dataMainTodo.map((el) => (
              <option key={el.id} value={el.title}>
                {el.title}
              </option>
            ))}
          </select>
        )}
              {addFolderWindow === 0 ? (
          <button
            className={styles.addFolder}
            onClick={() => setAddFolderWindow(1)}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        ) : (
          <button onClick={() => sendFolder()}>
            <FontAwesomeIcon icon={faCheck} />
          </button>
        )}

        <input type="date" onChange={(e) => setData(e.target.value)} />
        <button
          className={styles.addTodo}
          type="onSubmit"
          onClick={() => add()}
        >
          ADD
        </button>
      </form>
    </div>
  );
};
