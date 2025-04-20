import React from "react";
import styles from "./Home.module.css";
import Navbar from "../components/navBar/Navbar.jsx";

function Home({loggedIn}){
    return (
        <div className={styles.screen}>
            <Navbar loggedIn={loggedIn} onScreenUrl={"/home"}/>
        </div>
    )
}

export default Home;

