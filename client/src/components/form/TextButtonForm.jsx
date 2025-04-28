import React from 'react';
import styles from './TextButtonForm.module.css';

function TextButtonForm({text}) {
    return (
        <button type="submit" className={styles.textButtonForm}>{text}</button>
    )
}
export default TextButtonForm;