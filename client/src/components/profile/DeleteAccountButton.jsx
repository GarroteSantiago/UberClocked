import React from 'react';
import style from './DeleteAccountButton.module.css';
import TextButton from "../../components/Buttons_and_others/TextButton.jsx";

function DeleteAccountButton({onclick}) {
    return (
        <button onClick={onclick} className={style.DeleteButton}>Delete your account</button>
    )
}
export default DeleteAccountButton;