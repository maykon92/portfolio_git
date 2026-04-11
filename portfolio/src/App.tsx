import { Route, Routes } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home/Home"
import Project from "./pages/section/Project/Project"
import About from "./pages/section/About/About"

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
      </Route>
    </Routes>
  )
}

export default App