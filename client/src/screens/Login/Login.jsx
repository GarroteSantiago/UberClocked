import React from 'react';
import style from './Login.module.css'
import Form from "../../components/form/Form.jsx";

function Login() {

    const title = "Login";
    const fields= [
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
        }
    ]
    const commonButton={
        text: "Login",
    }
    const textButton={
        text: "Forgot password",
        url: "placeHolder"
    }
    const queryUrl="/api/login";
    const redirectUrl="/sign-up";

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
export default Login;