# (Manual) Formulario Web y Base de Datos

## 1. ¿Qué es un conector de base de datos?

Un **conector de base de datos** es un componente de software que permite que una aplicación se comunique con una base de datos para consultar, agregar, modificar o eliminar información. Funciona como un intermediario entre el programa y el sistema gestor de bases de datos: recibe las instrucciones de la aplicación, las traduce al formato que entiende la base de datos y devuelve los resultados.

---

## 2. ¿Cómo se conecta Node.js con el formulario y la base de datos?

Para que el servidor de Node.js pueda recibir los datos enviados desde el formulario web y guardarlos de forma permanente en la base de datos SQLite (`vivero.db`), se implementa una arquitectura basada en el entorno backend. El funcionamiento interno se divide en cuatro etapas principales:

### Paso 1: Instalación de dependencias (Herramientas base)

Para que Node.js entienda peticiones web y hable con SQLite, el proyecto utiliza librerías o módulos específicos:

* **Express:** Un framework para Node.js que facilita la creación del servidor web, la gestión de rutas y la recepción de datos.
* **SQLite3 (o sqlite):** El controlador que permite abrir, leer y escribir directamente sobre el archivo de la base de datos.

Estas herramientas se descargan e instalan automáticamente en la carpeta del proyecto al ejecutar el comando `npm install` (el cual lee las dependencias indicadas en el archivo `package.json`).

### Paso 2: Configuración del servidor y enlace con la Base de Datos

En el archivo principal **`server.js`**, se realizan las siguientes acciones al iniciar la aplicación:

* Se importa **Express** y se inicializa la aplicación del servidor (`const app = express();`).
* Se configuran los *middlewares* necesarios, especialmente `express.urlencoded({ extended: true })`, que le permite a Node.js interpretar y traducir los datos que viajan desde los inputs del formulario web.
* Se establece la conexión con la base de datos SQLite, apuntando directamente a la ruta del archivo **`vivero.db`**.

### Paso 3: Recepción de datos del formulario (Ruta POST)

El flujo cuando un usuario interactúa con la página es el siguiente:

1. El usuario completa los campos en el formulario web (`index.html`) y presiona el botón **Cargar**.
2. El navegador emite una petición HTTP de tipo **`POST`** hacia el servidor local (`http://localhost:3000`).
3. El servidor Node.js intercepta esa petición en una ruta específica (por ejemplo, `app.post('/guardar', ...)`).
4. A través del objeto `req.body`, Node.js extrae los valores que el usuario escribió en el formulario.

### Paso 4: Inserción mediante consultas SQL

Una vez que el servidor tiene los datos recolectados en variables de JavaScript, ejecuta una sentencia SQL de inserción:

* Se redacta la consulta del tipo `INSERT INTO productos (nombre, stock, precio) VALUES (?, ?, ?)`.
* Se pasan los datos del formulario de forma segura como parámetros para evitar errores o inyecciones.
* SQLite procesa la consulta y actualiza el archivo **`vivero.db`**.

---

## 3. Instrucciones de ejecución y uso del formulario

Para poner en marcha el proyecto y enviar datos al servidor:

1. Abrir la consola de comandos (**cmd**) en la carpeta donde se encuentran los archivos del proyecto (Ejemplo: `C:\Users\Estudiante\Downloads\Formulario_Conectado_A_BD_Loyola_Pinto_Villanueva-main`).
2. Ejecutar el siguiente comando para iniciar el servidor:
```bash
node server.js

```


* Si todo funciona correctamente, la consola mostrará: `"Servidor del vivero corriendo en http://localhost:3000"`.
* **Nota de solución de errores:** Si se presenta un error al iniciar, ejecute `npm install` en la consola. Al finalizar la descarga, vuelva a ejecutar `node server.js`.


4. Abrir **Google Chrome** (o cualquier navegador web) e ingresar a la dirección: `http://localhost:3000`
5. Completar los campos del formulario y presionar el botón **Cargar** para registrar la información en la base de datos.

---

## 4. Visualización de tablas y tuplas en DBeaver

Para visualizar e inspeccionar los datos almacenados en **`vivero.db`**, siga estos pasos:

1. Abrir **DBeaver**.
2. Ir a la opción **Base de Datos** en el menú superior y seleccionar **Nueva conexión de base de datos**.
3. Buscar y seleccionar **SQLite**, luego hacer clic en **Siguiente**.
4. En el apartado **Path**, hacer clic en **Abrir**.
5. Navegar con el explorador de archivos hasta la carpeta del proyecto y seleccionar el archivo **`vivero.db`**.
6. Hacer clic en **Probar conexión**. Si indica que se realizó correctamente, seleccionar **Finalizar**.
7. Ir al menú superior y seleccionar **Ventana**.
8. En el menú desplegable, seleccionar **Proyectos**.
9. En la pestaña lateral izquierda, desplegar el menú **Conexiones** y luego desplegar **Vivero**.
10. Desplegar la sección **Tablas**.
11. Hacer doble clic sobre la tabla **Productos**.
12. Hacer doble clic en **Columnas**. En el panel que se abre a la derecha, seleccionar la pestaña **Datos** en la parte superior.

Una vez completados estos pasos, se podrán visualizar todos los registros y productos almacenados en la base de datos.
