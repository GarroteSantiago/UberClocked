import "./App.css"
import Start from "./screens/Start/Start.jsx";
import Home from "./screens/Home/Home.jsx";
import SignUp from "./screens/SignUp/SignUp.jsx";
import Login from "./screens/Login/Login.jsx";
import {Route, Routes} from "react-router-dom";
import AddProduct from "./screens/AddProduct/AddProduct.jsx";
import StoreHardware from "./screens/StoreHardware/StoreHardware.jsx";
import UserProfile from "./screens/UserProfile/UserProfile.jsx";

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Start />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/sign-up" element={<SignUp/>} />
            <Route path="/store/pc-hardware" element={<StoreHardware />} />
            <Route path="/add-product" element={<AddProduct />}/>
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/shopping-cart" element={<></>} />
        </Routes>
    </>
  )
} export default App