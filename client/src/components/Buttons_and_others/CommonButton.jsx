import React from 'react';
import styles from './CommonButton.module.css';

function CommonButton({ text, action }) {
    return (
        <button
            type="submit"  // Asegúrate de que el botón sea de tipo submit
            className={styles.commonButton}
            onClick={action}  // Aquí se mantiene el action, que es la función de envío
        >
            {text}
        </button>
    );
}

export default CommonButton;
