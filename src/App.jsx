import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import PlateCard from './components/PlateCard' 
import Plates from './pages/Plates'
import Home from './pages/Home'
import { BrowserRouter  as Router, Link , Routes , Route} from 'react-router-dom'

function App() {

 


  return (
  <>
  


     <nav>
        <Link to="/">Home</Link>
        <Link to="/Plates">Plates</Link>
        <Link to="/Login">Login</Link>
        <Link to="/PlateDetail">Details des plats</Link>
        <Link to="/Profile">Profile</Link>
        <Link to="/Register">Register</Link>
      </nav>

      <main>
        <Routes>
        <Route path ="/" element={<Home/>}/>
         <Route path ="/Plates"  element={<Plates/>}/>
         <Route path="/Profile" element={<Plates/>} />
         <Route path="/PlateDetail" element={<Plates/>} />
         <Route path="/Register" element={<Plates/>} />
         </Routes>
      </main>
    

</>
  )


}
 
export default App
