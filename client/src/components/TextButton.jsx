import React from 'react';
import styles from './TextButton.module.css';
import { Link } from 'react-router-dom';

function TextButton({text, url}) {
    return (
        <Link className={styles.TextButton} to={url} >{text}</Link>
    )
}
export default TextButton;