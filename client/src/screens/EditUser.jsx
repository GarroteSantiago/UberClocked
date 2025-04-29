import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function EditUser() {
    const { id } = useParams();
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        axios.get(`http://localhost:5000/api/users/${id}`)
            .then(res => {
                setForm({
                    username: res.data.Username,
                    email: res.data.Email,
                    password: ''
                });
            });
    }, [id]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/api/users/${id}`, form);
            alert('User updated successfully');
        } catch (error) {
            alert('Error updating user');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="username" value={form.username} onChange={handleChange} />
            <input name="email" value={form.email} onChange={handleChange} />
            <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="New password (optional)" />
            <button type="submit">Update</button>
        </form>
    );
}
