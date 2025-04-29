import React from 'react';
import axios from 'axios';

const ComponentDelete = ({ id, onDelete }) => {
    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this component?')) {
            try {
                await axios.delete(`http://localhost:5000/api/components/${id}`);
                onDelete();
            } catch (err) {
                alert('Error deleting component');
            }
        }
    };

    return (
        <button onClick={handleDelete} style={{ marginLeft: 10 }}>Delete</button>
    );
};

export default ComponentDelete;
