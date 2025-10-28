import { Route, Routes } from "react-router"
import About from "./pages/about"
import Contact from "./pages/contact"
import Home from "./pages/home"
import Navbar from "./components/navbar"
import Footer from "./components/footer"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App