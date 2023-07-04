import { Reducer, createActions } from "../../connect";
import { ChangeText } from "../Post";
import { postType } from "../PostContainer/postState";

export const actions = createActions({
  addUserPost: (payload: postType) => payload,
  deletUserPost: (payload: string) => payload,
  likePost: (payload: string) => payload,
  changeText: (payload: ChangeText) => payload,
});

export const Reducers: Reducer<any> = (state, action) => {
  if (action.type === "addUserPost") {
    return {
      ...state,
      Posts: {
        ...state.Posts,
        posts: [action.payload, ...state.Posts.posts],
      },
    };
  }
  if (action.type === "deletUserPost") {
    return {
      ...state,
      Posts: {
        ...state.Posts,
        posts: state.Posts.posts.filter((post: postType) => post.id !== action.payload),
      },
    };
  }
  if (action.type === "likePost") {
    return {
      ...state,
      Posts: {
        posts: state.Posts.posts.map((post: postType) =>
          post.id === action.payload ? { ...post, like: !post.like } : post)},
    };
  }
  if (action.type === "changeText") {
    return {
      ...state,
      Posts: {
        posts: state.Posts.posts.map((post: postType) =>
          post.id === action.payload.id ? { ...post, text: action.payload.text} : post)},
    };
  }
  return state;
};
