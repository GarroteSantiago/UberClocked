import React from 'react';
import styles from './DataField.module.css';

function DataField({fieldName, fieldType, id, value, onChange, name}) {
    return (
        <div className={styles.container}>
            {fieldType === 'checkbox' && (
                <p>{fieldName}</p>
            )}
            <input
                key={id}
                className={styles.dataField}
                type={fieldType}
                placeholder={fieldName}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default DataField;
