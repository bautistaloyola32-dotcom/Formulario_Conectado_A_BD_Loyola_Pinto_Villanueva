// index.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const port = 3000;

// Middleware para procesar JSON y servir archivos estáticos (tu HTML)
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// 1. Configurar el Conector de la Base de Datos SQLite (Versión pequeña y local)
const db = new sqlite3.Database('./vivero.db', (err) => {
    if (err) {
        console.error('Error al conectar con la base de datos:', err.message);
    } else {
        console.log('Conectado a la base de datos SQLite del vivero.');
        // Crear la tabla si no existe
        db.run(`CREATE TABLE IF NOT EXISTS productos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            nombreCientifico TEXT,
            tipo TEXT NOT NULL,
            cuidados TEXT,
            precio REAL NOT NULL,
            stock INTEGER NOT NULL
        )`);
    }
});

// 2. Ruta para agregar información (Insertar) a la BD
app.post('/guardar-producto', (req, res) => {
    const { nombre, nombreCientifico, tipo, cuidados, precio, stock } = req.body;
    const query = `INSERT INTO productos (nombre, nombreCientifico, tipo, cuidados, precio, stock) VALUES (?, ?, ?, ?, ?, ?)`;
    
    db.run(query, [nombre, nombreCientifico, tipo, cuidados, precio, stock], function(err) {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error al guardar el producto en la base de datos.');
        } else {
            res.status(200).send(`Producto guardado exitosamente con el ID: ${this.lastID}`);
        }
    });
});

// 3. Ruta para extraer información (Leer) de la BD
app.get('/productos', (req, res) => {
    db.all(`SELECT * FROM productos`, [], (err, rows) => {
        if (err) {
            res.status(500).send('Error al consultar la base de datos.');
        } else {
            res.json(rows);
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor del vivero corriendo en http://localhost:${port}`);
});