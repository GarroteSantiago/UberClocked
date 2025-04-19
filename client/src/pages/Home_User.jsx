import React from "react";
import styles2 from "../components/logo/SmallLogo.module.css"
import {Outlet} from "react-router-dom";
import styles from "./Home_User.module.css";

import Navbar from "../components/navBar/Navbar.jsx";

function HomeUser(){
    return (
        <div className={styles.screen}>
            <Navbar />
        </div>
    )
}

export default HomeUser;

