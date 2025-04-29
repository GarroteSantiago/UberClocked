import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
    const [id, setId] = useState(null);
    const [isTokenValid, setIsTokenValid] = useState(false);

    const login = async (email, password) => {
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();
        setId(data.userId);
        localStorage.setItem('user_id', data.userId);
        setIsTokenValid(true);
    };

    const logout = () => {
        setId(null);
        localStorage.removeItem('user_id');
        setIsTokenValid(false);
    };

    const verifyStoredToken = async (storedToken) => {
        try {
            const response = await fetch('http://localhost:5000/api/verify-token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${storedToken}`,
                },
            });

            if (!response.ok) {
                logout();
                return false;
            }

            const data = await response.json();
            if (data.valid) {
                setId(storedToken);
                setIsTokenValid(true);
                return true;
            } else {
                logout();
                return false;
            }
        } catch (error) {
            console.error('Error verifying token:', error);
            logout();
            return false;
        }
    };

    useEffect(() => {
        const initAuth = async () => {
            const storedToken = localStorage.getItem('authToken');
            if (storedToken) {
                await verifyStoredToken(storedToken);
            }
        };
        initAuth();
    }, []);

    const isAuthenticated = id !== null && isTokenValid;

    return (
        <AuthContext.Provider value={{ id, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}