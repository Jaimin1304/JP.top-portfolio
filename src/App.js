import { Routes, Route } from "react-router-dom"
import Project from './pages/Project'
import NotFound from './pages/NotFound'
import Portfolio from './pages/Portfolio'
import { useRecoilValue } from 'recoil'
import { darkModeState } from './atoms'
import Footer from './Footer'
import Navbar from './Navbar'

export default function App() {
  const darkMode = useRecoilValue(darkModeState)

  return (
    <div id="page-container" className={(darkMode) ? 'darkMode' : 'lightMode'}>
      <div id="content-wrap">
        <Navbar />
        <Routes>
          <Route path='/' element={<Portfolio />} />
          <Route path='project/:name' element={<Project />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
