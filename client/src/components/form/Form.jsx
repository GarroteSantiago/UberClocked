import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Form.module.css';
import FormTitle from "./FormTitle.jsx";
import DataField from "./DataField.jsx";
import CommonButton from "../Buttons_and_others/CommonButton.jsx";
import TextButtonForm from "./TextButtonForm.jsx";
import MediumLogo from "../logo/MediumLogo.jsx";

function Form({title, fields, commonButton, textButton, queryUrl, redirectUrl}) {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(queryUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData),
            });

            if (res.ok) {
                navigate(redirectUrl);
            } else {
                const errorData = await res.json();
                alert(`Error: ${errorData.message || "Hubo un problema al enviar el formulario."}`);
            }
        } catch (error) {
            alert(`Error en la solicitud: ${error.message}`);
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
                                name={field.fieldName.toLowerCase()}
                                value={formData[field.fieldName.toLowerCase()] || ''}
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
