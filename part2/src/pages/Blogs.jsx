import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'

function Blogs() {

  const [blogs, setblogs] = useState([])

  useEffect(() => {
    axios.get("https://dummyjson.com/posts")
      .then(res => setblogs(res.data.posts))
  }, [])
  return (
    <div>
      <ul>
        {blogs.map(blog => <li key={blog.id}>
          <Link to={"/blog/" + blog.id}>{blog.title}</Link>
        </li>)}
      </ul>
    </div>
  )
}

export default Blogs