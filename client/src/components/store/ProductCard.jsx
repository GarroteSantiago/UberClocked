import React from 'react';
import styles from './ProductCard.module.css';

function ProductCard({product}) {
    return (
        <>
            <div className={styles.productCard}>
                <img src={product.image} alt={product.alt} className={styles.productImage} />
                <div className={styles.productInfo}>
                    <h2 className={styles.productName}>{product.title}</h2>
                    <p className={styles.productDescription}>{product.description}</p>
                    <p className={styles.productPrice}>{product.price}</p>
                </div>
            </div>
        </>
    )
}
export default ProductCard;