import React from "react";
import styles from "./navbar.module.css";
import SmallLogo from "../logo/SmallLogo.jsx";

function Navbar() {
    return (
        <>
            <nav className={styles.navbar}>
                <SmallLogo/>
                <div className={styles.options}>
                    <a className={styles.disabled}>Home</a>
                    <a className={styles.enabled}>Store</a>
                    <a className={styles.enabled}>Build PC</a>
                    <a className={styles.enabled}>Roulette</a>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
