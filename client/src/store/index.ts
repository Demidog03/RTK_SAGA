import {configureStore, MiddlewareArray} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import postReducer from "./features/post/postSlice"
import {rootSaga} from "./rootSaga.ts";

const sagaMiddleware = createSagaMiddleware()
const middleware = new MiddlewareArray(sagaMiddleware)
export const store = configureStore({
  reducer: {
    post: postReducer
  },
  devTools: true,
  middleware
})

sagaMiddleware.run(rootSaga)

export default store
