import React from 'react'
import style from './LargeLogo.module.css'

function LargeLogo(){
    return (
        <div className={style.logoContainer}>
            <img src="/Logo.svg" alt="Logo"/>
        </div>
    )
}
export default LargeLogo;