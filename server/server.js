const express = require('express');
const cors = require('cors');
const app = express();
const bcrypt = require('bcrypt');
const db = require('./db/UberClockedDB');
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/users', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM users');
        res.json(rows);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ message: 'Error al obtener usuarios' });
    }
});
app.get('/api/SingUp', async (req, res) => {
    const {userName, password, mail} = req.body;
    if (!userName || !password || !mail) {
        return res.status(400).json({message: 'missing information'})
    }
    try{
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const [result] = await db.query('INSERT into users (username, password, email) VALUE (?,?,?)',
            [userName, hashedPassword, mail]);
        res.status(201).json({message: 'User created', userID: result.insertId});
    }catch (error) {
        console.error('Error al registrar al usuario:', error);
        res.status(500).json({ message: 'Error al registrar usuario' });
    }
})
app.post('/api/Login', async (req, res) => {
    const {username, password, email} = req.body;
    if (!username || !password || !email ) {
        return res.status(400).json({message: 'missing information'})
    }
    try {
        const saltRounds = 10;
        const hashedPassword = bcrypt.hash(password, saltRounds);

        const [result] = await db.query('SELECT * FROM users WHERE email = ?',[email])

        if(result.length === 0) {
           return res.status(401).json({message: 'User not found'})
        }
        const user = result[0];
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }
        res.status(200).json({message: 'Success Login', userID: user.id,userName: user.username});
    }
    catch (error) {
        console.error('Error Login:', error);
        res.status(500).json({ message: 'Error en el login' });
    }
})

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
