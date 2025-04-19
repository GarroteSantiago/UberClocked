import React, {useRef} from 'react';
import Navbar from "../components/navBar/Navbar.jsx";
import styles from "./ShopPcHardware.module.css";
import Stars from "../components/Buttons_and_others/Stars.jsx";

const pcProducts = [
    {
        //example:
        id: 1,
        name: 'AMD Ryzen 7 5800X',
        description: '8-Core, 16-Thread, Unlocked Desktop Processor',
        price: '$299',
        image: './Img/Ryzen7.jpeg',
        rating: 5,
    },
    {
        id: 2,
        name: 'NVIDIA GeForce RTX 3080',
        description: '10GB GDDR6X, Ray Tracing, DLSS, PCIe 4.0',
        price: '$699',
        image: './Img/RTX_3080.jpg',
        rating: 4,
    },{},{},{},{},{},{},{}
]
function ShopPcHardware() {
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
            <Navbar/>
            <div className={styles.shopContainer}>
                <div className={styles.carouselControls}>
                    <button className={styles.scrollButton} onClick={() => scroll("left")}>◀</button>
                    <div className={styles.slider} ref={sliderRef}>
                        {pcProducts.map((product) => (
                            <div key={product.id} className={styles.card}>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className={styles.image}
                                />
                                <div className={styles.info}>
                                    <h2>{product.name}</h2>
                                    <p>{product.description}</p>
                                    <Stars initialRating={product.rating}/>
                                    <p className={styles.price}>{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className={styles.scrollButton} onClick={() => scroll("right")}>▶</button>
                </div>
            </div>
        </div>
    );
}
export default ShopPcHardware;