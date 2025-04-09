import React from "react";
import styles from "./SmallLogo.module.css";

function SmallLogo() {
    return (
        <img className={styles.logo} src="/Logo.svg" alt="Logo"/>
    )
}

export default SmallLogo;