import React, {useRef} from 'react';
import styles from "./StoreHardware.module.css";
import Navbar from "../components/navBar/Navbar.jsx";
import Stars from "../components/Buttons_and_others/Stars.jsx";
import ProductCard from "../components/store/ProductCard.jsx";


function StoreHardware({loggedIn, products}) {
    const sliderRef = useRef(null);

    const scroll = (direction) => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: direction === "left" ? -300 : 300,
                behavior: "smooth",
            });
        }
    };
    return (
        <div className={styles.screen}>
            <Navbar loggedIn={loggedIn} onScreenUrl={"/store/pc-hardware"}/>

            <div className={styles.shopContainer}>
                <div className={styles.carouselControls}>
                    <button className={styles.scrollButton} onClick={() => scroll("left")}>◀</button>
                    <div className={styles.slider} ref={sliderRef}>
                        {products.map((product) => (
                            <ProductCard product={product}/>
                        ))}
                    </div>
                    <button className={styles.scrollButton} onClick={() => scroll("right")}>▶</button>
                </div>
            </div>
        </div>
    );
}

export default StoreHardware;