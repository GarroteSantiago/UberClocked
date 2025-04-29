import React from 'react'
import styles from './InfoCard.module.css'
import PopUpTextButton from "./PopUpTextButton.jsx";

function InfoCard({title, data, popUpContent, popUpText}) {


    return (
        <div className={styles.infoCard}>
            <div className={styles.infoCardData}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.text}>{data}</p>
            </div>
            <div className={styles.infoButtons}>
                <PopUpTextButton popUpText={popUpText} popUpContent={popUpContent}>Modify</PopUpTextButton>
            </div>
        </div>
    )
}
export default InfoCard;