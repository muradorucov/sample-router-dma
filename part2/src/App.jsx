import { Link, Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Blogs from './pages/Blogs'
import SingleBlog from './pages/SingleBlog'

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blogs">Blogs</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blog/:id' element={<SingleBlog />} />
      </Routes>
    </>
  )
}

export default App