import React from "react";
import styles from "./Home.module.css";
import Navbar from "../../components/navBar/Navbar.jsx";

function Home(){
    return (
        <div className={styles.screen}>
            <Navbar onScreenUrl={"/home"}/>
        </div>
    )
}

export default Home;

