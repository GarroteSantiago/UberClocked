import React, { useState, useEffect } from 'react';
import styles from "./StoreHardware.module.css";
import Navbar from "../../components/navBar/Navbar.jsx";
import ProductCard from "../../components/store/ProductCard.jsx";
import ProductCarousel from "../../components/store/ProductCarousel.jsx";
import TextButton from "../../components/Buttons_and_others/TextButton.jsx";
import { useAuth } from "../../components/authentication/AuthContext.jsx";

function StoreHardware({products}) {
    const { user } = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const checkAdminStatus = async () => {
            try {
                if (!user || !user.userId) {
                    return;
                }

                const res = await fetch('/api/check-admin', {
                    headers: {
                        'userid': user.userId
                    }
                });

                if (res.ok) {
                    const data = await res.json();
                    setIsAdmin(data.isAdmin);
                }
            } catch (error) {
                console.error('Error checking admin status:', error);
            }
        };

        checkAdminStatus();
    }, [user]);

    return (
        <div className={styles.screen}>
            <Navbar onScreenUrl={"/store/pc-hardware"}/>
            <ProductCarousel>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </ProductCarousel>

            {isAdmin && (
                <>
                    <TextButton text={"Add product"} url={"/add-product"} />
                    <TextButton text={"Add component"} url={"/add-component"} />
                </>
            )}
        </div>
    );
}

export default StoreHardware;