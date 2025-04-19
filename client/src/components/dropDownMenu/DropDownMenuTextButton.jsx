import React from 'react';
import styles from './DropDownMenuTextButton.module.css';
import { Link } from 'react-router-dom';

function DropDownMenuTextButton({text, url, onScreenUrl}) {
    let isSelected = url === onScreenUrl;

    return (
        <Link className={`${styles.DropDownMenuTextButton} ${isSelected ? styles.isSelected : ""}`} to={url} >{text}</Link>
    )
}
export default DropDownMenuTextButton;