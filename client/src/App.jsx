import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import SignUp from "./pages/SignUp"
import Signin from "./pages/Signin"


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
      </Routes>
    </Router>
  )
}
