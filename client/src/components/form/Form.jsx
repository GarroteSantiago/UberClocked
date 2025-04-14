import React from 'react';
import styles from './Form.module.css';
import FormTitle from "./FormTitle.jsx";
import DataField from "./DataField.jsx";
import CommonButton from "../Buttons_and_others/CommonButton.jsx";
import TextButtonForm from "./TextButtonForm.jsx";
import MediumLogo from "../logo/MediumLogo.jsx"

function Form({title, fields, commonButton, textButton}) {
    return (
        <div className={styles.formContainer}>
            <MediumLogo />
            < FormTitle text={title} />
            <form>
                {
                    fields.map(
                        field => (
                            <DataField fieldName={field.fieldName} fieldType={field.fieldType} id={field.id} />
                        )
                    )
                }
            </form>
            <CommonButton text={commonButton.text} action={commonButton.action} />
            <TextButtonForm text={textButton.text} url={textButton.url}/>
        </div>
    )
}
export default Form;