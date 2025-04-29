import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Form.module.css';
import FormTitle from "./FormTitle.jsx";
import DataField from "./DataField.jsx";
import CommonButton from "../Buttons_and_others/CommonButton.jsx";
import TextButtonForm from "./TextButtonForm.jsx";
import MediumLogo from "../logo/MediumLogo.jsx";
import { useAuth } from "../authentication/AuthContext.jsx";

function Form({ title, fields, commonButton, textButton, queryUrl, redirectUrl }) {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form data:', formData); // Verifica los datos

    try {
            if (title === "Login") {
                await login(formData.email, formData.password);
                navigate(redirectUrl);
            } else {
                const res = await fetch(queryUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });

                if (res.ok) {
                    navigate(redirectUrl);
                } else {
                    const errorData = await res.json();
                    alert(`Error: ${errorData.message || "Hubo un problema al enviar el formulario."}`);
                }
            }
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <>
            <div className={styles.formContainer}>
                <MediumLogo />
                <FormTitle text={title} />
                <form onSubmit={handleSubmit}>
                    {
                        fields.map(field => (
                            <DataField
                                key={field.id}
                                fieldName={field.fieldName}
                                fieldType={field.fieldType}
                                id={field.id}
                                name={field.name}
                                value={formData[field.name] || ''}
                                onChange={handleChange}
                            />
                        ))
                    }
                    <CommonButton
                        text={commonButton.text}
                        action={handleSubmit}
                    />
                </form>
                <TextButtonForm text={textButton.text} url={textButton.url} />
            </div>
        </>
    );
}

export default Form;
