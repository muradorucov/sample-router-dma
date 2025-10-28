import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function SingleBlog() {
  const { id } = useParams();
  const [blog, setblog] = useState({})
  useEffect(() => {
    axios.get("https://dummyjson.com/posts/" + id)
      .then(res => setblog(res.data))
  }, [id])
  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.body}</p>
      <ul>
        {blog.tags?.map(tag => <li key={tag}>{tag}</li>)}
      </ul>
    </div>
  )
}

export default SingleBlog