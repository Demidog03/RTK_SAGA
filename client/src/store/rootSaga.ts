import {all} from "redux-saga/effects"
import postSaga from "./features/post/postSaga.ts";

export function* rootSaga(){
  yield all([postSaga()]);
}
