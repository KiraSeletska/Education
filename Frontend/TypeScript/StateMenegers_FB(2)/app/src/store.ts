import { Reducers } from "./Posts/AddPost/userPostState";
import { replaceReducer, adsState } from "./Ads/AdsList/adsState";
import { composeReducers } from "./connect";
import { postsReducer, postsState } from "./Posts/PostContainer/postState";

export const composedRedusers = composeReducers(postsReducer , replaceReducer, Reducers);
export const initialState = { Posts: postsState , Ads: adsState};
//export const initialState = postsState;



