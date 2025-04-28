import React from 'react';
import style from './DeleteAccountButton.module.css';

function DeleteAccountButton({onClick}) {
    return (
        <button onClick={onClick} className={style.DeleteButton}>Delete your account</button>
    )
}
export default DeleteAccountButton;