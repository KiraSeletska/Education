import { Reducer, createAction, createActions } from "../connect";
import { postType, postsState } from "../PostContainer/postState";

export const actions = createActions({
  addUserPost: (payload: postType) => payload,
  deletUserPost: (payload: postType) => payload,
  checkUserPost: (payload:string ) => (
    {
      title: payload, 
      createdAt: Date.now()
    })
})



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
  return state;
};
