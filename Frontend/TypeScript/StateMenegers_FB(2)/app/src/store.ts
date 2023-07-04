import { userPostsRostsReducer } from "./Posts/AddPost/userPostState";
import { adsReducer, adsState } from "./Ads/AdsList/adsState";
import { composeReducers } from "./connect";
import { postsReducer, postsState } from "./Posts/PostContainer/postState";

export const composedRedusers = composeReducers(postsReducer , adsReducer, userPostsRostsReducer);
export const initialState = { Posts: postsState , Ads: adsState};
//export const initialState = postsState;
console.log(initialState)


