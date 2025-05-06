import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import styles from "./StoreHardware.module.css";
import Navbar from "../../components/navBar/Navbar.jsx";
import ProductCarousel from "../../components/store/ProductCarousel.jsx";
import TextButton from "../../components/Buttons_and_others/TextButton.jsx";
import ProductCard from "../../components/store/ProductCard.jsx";

function ProductByComponent() {
    const { id } = useParams();
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const response = await fetch(`/api/component_product/${id}`);
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts();
    }, [id]);

    return (
        <div className={styles.screen}>
            <Navbar onScreenUrl={"/store/pc-hardware/SearchByComponent"} />
            <ProductCarousel>
                {products.map((product) => (
                    <ProductCard product={product} />
                ))}
            </ProductCarousel>
            <TextButton text={"Add product"} url={"/add-product"} />
        </div>
    );
}

export default ProductByComponent;
