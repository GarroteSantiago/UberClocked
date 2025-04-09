import React from "react";
import styles from "./navbar.module.css";
import logostyles from "../logo/SmallLogo.module.css";
import ToggleDownButton from "../Buttons_and_others/ToggleDownButton.jsx";

function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.left}>
                <span className={logostyles.logoContainer}>
                    <img src='/Logo.svg' alt='logo' />
                </span>
            </div>
            <div className= {styles.center}>
                <a className={styles.disabled}>Home</a>
                <div className={styles.dropdown}>
                    <a>Store</a>
                    <ToggleDownButton/>
                </div>
                <div className={styles.dropdown}>
                    <a>Build PC</a>
                    <ToggleDownButton/>
                </div>
                <a>Roulette</a>
            </div>
        </div>
    );
}

export default Navbar;
