const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const db = require('./db/UberClockedDB');
const app = express();
const PORT = 5000;
const path = require('path');

app.use(cors());
app.use(express.json());

const isAdmin = async (req, res, next) => {
    try {
        const userId = req.headers['user_id'] || req.body.userId;

        if (!userId) {
            return res.status(401).json({ message: 'Authentication required' });
        }

        const [rows] = await db.query('SELECT UserAdmin FROM users WHERE user_id = ?', [userId]);

        if (rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (!rows[0].UserAdmin) {
            return res.status(403).json({ message: 'Access denied: Admin privileges required' });
        }

        next();
    } catch (error) {
        console.error('Error checking admin status:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

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

app.get('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await db.query('SELECT * FROM users WHERE user_id = ?', [id]);
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
    const { username, password, email, confirmPassword, adminCode } = req.body;

    if (!username || !password || !email || !confirmPassword) {
        return res.status(400).json({ message: 'Missing information' });
    }
    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        let isAdmin = false;
        if (adminCode && adminCode === "1234") {
            isAdmin = true;
        }

        const [result] = await db.query(
            'INSERT INTO users (username, password, email, UserAdmin) VALUES (?, ?, ?, ?)',
            [username, hashedPassword, email, isAdmin]
        );

        return res.status(201).json({ message: 'User created', userId: result.insertId });

    } catch (error) {
        console.error('Error signing up user:', error);
        res.status(500).json({ message: 'Error signing up user' });
    }
});
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Missing information' });
    }
    try {
        const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        if (rows.length === 0) {
            return res.status(401).json({ message: 'User not found' });
        }
        const user = rows[0];
        const passwordMatch = await bcrypt.compare(password, user.Password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Incorrect password' });
        }
        return res.status(200).json({
            message: 'Login successful',
            userId: user.user_id,
            username: user.Username,
            isAdmin: user.UserAdmin
        });
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

        const query = `UPDATE users SET ${fields.join(', ')} WHERE user_id = ?`;

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
        const [result] = await db.query('DELETE FROM users WHERE user_id = ?', [id]);

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
        const [rows] = await db.query('SELECT * FROM product');
        res.json(rows);
    } catch (error) {
        console.error('Error getting products:', error);
        res.status(500).json({ message: 'Error getting products' });
    }
});

app.get('/api/component_products/:id', async (req, res) => {
    try {
        const componentId = req.params.id;
        const [rows] = await db.query('SELECT * FROM product WHERE Component_id = ?', [componentId]);
        res.json(rows);
    } catch (error) {
        console.error('Error getting products:', error);
        res.status(500).json({ message: 'Error getting products' });
    }
});

app.get('/api/products/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const [rows] = await db.query('SELECT * FROM product WHERE Product_id = ?', [id]);
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
    const { productName, productDescription, rating, price, Stock, img} = req.body;

    if (!productName && !productDescription && !rating && !price && !Stock && !img) {
        return res.status(400).json({ message: 'At least one field must be provided' });
    }
    try {
        const fields = [];
        const values = [];
        if (productName) {
            fields.push('name = ?');
            values.push(productName);
        }
        if (productDescription) {
            fields.push('Description = ?');
            values.push(productDescription);
        }
        if (rating) {
            fields.push('rating = ?');
            values.push(rating);
        }
        if (price) {
            fields.push('Price_id = ?');
            values.push(price);
        }
        if(Stock){
            fields.push('Stock = ?')
            values.push(Stock);
        }
        if(img){
            fields.push('img = ?')
            values.push(img);
        }

        values.push(id);

        const query = `UPDATE product SET ${fields.join(', ')} WHERE Product_id = ?`;

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

app.post('/api/products', async (req, res) => {
    const { productDescription, price, img, Stock, Component_id, name, rating } = req.body;

    if (!productDescription || !price || !Stock || !Component_id || !name) {
        return res.status(400).json({ message: 'All fields are required: productDescription, price, Stock, Component_id, componentName' });
    }

    try {
        const [productResult] = await db.query(
        'INSERT INTO product (description, price_id, Stock, Component_id, img, name, rating) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [productDescription, price, Stock, Component_id, img, name, rating]
        );
        res.status(201).json({
            message: 'Product created successfully',
            productId: productResult.insertId
        });
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ message: 'Error creating product' });
    }
});

app.delete('/api/products/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await db.query('DELETE FROM product WHERE Product_id = ?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Error deleting product' });
    }
});

app.get('/api/components', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM components');
        res.json(rows);
    } catch (error) {
        console.error('Error getting components:', error);
        res.status(500).json({ message: 'Error getting components' });
    }
});

app.get('/api/components/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await db.query('SELECT * FROM components WHERE component_id = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Component not found' });
        }
        return res.json(rows[0]);
    } catch (error) {
        console.error('Error getting component:', error);
        res.status(500).json({ message: 'Error getting component' });
    }
});

app.post('/api/components', async (req, res) => {
    const { name, type, img } = req.body;
    if (!name || !type) {
        return res.status(400).json({ message: 'Name and type are required' });
    }
    try {
        const [result] = await db.query(
            'INSERT INTO components (name, type, img) VALUES (?, ?, ?)',
            [name, type, img]
        );
        res.status(201).json({ message: 'Component created', componentId: result.insertId });
    } catch (error) {
        console.error('Error creating component:', error);
        res.status(500).json({ message: 'Error creating component' });
    }
});

app.patch('/api/components/:id', async (req, res) => {
    const { id } = req.params;
    const { name, type, img} = req.body;

    try {
        const fields = [];
        const values = [];

        if (name) {
            fields.push('name = ?');
            values.push(name);
        }
        if (type) {
            fields.push('type = ?');
            values.push(type);
        }
        if(img){
            fields.push('img = ?')
            values.push(img);
        }

        if (fields.length === 0) {
            return res.status(400).json({ message: 'At least one field must be provided' });
        }

        values.push(id);

        const query = `UPDATE components SET ${fields.join(', ')} WHERE component_id = ?`;

        const [result] = await db.query(query, values);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Component not found' });
        }

        res.json({ message: 'Component updated successfully' });
    } catch (error) {
        console.error('Error updating component:', error);
        res.status(500).json({ message: 'Error updating component' });
    }
});

app.delete('/api/components/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await db.query('DELETE FROM components WHERE component_id = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Component not found' });
        }
        res.json({ message: 'Component deleted successfully' });
    } catch (error) {
        console.error('Error deleting component:', error);
        res.status(500).json({ message: 'Error deleting component' });
    }
});
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', (req, res) => {
    if (req.path.startsWith('/api')) {
        return res.status(404).json({ message: 'API route not found' });
    }
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
