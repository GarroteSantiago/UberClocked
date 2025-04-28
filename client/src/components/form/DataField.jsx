import React from 'react';
import styles from './DataField.module.css';

function DataField({fieldName, fieldType, id, value, onChange}) {
    return (
        <>
            <div className={styles.container}>
                <input
                    className = {styles.dataField}
                    key={id}
                    type={fieldType}
                    value={value}
                    onChange={onChange}
                    id={id}
                    name={id}
                    placeholder={fieldName} />
            </div>
        </>
    )
}
export default DataField;