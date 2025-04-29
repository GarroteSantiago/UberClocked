import styles from "./StoreHardware.module.css";
import Navbar from "../../components/navBar/Navbar.jsx";
import Stars from "../../components/Buttons_and_others/Stars.jsx";
import ProductCard from "../../components/store/ProductCard.jsx";
import ProductCarousel from "../../components/store/ProductCarousel.jsx";
import TextButton from "../../components/Buttons_and_others/TextButton.jsx";
import {useEffect, useState} from "react";
import axios from "axios";


function StoreHardware() {

    const [products, setProducts] = useState(null);

    const getProducts = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/products/`);
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className={styles.screen}>
            <Navbar onScreenUrl={"/store/pc-hardware"}/>

            { products &&
                <ProductCarousel>
                    {products.map((product) => (
                        <ProductCard product={product}/>
                    ))}
                </ProductCarousel>
            }
            <TextButton text={"Add product"} url={"/add-product"} />
            <TextButton text={"Delete product"} url={"/delete-product"} />
            <TextButton text={"Add component"} url={"/add-component"} />
            <TextButton text={"Delete component"} url={"/delete-component"} />
        </div>
    );
}

export default StoreHardware;