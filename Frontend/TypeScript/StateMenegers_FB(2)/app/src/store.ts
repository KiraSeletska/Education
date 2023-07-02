import { composeReducers } from "./conect";
import { reducer, postsState } from "./Posts/postState";

export const composedRedusers = composeReducers(reducer);
export const initialState = { Ads: postsState };