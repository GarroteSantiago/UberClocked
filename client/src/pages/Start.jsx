import React from 'react';
import styles from './Start.module.css'
import LargeLogo from "../components/logo/LargeLogo.jsx";
import TextButton from "../components/TextButton.jsx";

function Start() {
    return (
        <div className={styles.screen}>
            <LargeLogo/>
            <div className={styles.textOptions}>
                <TextButton text={" Login |"} url={"/login"} />
                <TextButton text={" SignUp |"} url={"/signup"} />
                <TextButton text={" Guest"} url={"/homeGuest"} />
            </div>
        </div>
    )
}
export default Start;