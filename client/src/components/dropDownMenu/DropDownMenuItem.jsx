import React from 'react';
import styles from './DropDownMenuItem.module.css';
import DropDownMenuTextButton from "./DropDownMenuTextButton.jsx";

function DropDownMenuItem({optionText, optionUrl, onScreenUrl}) {
    let isSelected = optionUrl === onScreenUrl;
    return (
        <>
            <div className={`${styles.dropDownMenuItemContainer} ${isSelected ? styles.isSelected : ""}`}>
                <DropDownMenuTextButton text={optionText} url={optionUrl} onScreenUrl={onScreenUrl}/>
            </div>
        </>
    )
}
export default DropDownMenuItem;