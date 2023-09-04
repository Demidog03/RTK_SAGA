import './App.css'
import {useDispatch} from "react-redux";
import {fetchPosts} from "./store/features/post/postSlice.ts";
import {useEffect} from "react";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch]);

  return (
    <>
      <button>Fetch Posts</button>
    </>
  )
}

export default App
