import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Toaster} from "react-hot-toast"
import Home from "./compoents/Home"
import Footer from "./compoents/Footer"
import Header from "./compoents/Header"
import Login from "./compoents/Login"
import Signup from "./compoents/Signup"
import Search from "./compoents/Search"
import Allbooks from "./compoents/Allbooks"
import Adminlogin from "./compoents/Adminlogin"

export const server = "http://localhost:4000/api/v1"

function App() {
  
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<Search />} />
        <Route path="/allbooks" element={<Allbooks />} />
        <Route path="/admin" element={<Adminlogin />} />
      </Routes>
      <Footer/>
      <Toaster/>
    </Router>
  )
}

export default App
