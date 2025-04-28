import React from 'react';
import style from './SignUp.module.css';
import Form from "../../components/form/Form.jsx";

function SignUp() {
    const title = "SignUp";
    const fields= [

        {
            fieldName: "Username",
            fieldType: "text",
            id: "username",
            name: "username",
        },
        {
            fieldName: "Email",
            fieldType: "email",
            id: "email",
            name: "email",
        },
        {
            fieldName: "Password",
            fieldType: "password",
            id: "password",
            name: "password"
        },
        {
            fieldName: "Confirm Password",
            fieldType: "password",
            id: "re-password",
            name: "confirmPassword",
        }
    ]
    const commonButton={
        text: "SignUp",
        action: () => alert('Button clicked')
    }

    const textButton={}
    const queryUrl="/api/sign-up"
    const redirectUrl = "/login"


    return (
        <div className={style.screen}>
            <Form
                title={title}
                fields={fields}
                commonButton={commonButton}
                textButton={textButton}
                queryUrl={queryUrl}
                redirectUrl={redirectUrl}
            />
        </div>
    )
}
export default SignUp;