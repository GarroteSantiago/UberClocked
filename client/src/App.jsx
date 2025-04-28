import "./App.css"
import Home from "./screens/Home/Home.jsx";
import SignUp from "./screens/SignUp/SignUp.jsx";
import Login from "./screens/Login/Login.jsx";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home loggedIn={false} />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/sign-up" element={<SignUp/>} />
            </Routes>
        </>
    )
} export default App