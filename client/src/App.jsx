import "./App.css"
import Start from "./screens/Start/Start.jsx";
import Home from "./screens/Home/Home.jsx";
import SignUp from "./screens/SignUp/SignUp.jsx";
import Login from "./screens/Login/Login.jsx";
import {Route, Routes} from "react-router-dom";
import AddProduct from "./screens/Product/AddProduct/AddProduct.jsx";
import StoreHardware from "./screens/StoreHardware/StoreHardware.jsx";
import UserProfile from "./screens/UserProfile/UserProfile.jsx";
import AddComponent from "./screens/Component/AddComponent/AddComponent.jsx";
import SeeComponent from "./screens/Component/seeComponent/seeComponent.jsx";
import SeeProduct from "./screens/Product/SeeProduct/SeeProduct.jsx";
import ProductByComponent from "./screens/StoreHardware/ProductByComponent.jsx";


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
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/add-component" element={<AddComponent />} />
            <Route path="/product/:id" element={<SeeProduct />} />
            <Route path="/components/:id" element={<SeeComponent />} />
            <Route path="store/pc-hardware/SearchByComponent" element={<ProductByComponent />} />

        </Routes>
    </>
  )
} export default App