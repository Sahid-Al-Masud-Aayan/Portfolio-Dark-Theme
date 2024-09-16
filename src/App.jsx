import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import LayoutOne from './Layout/LayoutOne'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'
import Contact from './Pages/Contact'

function App() {
const mainRouter =  createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<LayoutOne/>}>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Route>
    </Route>
  )
)

  return (
    <>
    <RouterProvider router={mainRouter}/>
    </>
  )
}

export default App
