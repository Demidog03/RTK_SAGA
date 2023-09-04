import {IPost} from "../../models/IPost.ts";

export interface PostsState {
  pending: boolean,
  posts: IPost[],
  error: string | null
}

export interface FetchPostSuccessPayload {
  posts: IPost[];
}

export interface FetchPostFailurePayload {
  error: string;
}

