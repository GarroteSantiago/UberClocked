import React from 'react';
import style from './DeleteAccountButton.module.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";

function DeleteAccountButton() {

    const navigate = useNavigate();
    const handleDeleteAccount = async () => {
        const userId = localStorage.getItem('user_id');

        if (!userId) {
            console.error('No user ID found in localStorage');
            return;
        }

        try {
            const response = await axios.delete(`http://localhost:5000/api/users/${userId}`);
            console.log('Deleted:', response.data);
            localStorage.clear();
            // Redirect to login
            navigate('/sign-up');
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };


    return (
        <button onClick={handleDeleteAccount} className={style.DeleteButton}>Delete your account</button>
    )
}
export default DeleteAccountButton;