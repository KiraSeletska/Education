import styles from "./styles.module.scss";
import { postsState } from "./postState";
import { connect } from "../connect";
import {
  faThumbsUp,
  faMessage,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getRandomID } from "../App";
import { initialState } from "../store";

const Post = (props: typeof postsState) => {
  return (
    <div>
      {props.posts.map((el) => (
        <div className={styles.postConteiner} key={getRandomID()}>
          <h3>{el.title}</h3>
          <p>{el.text}</p>
          <div>
            <button>
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
      ))}
    </div>
  );
};

export const PostContainer = connect(
  (state: typeof initialState) => state.Posts,
  Post
);

