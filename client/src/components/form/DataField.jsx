import React from 'react';
import styles from './DataField.module.css';

function DataField({fieldName, fieldType, id}) {
    return (
        <input key={id} className={styles.dataField} type={fieldType} placeholder={fieldName} />
    )
}
export default DataField;