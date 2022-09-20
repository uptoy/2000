import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchPosts, selectPost } from "../postRedux/postReduxSlice";


export const PostRedux = () => {

  const dispatch = useAppDispatch()
  const state = useAppSelector(selectPost)
  const fetch = 1

  useEffect(() => {
    dispatch(fetchPosts)
  }, [fetch])
  return (<div>{state.posts && state.posts.map((post, index) => (<div key={index}>
    <div>{post.image}</div>
    <div>{post.excerpt}</div>
    <div>{post.title}</div>
  </div>))}</div>)

}
