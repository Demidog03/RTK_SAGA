import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FetchPostFailurePayload, FetchPostSuccessPayload, PostsState} from "../../types/post.ts";

const initialState: PostsState =  {
  pending: false,
  error: null,
  posts: []
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    fetchPosts: (state) => {
      state.pending = true
    },
    fetchPostsSuccess: (state, action: PayloadAction<FetchPostSuccessPayload> ) => {
      state.pending = false;
      state.posts = action.payload.posts
    },
    fetchPostsFailure: (state, action: PayloadAction<FetchPostFailurePayload>) => {
      state.pending = false;
      state.error = action.payload.error
    },
  },
  extraReducers: {

  }
})

export const {fetchPosts, fetchPostsSuccess, fetchPostsFailure} = postSlice.actions

export default postSlice.reducer
