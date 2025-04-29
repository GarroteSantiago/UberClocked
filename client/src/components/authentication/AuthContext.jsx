// AuthContext.jsx - Updated
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
    const [token, setToken] = useState(null);
    const [isTokenValid, setIsTokenValid] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

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
        console.log('Login successful. Response data:', data);  // Verifica los valores
        setToken(data.userId);
        localStorage.setItem('user_id', data.userId);
        localStorage.setItem('isAdmin', data.isAdmin);
        localStorage.setItem('username', data.username);
        console.log(localStorage.getItem('user_id'));  // Debería mostrar el ID del usuario
        console.log(localStorage.getItem('isAdmin'));  // Debería mostrar true o false
        console.log(localStorage.getItem('username'));  // Debería mostrar el nombre del usuario
        setIsTokenValid(true);
        setIsAdmin(data.isAdmin);

        return data;
    };

    const logout = () => {
        setToken(null);
        setIsAdmin(false);
        localStorage.removeItem('user_id');
        localStorage.removeItem('isAdmin');
        setIsTokenValid(false);
    };

    const checkAdminStatus = async (userId) => {
        try {
            const response = await fetch('http://localhost:5000/api/check-admin', {
                headers: {
                    'userid': userId
                }
            });

            if (response.ok) {
                const data = await response.json();
                setIsAdmin(data.isAdmin);
                return data.isAdmin;
            }
            return false;
        } catch (error) {
            console.error('Error checking admin status:', error);
            return false;
        }
    };

    useEffect(() => {
        const initAuth = async () => {
            const storedUserId = localStorage.getItem('user_id');
            const storedIsAdmin = localStorage.getItem('isAdmin') === 'true';

            if (storedUserId) {
                setToken(storedUserId);
                setIsTokenValid(true);
                setIsAdmin(storedIsAdmin);

                // Verify admin status from server
                await checkAdminStatus(storedUserId);
            }
        };
        initAuth();
    }, []);

    const isAuthenticated = token !== null && isTokenValid;

    return (
        <AuthContext.Provider value={{
            token,
            login,
            logout,
            isAuthenticated,
            isAdmin,
            checkAdminStatus
        }}>
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