import React from 'react';
import style from './UserData.module.css';

function UserData({userName, userEmail}) {
    return (
        <div className={style.container}>
            <img src="../../../public/UserDefaultImage.svg" />
            <div className={style.infoContainer}>
                <h1>{userName}</h1>
                <p>{userEmail}</p>
            </div>
        </div>
    )
}
export default UserData;