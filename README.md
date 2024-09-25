
# API CRUD con MySQL y Sequelize

Este proyecto es una API CRUD (Create, Read, Update, Delete) construida con Node.js, Express, Sequelize y MySQL. Permite gestionar una base de datos de empresas.

## Requisitos previos

- [Node.js](https://nodejs.org/) instalado.
- [MySQL](https://www.mysql.com/) configurado y en ejecución.

## Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   ```

2. Instalar las dependencias:

   ```bash
   npm install
   ```

3. Configurar las variables de entorno:

   Crear un archivo `.env` en la raíz del proyecto y agregar las siguientes variables con la configuración de tu base de datos:

   ```
   DB_NAME=nombre_base_datos
   DB_USER=usuario
   DB_PASSWORD=contraseña
   DB_HOST=localhost
   PORT=4000
   ```

4. Ejecutar el servidor en modo desarrollo:

   ```bash
   npm run dev
   ```

   El servidor estará disponible en `http://localhost:4000`.

## Uso de la API

### Endpoints

#### Obtener todas las empresas
- **GET** `/api/empresas`
  
#### Obtener una empresa por ID
- **GET** `/api/empresa/:id`

#### Crear una nueva empresa
- **POST** `/api/empresa`

  Cuerpo de la solicitud (ejemplo):
  ```json
  {
    "nombre_comercial": "Empresa XYZ",
    "razon_social": "Razón Social XYZ",
    "telefono": "12345678",
    "correo_electronico": "empresa@xyz.com",
    "nit": "123456789",
    "direccion": "Calle Falsa 123"
  }
  ```

#### Actualizar una empresa
- **PUT** `/api/empresa/:id`

  Cuerpo de la solicitud:
  ```json
  {
    "nombre_comercial": "Nuevo nombre",
    "razon_social": "Nueva razón social",
    "telefono": "87654321",
    "correo_electronico": "nueva@empresa.com",
    "nit": "987654321",
    "direccion": "Calle Verdadera 456"
  }
  ```

#### Eliminar una empresa
- **DELETE** `/api/empresa/:id`

## Estructura del proyecto

```
C:.
│   app.js              # Configuración de Express y middlewares
│   config.js           # Configuración general
│   db.js               # Configuración de la base de datos
│   index.js            # Punto de entrada de la aplicación
│
├───controllers
│       empresa.controller.js  # Controladores de las rutas de empresas
│
├───middlewares
│       validator.middleware.js  # Middleware de validación de datos
│
├───models
│       empresa.model.js         # Modelo de Sequelize para la entidad "Empresa"
│       index.js                 # Sincronización de los modelos
│
├───routes
│       empresas.routes.js       # Definición de las rutas de la API
│
├───schemas
│       empresa.schema.js        # Esquema de validación con Zod
│
└───utils
        logger.js               # Configuración de Winston para logs
```

## Contribuciones

Si deseas contribuir a este proyecto, sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Sube tus cambios (`git push origin nueva-funcionalidad`).
5. Abre un pull request.

## Licencia

Este proyecto está bajo la licencia ISC.
