import React from 'react';
import styles from './InformationSection.module.css';
import PopUpTextButton from "./PopUpTextButton.jsx";

function InformationSection({children, title, addMethodPopUp, addMethodText}) {
    const childrenArray = React.Children.toArray(children);
    const hasScroll = childrenArray.length > 4

    let addPopUpContent = null;

    if (addMethodPopUp !== undefined) {
        addPopUpContent =
            <PopUpTextButton popUpContent={addMethodPopUp} popUpText="Are you sure you want to add this method?">
                {addMethodText}
            </PopUpTextButton>
    }

    return (
        <div className={styles.informationSection}>
            <h2 className={styles.informationSectionTitle}>{title}</h2>
            <div className={`${styles.infoCards} ${hasScroll ? styles.infoCardsScrollable : ""}`}>
                {children}
            </div>
            <div className={styles.addContainer}>
                {addPopUpContent}
            </div>
        </div>
    )
}
export default InformationSection;