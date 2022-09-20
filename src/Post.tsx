import { useEffect, useState } from "react"
import axios from 'axios'

interface IPost {
  title: string;
  excerpt: string;
  image: string;
}

export const Post = () => {

  const [posts, setPosts] = useState<IPost[]>([])

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get<IPost[]>(`${process.env.REACT_APP_API_URL}/posts`)
      setPosts(res.data)
    }
    getPosts()
  }, [])
  return (<div>{posts && posts.map((post, index) => <div key={index}><div>{post.title}</div><div>{post.excerpt}</div><div>{post.image}</div></div>)}</div>)

}