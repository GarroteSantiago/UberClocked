import React from 'react';
import styles from './InformationSection.module.css';
import PopUpTextButton from "./PopUpTextButton.jsx";

function InformationSection({children, title, addMethodPopUp, addMethodText, addPopUpText}) {

    const addPopUpContent = null;

    if (addMethodPopUp !== undefined) {
        const addPopUpContent =
            <PopUpTextButton popUpContent={addMethodPopUp} popUpText={addPopUpText}>
                {addMethodText}
            </PopUpTextButton>
    }

    return (
        <div className={styles.informationSection}>
            <h2 className={styles.informationSectionTitle}>{title}</h2>
            {children}
            {addPopUpContent}
        </div>
    )
}
export default InformationSection;