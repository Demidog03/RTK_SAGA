import axios from "axios";
import {call, put, takeLeading} from "redux-saga/effects"
import {IPost} from "../../../models/IPost.ts";
import {fetchPosts, fetchPostsFailure, fetchPostsSuccess} from './postSlice.ts'

const getPosts = () => axios.get<IPost[]>("https://jsonplaceholder.typicode.com/posts")

//fetchPosts worker
export function* fetchPostsSaga(){
  try {
    const {data} = yield call(getPosts);
    yield put(fetchPostsSuccess({posts: data}))
  }catch (err) {
    if(err instanceof Error) {
      yield put(fetchPostsFailure({error: "Posts Fetch Error: " + err.message}))
    }
  }
}

//post watcher
function* postSaga(){
  yield takeLeading(fetchPosts.type, fetchPostsSaga);
}

export default postSaga;
