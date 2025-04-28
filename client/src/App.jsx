import "./App.css"
import Start from "./screens/Start.jsx";
import Home from "./screens/Home.jsx";
import SignUp from "./screens/SignUp.jsx";
import Login from "./screens/Login.jsx";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Start />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/sign-up" element={<SignUp/>} />
        </Routes>
    </>
  )
} export default App