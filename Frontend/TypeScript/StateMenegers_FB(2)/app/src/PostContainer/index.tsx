
import { postsState } from "./postState";
import { connect } from "../connect";
import { initialState } from "../store";
import { Post } from "../Post";


const NewPost = (props: typeof postsState) => {
  return (
    <div>
      {props.posts.map((el) => (
      <Post title={el.title} text={el.text} groopName={el.groopName} id={""}/>
      ))}
    </div>
  );
};

export const PostContainer = connect(
  (state: typeof initialState) => state.Posts,//добавить еще один стейт
  NewPost
);

