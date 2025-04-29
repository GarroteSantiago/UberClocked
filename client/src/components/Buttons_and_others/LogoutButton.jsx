import React from 'react';
import { useAuth } from '../authentication/AuthContext';
import { useNavigate } from 'react-router-dom';
import TextButton from './TextButton';

const LogoutButton = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <TextButton
            text="Logout"
            url="/login"
            onClick={handleLogout}
        />
    );
};

export default LogoutButton;
