import React from 'react';
import styles from './ImageButton.module.css';
import {Link} from "react-router-dom";

function ImageButton({image, alt, url}) {
    return (
        <>
            <Link to={url} className={styles.imageButton}>
                <img src={image} alt={alt} width={95} height={100} />
            </Link>
        </>
    )
}
export default ImageButton;