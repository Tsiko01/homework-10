import './App.css'
import {BrowserRouter, Outlet, Route, Routes} from 'react-router-dom' 
import Home from './Pages/Home'
import Project from './Pages/Project'
import Hobi from './Pages/Hobi'
import Heade from './Compponents/Heade'
import HobbyDetails from './Pages/HobbyDetails'

// Headeris dalamalad viyeneb am funqcias amis Shedegad mxolod pirvel sam gverdze chans headeri
function Layout()  {
    return(
      <>
      <Heade/>
      <Outlet/>
      </>
    )
  }
function App() {

  

  return (
   <BrowserRouter>
      <Routes>
        <Route element = {<Layout/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/project' element={<Project/>} />
          <Route path='/hobi' element={<Hobi/>} />
        </Route>

        <Route path="/hobby/:id" element={<HobbyDetails />} />
      </Routes>
   </BrowserRouter>
  )
}

export default App
