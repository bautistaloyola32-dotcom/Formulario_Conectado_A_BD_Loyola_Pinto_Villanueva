# (Manual) Formulario web y Base de datos

## ¿Qué es un conector de base de datos?

Un **conector de base de datos** es un componente de software que permite que una aplicación se comunique con una base de datos para consultar, agregar, modificar o eliminar información. Funciona como un intermediario entre el programa y el sistema gestor de bases de datos: recibe las instrucciones de la aplicación, las traduce al formato que entiende la base de datos y devuelve los resultados.

## Cómo conectar el formulario web a una base de datos

Para que el formulario funcione correctamente, primero hay que ejecutar el servidor **Apache** desde **XAMPP**.

Después, hay que levantar el servidor del proyecto. Para hacerlo, se debe abrir la **cmd** desde la carpeta donde están guardados todos los archivos del proyecto (Ej: `C:\Users\Estudiante\Downloads\Formulario_Conectado_A_BD_Loyola_Pinto_Villanueva-main`). Una vez abierta, se ejecuta el siguiente comando:

`node server.js`

Si todo funciona correctamente, debería aparecer el siguiente mensaje:

`"Servidor del vivero corriendo en http://localhost:3000"` 

Si aparece un error, ejecute el comando `npm install` en el cmd, una vez que termine de cargar, ejecute `node server.js` nuevamente.

A continuación, se abre **Google Chrome** (o cualquier otro navegador) y se ingresa a:

`http://localhost:3000`

En ese link se abrira el formulario, llene los campos y presione el boton **Cargar** para que los datos sean cargados en la base de datos. 

### ¿Y comó visualizamos las tablas y tuplas de la base de datos?

Para visualizar los datos que se van cargando en la base de datos, hay que abrir **DBeaver**:

1. Ir a la opción **Base de Datos** y seleccionar **Nueva conexión de base de datos**.

2. Buscar y seleccionar la opción **SQLite**.
3. Hacer clic en **Siguiente**.

4. En el apartado **Path**, se debe indicar la ubicación del archivo de la base de datos. Para hacerlo, seleccionar **Abrir**.

5. Se abrirá el explorador de archivos. Allí hay que dirigirse a la carpeta del proyecto y seleccionar el archivo **`vivero.db`**.

6. Antes de finalizar, seleccionar **Probar conexión**. Si aparece un mensaje indicando que la conexión se realizó correctamente, hacer clic en **Finalizar**.

7. Ir al apartado superior y seleccione **Ventana**.

8. Se abrira un menu, seleccione **Proyectos**.

9. En el lado izquierdo se abrira esa pestaña, abajo esta el menu desplegable de **Conecciones**, abralo y despliegue **Vivero** tambien.

9. Apareceran varias opciones. Seleccione **Tablas**.

10. Dentro de **Tablas**, haga doble click en **Productos**.

11. Hacer doble clic en **Columnas**. A la derecha se abrira un panel, arriba de ese panel seleccione la pestaña **Datos**. 

Una vez hecho esto, se podrán visualizar todos los productos almacenados en la base de datos.