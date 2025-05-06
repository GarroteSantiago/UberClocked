import React, { useState, useEffect } from 'react';
import styles from "./StoreHardware.module.css";
import Navbar from "../../components/navBar/Navbar.jsx";
import ProductCarousel from "../../components/store/ProductCarousel.jsx";
import TextButton from "../../components/Buttons_and_others/TextButton.jsx";
import ComponentCard from "../../components/store/ComponentCard.jsx";

function StoreHardware() {
    const [components, setComponents] = useState([]);

    const getComponents = async () => {
        try {
            const response = await fetch("/api/components");
            const data = await response.json();
            setComponents(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getComponents();
    },[]);

    return (
        <div className={styles.screen}>
            <Navbar onScreenUrl={"/store/pc-hardware"}/>
            <ProductCarousel>
                {components.map((product) => (
                    <ComponentCard component={product}/>
                ))}
            </ProductCarousel>

            {(
                <>
                    <TextButton text={"Add component"} url={"/add-component"} />
                </>
            )}
        </div>

    );
}

export default StoreHardware;