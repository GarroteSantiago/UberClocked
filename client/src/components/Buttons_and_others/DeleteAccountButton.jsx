import React from 'react';
import style from './DeleteAccountButton.module.css';

function DeleteAccountButton({onclick}) {
    return (
        <button onClick={onclick} className={style.DeleteButton}>Delete your account</button>
    )
}
export default DeleteAccountButton;