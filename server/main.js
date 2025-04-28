const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

// Crear el servidor
const server = http.createServer((req, res) => {
    console.log(`Request for ${req.url}`);

    // Ajustar la ruta: ir a ../client/build
    let filePath = path.join(__dirname, '..', 'client', 'dist', req.url === '/' ? 'index.html' : req.url);

    // Obtener extensión
    let extname = path.extname(filePath);
    let contentType = 'text/html';

    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.svg':
            contentType = 'image/svg+xml';
            break;
        case '.ico':
            contentType = 'image/x-icon';
            break;
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // Si no encuentra el archivo, enviar el index.html para que React maneje las rutas
                fs.readFile(path.join(__dirname, '..', 'client', 'build', 'index.html'), (error, content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf-8');
                });
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

// Escuchar el puerto
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});