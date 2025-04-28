import React from 'react';
import style from './SignUp.module.css';
import Form from "../components/form/Form.jsx";

function SignUp() {
    const title = "SignUp";
    const fields= [
        {
            fieldName: "Username",
            fieldType: "text",
            id: "username"
        },
        {
            fieldName: "Email",
            fieldType: "email",
            id: "email"
        },
        {
            fieldName: "Password",
            fieldType: "password",
            id: "password"
        },
        {
            fieldName: "Confirm Password",
            fieldType: "password",
            id: "re-password"
        }
    ]
    const commonButton={
        text: "SignUp",
        action: () => alert('Button clicked')
    }
    const textButton={}


    return (
        <div className={style.screen}>
            <Form
                title={title}
                fields={fields}
                commonButton={commonButton}
                textButton={textButton}
            />
        </div>
    )
}
export default SignUp;