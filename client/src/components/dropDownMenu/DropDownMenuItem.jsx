import React from 'react';
import styles from './DropDownMenuItem.module.css';
import DropDownMenuTextButton from "./DropDownMenuTextButton.jsx";

function DropDownMenuItem({optionText, optionUrl}) {
    return (
        <>
            <div className={styles.dropDownMenuItemContainer}>
                <DropDownMenuTextButton text={optionText} url={optionUrl} />
            </div>
        </>
    )
}
export default DropDownMenuItem;