import React, { useState } from 'react';
import axios from 'axios';

export default function AddUser() {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        adminCode: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/sign-up', form);
            alert('User added successfully');
        } catch (error) {
            alert('Error creating user');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="username" placeholder="Username" onChange={handleChange} required />
            <input name="email" placeholder="Email" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
            <input name="adminCode" placeholder="Admin Code (optional)" onChange={handleChange} />
            <button type="submit">Create User</button>
        </form>
    );
}
