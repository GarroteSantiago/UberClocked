import React from 'react';
import style from './Login.module.css'
import Form from "../../components/form/Form.jsx";

function Login() {

    const title = "Login";
    const fields= [
        {
            fieldName: "Email",
            fieldType: "email",
            id: "email"
        },
        {
            fieldName: "Password",
            fieldType: "password",
            id: "password"
        }
    ]
    const commonButton={
        text: "Login",
        action: () => alert('Button clicked')
    }
    const textButton={
        text: "Forgot password",
        url: "placeHolder"
    }
    const queryUrl="/api/login";


    return (
        <div className={style.screen}>
            <Form
                title={title}
                fields={fields}
                commonButton={commonButton}
                textButton={textButton}
                queryUrl={queryUrl}
            />
        </div>
    )
}
export default Login;