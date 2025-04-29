import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import ProductCarousel from '../components/store/ProductCarousel';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                setProducts(response.data);
            } catch (error) {
                setError('Error fetching products');
            }
        };
        fetchProducts();
    }, []);

    const handleDelete = async (productId) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            try {
                const response = await axios.delete(`http://localhost:5000/api/products/${productId}`);
                if (response.status === 200) {
                    setProducts(products.filter(product => product.Product_id !== productId));
                    alert('Product deleted successfully');
                }
            } catch (error) {
                console.error('Error deleting product:', error);
                setError('Error deleting product');
            }
        }
    };

    return (
        <div>
            <h2>Product Management</h2>
            {error && <p>{error}</p>}
            <button onClick={() => navigate('/add-product')}>Add Product</button>
            <ProductCarousel>
                {products.map((product) => (
                    <ProductCard
                        key={product.Product_id}
                        product={product}
                        onDelete={handleDelete}
                    />
                ))}
            </ProductCarousel>
        </div>
    );
};

export default ProductList;
