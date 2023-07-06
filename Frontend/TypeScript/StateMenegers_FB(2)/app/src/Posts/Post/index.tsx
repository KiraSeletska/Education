import {
  faThumbsUp,
  faMessage,
  faArrowUpRightFromSquare,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getRandomID, getTime } from "../../App";
import styles from "./srtyles.module.scss";
import { FC, useEffect, useState } from "react";
import { OtherUser } from "../../OtherUsers";
import { User } from "../../User";
import { actions } from "./postActionState";

interface PostProps {
  title: string;
  text: string;
  groopName: string;
  id: string;
  like: boolean;
}
export type ChangeText = {
  id: string,
  text: string
}

export const Post: FC<PostProps> = ({ title, text, groopName, id, like }) => {
  const [changeWindow, setchangeWindow] = useState(false);
  const [newText, setNewText] = useState(text);

  const deletPost = (idEl: string) => {
    actions.deletUserPost(idEl);
  };

  const likePost = (idEl: string) => {
    actions.likePost(idEl);
  };

  const changeText = (e: string) => {
    setNewText(e);//передавать функцию можно
    setchangeWindow(false);
    /*setchangeWindow(() => {
      let payload = {
        id: id,
        text: newText,
      };
      actions.changeText(payload);
      return false
    })*/

  };
/*
setchangeWindow(() => {
  let payload = {
    id: id,
    text: newText,
  };
  actions.changeText(payload);
  return false
})*/

  useEffect(() => {
    (() => {
      let payload = {
        id: id,
        text: newText,
      };
      actions.changeText(payload);
    })();
  }, [newText]);

  return (
    <div className={styles.postConteiner} key={getRandomID()}>
      <div className={styles.topPost}>
        {id.length === 5 ? <User /> : <OtherUser />}
        <div>
          <p>{groopName}</p>
          <span>{getTime()}</span>
        </div>
        <button>
          <FontAwesomeIcon icon={faXmark} onClick={() => deletPost(id)} />
        </button>
      </div>
      <h3>{title}</h3>
      <p onClick={() => setchangeWindow(true)}>{text}</p>

      <form
        className={changeWindow ? styles.changeText : styles.close}
        onSubmit={(e) => e.preventDefault()}>
        <textarea
          autoFocus
          onBlur={(e) => changeText(e.target.value)}
          defaultValue={newText}
        />
      </form>
      <div>
        <button
          className={like ? styles.like : " "}
          onClick={() => likePost(id)}
        >
          <FontAwesomeIcon icon={faThumbsUp} />
          <span>Нравится</span>
        </button>
        <button>
          <FontAwesomeIcon icon={faMessage} />
          <span>Комментировать</span>
        </button>
        <button>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          <span>Пoделиться</span>
        </button>
      </div>
    </div>
  );
};
