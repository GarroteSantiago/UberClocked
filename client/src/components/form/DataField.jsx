import React from 'react';
import styles from './DataField.module.css';

function DataField({fieldName, fieldType, id}) {
    return (
        <div className={styles.container}>
            <input key={id} className={styles.dataField} type={fieldType} placeholder={fieldName} />
        </div>
    )
}
export default DataField;