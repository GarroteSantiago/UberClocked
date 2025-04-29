import React from 'react';
import styles from '../components/store/ProductCard.module.css';
import Stars from "../components/Buttons_and_others/Stars.jsx";

const ProductCard = ({ product, onDelete }) => {
    const handleDeleteClick = () => {
        if (window.confirm(`Are you sure you want to delete "${product.name}"?`)) {
            onDelete(product.Product_id);
        }
    };

    return (
        <div className={styles.productCard}>
            <img src={product.img} alt={`Imagen de ${product.name}`} className={styles.productImage} />
            <div className={styles.productInfo}>
                <h2 className={styles.productName}>{product.name}</h2>
                <p className={styles.productDescription}>{product.Description}</p>
                <Stars initialRating={product.rating} />
                <p className={styles.productPrice}>${product.price_id}</p>
                {onDelete && (
                    <button onClick={handleDeleteClick} className={styles.deleteButton}>
                        Delete
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
