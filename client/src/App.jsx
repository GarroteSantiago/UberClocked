import "./App.css"
import Start from "./screens/Start/Start.jsx"
import Home from "./screens/Home/Home.jsx";
import SignUp from "./screens/SignUp/SignUp.jsx";
import Login from "./screens/Login/Login.jsx";
import StoreHardware from "./screens/StoreHardware/StoreHardware.jsx";

import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Start />}/>
            <Route path="/guest-home" element={<Home loggedIn={false}/>}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/sign-up" element={<SignUp/>} />

        </Routes>
    </>
  )
} export default App