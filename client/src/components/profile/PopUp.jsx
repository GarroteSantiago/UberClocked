import React from "react";
import styles from "./PopUp.module.css";
import {useState} from "react";
import DataField from "../form/DataField.jsx";
import CommonButton from "../Buttons_and_others/CommonButton.jsx";

function PopUp({ children, onClose, text, id}) {

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const patch = async () => {
        const payload = {};
        if (userName) payload.userName = userName;
        if (userEmail) payload.userEmail = userEmail;
        if (userPassword) payload.userPassword = userPassword;

        if (Object.keys(payload).length === 0) {
            alert("Insert one item to patch");
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/api/users/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error('Error in PATCH request');
            }

            const result = await response.json();
            console.log('Successful patch:', result);
        } catch (error) {
            console.error('Error during the PATCH:', error);
        }
    };

    return (
        <>
            <div className={styles.overlayContent} onClick={(e) => e.stopPropagation()}>
                <h3>{text}</h3>

                {children}

                <div>
                    <DataField
                        fieldName="User Name"
                        fieldType="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div>
                    <DataField
                        fieldName="Email"
                        fieldType="email"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                    />
                </div>
                <div>
                    <DataField
                        fieldName="Password"
                        fieldType="password"
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                    />
                </div>

                <p>Confirm writing your password below</p>
                <DataField fieldName="Password" fieldType={"password"}/>
                <CommonButton text="Confirm"/>
                <CommonButton text="Cancel" action={onClose}/>
            </div>
        </>
    );
}

export default PopUp;