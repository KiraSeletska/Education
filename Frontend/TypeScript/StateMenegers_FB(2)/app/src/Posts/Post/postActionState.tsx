import { Reducer } from "../../connect";
import { ChangeText } from ".";
import { createActions, createReducer } from "../../connect";
import { postType } from "../PostContainer/postState";
import { initialState } from "../../store";
import { act } from "@testing-library/react";

export const actions = createActions({
  deletUserPost: (payload: string) => payload,
  likePost: (payload: string) => payload,
  changeText: (payload: ChangeText) => payload,
});

/*
const helper = (state: any, arg: any) => ({
  ...state,
  Posts: {
    ...state.Posts,
    ...(typeof arg === "function" ? arg() : arg),
  },
});*/

export const reducer = createReducer(
  'Posts',
  {
    deletUserPost: (state, action) => ({
      posts: state.posts.map((post: postType) =>
        post.id === action.payload ? { ...post, like: !post.like } : post
      ),
    }),

    deleteUserPost: (state, action) => {
      console.log(state, action)
      return {
        posts: state.posts.map((post: postType) =>
        post.id === action.payload ? { ...post, like: !post.like } : post)
      }
    },

    likePost:  (state, action) => ({
      posts: state.posts.map((post: postType) =>
        post.id === action.payload ? { ...post, like: !post.like } : post
      ),
    }),

    changeText:   (state, action) => ({
      posts: state.posts.map((post: postType) =>
        post.id === action.payload.id
          ? { ...post, text: action.payload.text } : post
      ),
    })
  }
)

export const postActionReducer: Reducer<any> = (state, action) => {
  const obj = {
    deletUserPost: {
      posts: state.Posts.posts.map((post: postType) =>
        post.id === action.payload ? { ...post, like: !post.like } : post
      ),
    },
    likePost: {
      posts: state.Posts.posts.map((post: postType) =>
        post.id === action.payload ? { ...post, like: !post.like } : post
      ),
    },
    changeText: {
      posts: state.Posts.posts.map((post: postType) =>
        post.id === action.payload.id
          ? { ...post, text: action.payload.text }
          : post
      ),
    },
  };

/*
  const patch = (obj as any)[action.type];
  if (patch) {
    return helper(state, patch);
  }*/
  //return state
  /*
    if (action.type === "deletUserPost") {
      return helper(state, {posts: state.Posts.posts.map((post: postType) =>
        post.id === action.payload ? { ...post, like: !post.like } : post)})
      /*return {
        ...state,
        Posts: {
          ...state.Posts,
          posts: state.Posts.posts.filter((post: postType) => post.id !== action.payload),
        },
      };*/ /*
    }
    if (action.type === "likePost") {
     return helper(state, {posts: state.Posts.posts.map((post: postType) =>
      post.id === action.payload ? { ...post, like: !post.like } : post)})
     /* return {
        ...state,
        Posts: {
          posts: state.Posts.posts.map((post: postType) =>
            post.id === action.payload ? { ...post, like: !post.like } : post)},
      };
    }
    if (action.type === "changeText") {
      return helper (state, {posts: state.Posts.posts.map((post: postType) =>
        post.id === action.payload.id ? { ...post, text: action.payload.text} : post)})
      /*return {
        ...state,
        Posts: {
          posts: state.Posts.posts.map((post: postType) =>
            post.id === action.payload.id ? { ...post, text: action.payload.text} : post)},
      };
    }}*/
  return state;
};

