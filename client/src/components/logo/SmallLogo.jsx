import React from "react";
import style from "./SmallLogo.module.css";

function SmallLogo() {
    return (
        <div className={style.logoContainer}>
            <img src = "/Logo.svg" alt = "Logo"/>
        </div>
    )
}

export default SmallLogo;