# To-Do App

Este proyecto es una aplicación web para gestionar tareas, desarrollada con **NestJS** y **TypeScript** en el backend. La aplicación incluye autenticación JWT y CRUD de tareas, además de conexión a una base de datos PostgreSQL configurada con Docker.



#### Requisitos Previos

- **Node.js** (versión recomendada: 16.x o superior)
- **NestJS CLI** (instalación recomendada con `npm i -g @nestjs/cli`)
- **Docker** y **Docker Compose** (para la base de datos)



### Dependencias

```
npm install
```

### Iniciar la Base de Datos con Docker

Se optó por usar `docker-compose` para manejar la base de datos PostgreSQL, facilitando la configuración y permitiendo levantar el entorno de manera rápida y consistente, sin depender de la configuración local del desarrollador (yo).

1. Asegúrate de tener **Docker** y **Docker Compose** instalados.
2. Levanta el contenedor de la base de datos ejecutando:

```
docker-compose up -d
```

### Ejecución del Proyecto

Una vez configurada la base de datos y completada la instalación de las dependencias ejecuta:

```
npm run start:dev
```

Esto ejecutará el proyecto en modo de desarrollo.

**Importante**: Asegúrate de que Docker esté ejecutándose antes de iniciar la aplicación.

La API estará disponible en `http://localhost:3000` o en el puerto especificado.



### Descripción de Endpoints

La API de la aplicación ofrece varios endpoints para gestionar tareas y usuarios. Aquí se presenta una descripción de cada uno:

#### Autenticación

1. **`POST /auth/register`** - Registra un nuevo usuario en la aplicación.
   
   

2. **`POST /auth/login`** - Autentica al usuario y genera un token JWT.

---

#### Gestión de Tareas

Estos endpoints requieren un **token JWT** en el header de autorización (`Authorization: Bearer <token>`).

1. **`GET /tasks`** - Obtiene una lista de todas las tareas del usuario autenticado.

2. **`GET /tasks/:id`** - Obtiene los detalles de una tarea específica.

3. **`POST /tasks`** - Crea una nueva tarea.

4. **`PUT /tasks/:id`** - Actualiza una tarea existente.

5. **`DELETE /tasks/:id`** - Elimina una tarea específica.
   - 


#### 
