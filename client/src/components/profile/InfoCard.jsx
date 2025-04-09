import React from 'react'
import styles from './InfoCard.module.css'
import PopUpTextButton from "./PopUpTextButton.jsx";

function InfoCard({title, data, url}) {
    return (
        <>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{data}</p>
            <PopUpTextButton popUpContent={}>Modify</PopUpTextButton>
        </>
    )
}