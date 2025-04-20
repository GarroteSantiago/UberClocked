import React from 'react';
import styles from './ProductCard.module.css';
import Stars from "../Buttons_and_others/Stars.jsx";

function ProductCard({product}) {
    return (
        <>
            <div className={styles.productCard}>
                <img src={product.image} alt={product.alt} className={styles.productImage} />
                <div className={styles.productInfo}>
                    <h2 className={styles.productName}>{product.title}</h2>
                    <p className={styles.productDescription}>{product.description}</p>
                    <Stars initialRating={product.rating}/>
                    <p className={styles.productPrice}>{product.price}</p>
                </div>
            </div>
        </>
    )
}
export default ProductCard;