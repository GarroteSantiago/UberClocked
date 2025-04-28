import React from 'react';
import styles from './ImageButton.module.css';
import {Link} from "react-router-dom";

function ImageButton({image, alt, url}) {
    return (
        <>
            <Link to={url} className={styles.imageButton}>
                <img src={image} alt={alt} className={styles.image}/>
            </Link>
        </>
    )
}
export default ImageButton;