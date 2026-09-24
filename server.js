const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname)));

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'biblioteca',
    port: 13306
});

conexion.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('¡Conectado a la base de datos exitosamente!');
});

app.post('/guardar-producto', (req, res) => {
    const { nombre, nombreCientifico, tipo, cuidados, precio, stock } = req.body;

    const sql = `INSERT INTO productos (nombre, nombre_cientifico, tipo, cuidados, precio, stock) VALUES (?, ?, ?, ?, ?, ?)`;
    const valores = [nombre, nombreCientifico, tipo, cuidados, precio, stock];

    conexion.query(sql, valores, (err, resultado) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Hubo un error al guardar en la base de datos.');
        }
        res.send('¡Producto cargado exitosamente!');
    });
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});