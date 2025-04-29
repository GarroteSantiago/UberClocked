import React, { useState } from 'react';
import axios from 'axios';

const ComponentAdd = ({ onAdd }) => {
    const [form, setForm] = useState({ name: '', type: '', img: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/components', form);
            setForm({ name: '', type: '', img: '' });
            onAdd();
        } catch (err) {
            alert('Error adding component');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
            <input name="type" placeholder="Type" value={form.type} onChange={handleChange} required />
            <input name="img" placeholder="Image URL" value={form.img} onChange={handleChange} />
            <button type="submit">Add</button>
        </form>
    );
};

export default ComponentAdd;
