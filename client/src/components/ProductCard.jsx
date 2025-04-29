// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product, onDelete }) => {
    const handleDeleteClick = () => {
        if (window.confirm(`Are you sure you want to delete "${product.name}"?`)) {
            onDelete(product.product_id);
        }
    };

    return (
        <div style={{ border: '1px solid gray', padding: '1rem', marginBottom: '1rem' }}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Rating: {product.rating}</p>
            <p>Price: ${product.price}</p>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>
    );
};

export default ProductCard;
