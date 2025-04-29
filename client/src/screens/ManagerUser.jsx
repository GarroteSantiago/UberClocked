import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ManagerUser() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    const fetchUsers = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/users');
            console.log(res.data); // Verifica los datos en consola
            setUsers(res.data);
        } catch (err) {
            console.error('Error fetching users:', err);
            setError('Error fetching users');
        }
    };
    console.log('user_id en localStorage:', localStorage.getItem('user_id'));

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/users/${id}`, {

                headers: {
                    user_id: localStorage.getItem('user_id')
                }
            });
            fetchUsers();
        } catch (err) {
            console.error('Delete error:', err.response?.data || err.message);
            alert('Error deleting user: ' + (err.response?.data?.message || err.message));
        }
    };


    useEffect(() => {
        fetchUsers(); // Usa solo axios
    }, []);

    return (
        <div>
            <h2>Manage Users</h2>
            {error && <p>{error}</p>}
            <ul>
                {users.map((user) => (
                    <li key={user.user_id}>
                        {user.Username} ({user.Email})
                        <button onClick={() => handleDelete(user.user_id)}>Delete</button>
                        <a href={`/edit-user/${user.user_id}`}>Edit</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
