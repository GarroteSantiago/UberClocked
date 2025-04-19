import React, { useState } from 'react';
import styles from './Stars.module.css';

//Evitar realizar cambios bruscos
const StarRating = ({ totalStars = 5, initialRating = 1, onRate }) => {
    const [rating, setRating] = useState(initialRating);
    const [hover, setHover] = useState(null);

    const handleClick = (value) => {
        setRating(value);
        if (onRate) onRate(value);
    };

    return (
        <div className={styles.staRating}>
            {[...Array(totalStars)].map((_, index) => {
                const value = index + 1;
                const isFilled = value <= (hover || rating);
                return (
                    <span
                        key={value}
                        className={`${styles.star} ${isFilled ? styles.filled : ''}`}
                        onClick={() => handleClick(value)}
                        onMouseEnter={() => setHover(value)}
                        onMouseLeave={() => setHover(null)}
                    >
            ★
          </span>
                );
            })}
        </div>
    );
};

export default StarRating;
