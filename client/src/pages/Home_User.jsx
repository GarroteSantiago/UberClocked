import React from "react";
import ToggleDownButton from "../components/Buttons_and_others/ToggleDownButton.jsx";
import {Outlet} from "react-router-dom";
import styles from "./Home_User.module.css";

function HomeUser(){
    return (
        <div className={styles.screen}>
            <nav className = {styles.navbar}>
                <span className= {styles.logo}>
                    <img src='/Logo.svg' alt='logo'/>
                </span>
                <ToggleDownButton />
            {/* enlace a las paginas <a ref = > */}
            </nav>
            <main className={styles.content}>
                <Outlet />
            </main>
        </div>

    )
}

export default HomeUser;

