import React from 'react'
import style from './MediumLogo.module.css'

function MediumLogo(){
    return (
        <div className={style.logoContainer}>
            <img src="/Logo.svg" alt="Logo"/>
        </div>
    )
}
export default MediumLogo;