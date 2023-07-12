import { addPostReducer } from "./Posts/AddPost/userPostState";
import { replaceReducer, adsState } from "./Ads/AdsList/adsState";
import { composeReducers } from "./connect";
import { postsReducer, postsState } from "./Posts/PostContainer/postState";
import { postActionReducer /*reducer*/ } from "./Posts/Post/postActionState";

export const composedRedusers = composeReducers(
  postsReducer,
  postActionReducer,
  //reducer, - нужен
  replaceReducer,
  addPostReducer
);
export const initialState = { Posts: postsState, Ads: adsState };

//export const initialState = postsState;
