import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProductCard.module.css';

function ComponentCard({component }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`SearchByComponent`);
    };

    return (
        <div onClick={handleClick} className={styles.productCard} style={{ cursor: 'pointer' }}>
            <img src={component.img} className={styles.productImage}  alt={component.alt}/>
            <div className={styles.productInfo}>
                <h2 className={styles.productName}>{component.name}</h2>
                <p className={styles.productDescription}>{component.type}</p>
            </div>
        </div>
    );
}

export default ComponentCard;
