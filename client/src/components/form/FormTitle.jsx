import React from 'react';
import styles from './FormTitle.module.css';

function FormTitle(text) {
    return (
        <h2 className={styles.formTitle}>{text.text}</h2>
    )
}
export default FormTitle;