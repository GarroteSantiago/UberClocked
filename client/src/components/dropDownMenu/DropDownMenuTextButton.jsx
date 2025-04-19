import React from 'react';
import styles from './DropDownMenuTextButton.module.css';
import { Link } from 'react-router-dom';

function DropDownMenuTextButton({text, url}) {
    return (
        <Link className={styles.DropDownMenuTextButton} to={url} >{text}</Link>
    )
}
export default DropDownMenuTextButton;