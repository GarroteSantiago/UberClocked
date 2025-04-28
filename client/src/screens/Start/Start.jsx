import React from 'react';
import styles from './Start.module.css'
import LargeLogo from "../../components/logo/LargeLogo.jsx";
import TextButton from "../../components/Buttons_and_others/TextButton.jsx";

function Start() {
    return (
        <div className={styles.screen}>
            <LargeLogo/>
            <div className={styles.textOptions}>
                <TextButton text={" Login |"} url={"/login"} />
                <TextButton text={" SignUp |"} url={"/sign-up"} />
                <TextButton text={" Guest"} url={"/home"} />
            </div>
        </div>
    )
}
export default Start;