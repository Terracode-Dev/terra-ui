import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from "./Login"
import Register from "./Register"
import Home from "./Home"
import Notification from "./Notification"


function App() {

  return (
   <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/notification" element={<Notification />}></Route>
        
      </Routes>
      </BrowserRouter>
    
  )
}

export default App
