import React from 'react';
import styles from './Form.module.css';
import FormTitle from "./FormTitle.jsx";
import DataField from "./DataField.jsx";
import CommonButton from "../Buttons_and_others/CommonButton.jsx";
import TextButtonForm from "./TextButtonForm.jsx";
import MediumLogo from "../logo/MediumLogo.jsx";

<<<<<<< HEAD
function Form({title, fields, commonButton, textButton, formData, setFormData}) {
    const handleChange = (event) => {
        const {id, value} = event.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    }
=======
function Form({ title, fields, commonButton, textButton }) {
>>>>>>> 4c20a9a (.)
    return (
        <>
            <div className={styles.formContainer}>
                <MediumLogo />
                <FormTitle text={title} />
                <form>
                    {
                        fields.map(
<<<<<<< HEAD
                            field => (
=======
                            (field) => (
>>>>>>> 4c20a9a (.)
                                <DataField
                                    key={field.id}
                                    fieldName={field.fieldName}
                                    fieldType={field.fieldType}
<<<<<<< HEAD
                                    value={FormData[field.id]}
                                    onChange={handleChange}
                                    id={field.id}/>
=======
                                    id={field.id}
                                    value={field.value}
                                    onChange={field.onChange}
                                />
>>>>>>> 4c20a9a (.)
                            )
                        )
                    }
                </form>
                <CommonButton text={commonButton.text} action={commonButton.action} />
                <TextButtonForm text={textButton.text} url={textButton.url} />
            </div>
        </>
    );
}

export default Form;
