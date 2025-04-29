import "./App.css"
import Start from "./screens/Start/Start.jsx";
import Home from "./screens/Home/Home.jsx";
import SignUp from "./screens/SignUp/SignUp.jsx";
import Login from "./screens/Login/Login.jsx";
import {Route, Routes} from "react-router-dom";
import AddProduct from "./screens/AddProduct/AddProduct.jsx";
import StoreHardware from "./screens/StoreHardware/StoreHardware.jsx";
import UserProfile from "./screens/UserProfile/UserProfile.jsx";
import EditUser from "./screens/EditUser.jsx";
import ManagerUser from "./screens/ManagerUser.jsx";
import EditProduct from './screens/EditProduct'
import AddComponent from "./screens/AddComponent/AddComponent.jsx";


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
            <Route path="/manage-users" element={<ManagerUser />} />
            <Route path="/edit-user/:id" element={<EditUser />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/edit-product/:id" element={<EditProduct />} />
            <Route path="/add-component" element={<AddComponent />} />
        </Routes>
    </>
  )
} export default App