import React, { useState, useEffect } from 'react';
import styles from "./StoreHardware.module.css";
import Navbar from "../../components/navBar/Navbar.jsx";
import ProductCard from "../../components/store/ProductCard.jsx";
import ProductCarousel from "../../components/store/ProductCarousel.jsx";
import TextButton from "../../components/Buttons_and_others/TextButton.jsx";

function StoreHardware() {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const response = await fetch("/api/products");
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts();
    });

    return (
        <div className={styles.screen}>
            <Navbar onScreenUrl={"/store/pc-hardware"}/>
            <ProductCarousel>
                {products.map((product) => (
                    <ProductCard product={product}/>
                ))}
            </ProductCarousel>

            {(
                <>
                    <TextButton text={"Add product"} url={"/add-product"} />
                    <TextButton text={"Add component"} url={"/add-component"} />
                </>
            )}
        </div>

    );
}

export default StoreHardware;