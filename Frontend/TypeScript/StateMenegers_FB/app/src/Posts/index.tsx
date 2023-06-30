import styles from "./styles.module.scss";
import { postsState } from "./postState";
import { connect } from "./conect";
import { faThumbsUp, faMessage, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getRandomID } from "../App";
//const Post = (props: { posts: { title: string; text: string; }[]}) => (
    const Post = (props: typeof postsState) => (
        <>
{props.posts.map((el:{title: string, text:string}) => 
    <div className={styles.postConteiner} key={getRandomID()}>
   <h3>{el.title}</h3><p>{el.text}</p>
   <div>
    <button><FontAwesomeIcon icon={faThumbsUp}/><span>Нравится</span></button>
    <button><FontAwesomeIcon icon={faMessage} /><span>Комментировать</span></button>
    <button><FontAwesomeIcon icon={faArrowUpRightFromSquare} /><span>Пoделиться</span></button>
    </div>
    </div>
   )}
</>
);
export const PostContainer = connect(postsState, Post);
