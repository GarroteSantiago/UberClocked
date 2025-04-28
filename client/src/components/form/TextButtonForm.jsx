import React from 'react';
import styles from './TextButtonForm.module.css';
import { Link } from 'react-router-dom';

function TextButtonForm({text, url}) {
    return (
        <Link className={styles.textButtonForm} to={url} >{text}</Link>
    )
}
export default TextButtonForm;