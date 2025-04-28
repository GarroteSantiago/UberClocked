import React, { useState } from 'react';
import style from './Login.module.css'
import Form from "../../components/form/Form.jsx";

function Login() {

    const title = "Login";

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const fields = [
        {
            fieldName: "Email",
            fieldType: "email",
            id: "email",
            value: email,
            onChange: (e) => setEmail(e.target.value)
        },
        {
            fieldName: "Password",
            fieldType: "password",
            id: "password",
            value: password,
            onChange: (e) => setPassword(e.target.value)
        }
    ];

    const commonButton = {
        text: "Login",
        action: async () => {
            try {
                const response = await fetch('/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                });

                if (!response.ok) {
                    throw new Error('Credenciales incorrectas');
                }

                const data = await response.json();
                localStorage.setItem('token', data.token);
                window.location.href = '/home';
            } catch (err) {
                setError(err.message);
            }
        }
    };

    const textButton = {
        text: "Forgot password",
        url: "recovery"
    };

    return (
        <div className={style.screen}>
            {error && <div className={style.error}>{error}</div>}
            <Form
                title={title}
                fields={fields}
                commonButton={commonButton}
                textButton={textButton}
            />
        </div>
    );
}
export default Login;