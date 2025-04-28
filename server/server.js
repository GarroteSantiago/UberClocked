
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const db = require('./db/UberClockedDB');
const app = express();
const PORT = 5000;
const path = require('path');

app.use(cors());
app.use(express.json());

// USERS
app.get('/api/users', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM users');
        res.json(rows);
    } catch (error) {
        console.error('Error getting users:', error);
        res.status(500).json({ message: 'Error getting users' });
    }
});

app.get('/api/users/:username', async (req, res) => {
    const { username } = req.params;
    try {
        const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.json(rows[0]);
    } catch (error) {
        console.error('Error getting user:', error);
        res.status(500).json({ message: 'Error getting user' });
    }
});

app.post('/api/sign-up', async (req, res) => {
    const { username, password, email, confirmPassword } = req.body;
    if (!username || !password || !email || !confirmPassword) {
        console.log(username, password, email, confirmPassword);
        return res.status(400).json({ message: 'Missing information' });
    }
    try {
        if(password !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const [result] = await db.query(
            'INSERT INTO users (username, password, email) VALUES (?, ?, ?)',
            [username, hashedPassword, email]
        );

        res.status(201).json({ message: 'User created', userId: result.insertId });
    } catch (error) {
        console.error('Error signing up user:', error);
        res.status(500).json({ message: 'Error signing up user' });
    }
});

app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Missing information' });
    }
    try {
        const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username]);

        if (rows.length === 0) {
            return res.status(401).json({ message: 'User not found' });
        }

        const user = rows[0];
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Incorrect password' });
        }

        res.status(200).json({ message: 'Login successful', userId: user.id, username: user.username });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Error logging in' });
    }
});

app.patch('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    const { username, password, email } = req.body;

    if (!username && !password && !email) {
        return res.status(400).json({ message: 'At least one field must be provided' });
    }

    try {
        const fields = [];
        const values = [];

        if (username) {
            fields.push('username = ?');
            values.push(username);
        }
        if (email) {
            fields.push('email = ?');
            values.push(email);
        }
        if (password) {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            fields.push('password = ?');
            values.push(hashedPassword);
        }

        values.push(id);

        const query = `UPDATE users SET ${fields.join(', ')} WHERE id = ?`;

        const [result] = await db.query(query, values);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'User updated successfully' });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Error updating user' });
    }
});

app.delete('/api/users/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await db.query('DELETE FROM users WHERE id = ?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Error deleting user' });
    }
});

// PRODUCTS
app.get('/api/products', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM products');
        res.json(rows);
    } catch (error) {
        console.error('Error getting products:', error);
        res.status(500).json({ message: 'Error getting products' });
    }
});

app.get('/api/products/:productName', async (req, res) => {
    const { productName } = req.params;
    try {
        const [rows] = await db.query('SELECT * FROM products WHERE product_name = ?', [productName]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }
        return res.json(rows[0]);
    } catch (error) {
        console.error('Error getting product:', error);
        res.status(500).json({ message: 'Error getting product' });
    }
});

app.patch('/api/products/:id', async (req, res) => {
    const { id } = req.params;
    const { productName, productDescription, rating, price } = req.body;

    if (!productName && !productDescription && !rating && !price) {
        return res.status(400).json({ message: 'At least one field must be provided' });
    }

    try {
        const fields = [];
        const values = [];

        if (productName) {
            fields.push('product_name = ?');
            values.push(productName);
        }
        if (productDescription) {
            fields.push('product_description = ?');
            values.push(productDescription);
        }
        if (rating) {
            fields.push('rating = ?');
            values.push(rating);
        }
        if (price) {
            fields.push('price = ?');
            values.push(price);
        }

        values.push(id);

        const query = `UPDATE products SET ${fields.join(', ')} WHERE id = ?`;

        const [result] = await db.query(query, values);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json({ message: 'Product updated successfully' });
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ message: 'Error updating product' });
    }
});

app.delete('/api/products/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await db.query('DELETE FROM products WHERE id = ?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Error deleting product' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', (req, res) => {
    if (req.path.startsWith('/api')) {
        return res.status(404).json({ message: 'API route not found' });
    }
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
