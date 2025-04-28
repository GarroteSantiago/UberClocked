import React, {useRef} from 'react';
import styles from "./StoreHardware.module.css";
import Navbar from "../../components/navBar/Navbar.jsx";
import Stars from "../../components/Buttons_and_others/Stars.jsx";
import ProductCard from "../../components/store/ProductCard.jsx";
import ProductCarousel from "../../components/store/ProductCarousel.jsx";


function StoreHardware({products}) {
    return (
        <div className={styles.screen}>
            <Navbar onScreenUrl={"/store/pc-hardware"}/>
            <ProductCarousel>
                {products.map((product) => (
                    <ProductCard product={product}/>
                ))}
            </ProductCarousel>
        </div>
    );
}

export default StoreHardware;