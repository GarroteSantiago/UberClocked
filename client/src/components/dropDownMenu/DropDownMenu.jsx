import React  from 'react';
import styles from './DropDownMenu.module.css';

function DropDownMenu({children}) {
    return (
        <>
            <div className={styles.dropDownMenu}>
                {children}
            </div>
        </>
    )
}
export default DropDownMenu;