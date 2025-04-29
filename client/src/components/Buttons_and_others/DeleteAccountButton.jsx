import React from 'react';
import style from './DeleteAccountButton.module.css';

function DeleteAccountButton() {
    const handleDeleteAccount = async () => {
        const userId = localStorage.getItem('user_id');
        if (!userId) {
            console.error('No user ID found in localStorage');
            return;
        }

        try {
            const response = await axios.delete(`http://localhost:5000/api/users/${userId}`);
            console.log('Deleted:', response.data);
            // Opcional: cerrar sesión, redirigir, etc.
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <button onClick={handleDeleteAccount} className={style.DeleteButton}>Delete your account</button>
    )
}
export default DeleteAccountButton;