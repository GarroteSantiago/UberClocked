import React from 'react';
import styles from './CommonButton.module.css';

function CommonButton({text, action}) {
    return (
        <button className={styles.commonButton} onClick={action}>
            {text}
        </button>
    );
}

export default CommonButton;
