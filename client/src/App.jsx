import { useState } from 'react'
import "./App.css"
import Home from "./screens/Home.jsx";
import SignUp from "./screens/SignUp.jsx";
import Login from "./screens/Login.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

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