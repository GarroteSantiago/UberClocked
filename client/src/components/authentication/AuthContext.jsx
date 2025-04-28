import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [token, setToken] = useState(null);

    const login = async (email, password) => {
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();
        setToken(data.token);
        localStorage.setItem('authToken', data.token);
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem('authToken');
    };

    const verifyToken = async () => {
        const storedToken = localStorage.getItem('authToken');
        if (!storedToken) return false;

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
        setToken(storedToken);
        return data.valid;
    };

    return (
        <AuthContext.Provider value={{ token, login, logout, verifyToken }}>
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