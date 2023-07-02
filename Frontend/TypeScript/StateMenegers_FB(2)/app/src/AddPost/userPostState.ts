import { Reducer, dispatch } from "../connect";
import { postsState } from "../Posts/postState";

export const userPostsRostsReducer: Reducer<any> = (state, action) => {
    if (action.type === "addUserPost") {
      return {
        ...state,
        Posts: {
          ...state.Posts,
          posts: [action.payload, ...state.Posts.posts],
        },
      };
  
    }
    return state
  };


