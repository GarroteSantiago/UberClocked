import React from "react";
import styles from "./navbar.module.css";
import SmallLogo from "../logo/SmallLogo.jsx";
import ToggleDownPCButton from "./ToggleDownPcButton.jsx";
import ToggleDownButton from "./ToggleDownButton.jsx";

function Navbar() {
    return (
        <>
            <nav className={styles.navbar}>
                <SmallLogo/>
                <div className={styles.options}>
                    <a className={styles.enabled} > Home </a>
                    <ToggleDownButton />
                    <ToggleDownPCButton />
                    <a className={styles.enabled}> Roulette </a>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
