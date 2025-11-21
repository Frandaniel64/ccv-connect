# 🏛️ CCV-Connect - Sistema de Gestión para Iglesias

Sistema completo de gestión para iglesias que incluye un sitio web público, panel de administración y gestión de usuarios con permisos por ministerios.

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Tecnologías](#-tecnologías)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
  - [Opción 1: Con Docker (Recomendado)](#opción-1-con-docker-recomendado)
  - [Opción 2: Instalación Local](#opción-2-instalación-local)
- [Configuración](#-configuración)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Comandos Útiles](#-comandos-útiles)
- [Solución de Problemas](#-solución-de-problemas)
- [Contribuir](#-contribuir)

## 📚 Documentación Rápida

- **🚀 [Inicio Rápido](./QUICKSTART.md)** - Levanta el proyecto en 5 pasos (menos de 10 minutos)
- **✅ [Checklist para Desarrolladores](./CHECKLIST.md)** - Verifica que todo esté configurado correctamente
- **❓ [Preguntas Frecuentes](./FAQ.md)** - Respuestas a las dudas más comunes
- **🏗️ [Arquitectura del Proyecto](./ARCHITECTURE.md)** - Diagramas y estructura técnica
- **🐳 [Guía de Docker](./README.Docker.md)** - Documentación detallada de Docker
- **⚡ Scripts de Instalación Automática**:
  - Windows: Ejecuta `install.bat`
  - Linux/Mac: Ejecuta `./install.sh`

## 📖 Descripción

CCV-Connect es un sistema integral para la gestión de iglesias que incluye:

- **Sitio Web Público**: Página principal para mostrar información de la iglesia
- **Panel de Administración**: Dashboard para gestionar contenido del sitio
- **Gestión de Usuarios**: Sistema de usuarios con roles y permisos
- **Ministerios**: Organización por ministerios con permisos específicos
- **Eventos y Sermones**: Gestión de eventos y sermones
- **Banners Dinámicos**: Sistema de banners configurables

## 🚀 Tecnologías

### Backend
- **Laravel 8.x** - Framework PHP
- **MySQL 8.0** - Base de datos
- **PHP 8.1** - Lenguaje de programación
- **Laravel Sanctum** - Autenticación API

### Frontend
- **Angular 21** - Framework JavaScript
- **TypeScript 5.9** - Lenguaje tipado
- **RxJS** - Programación reactiva

### DevOps
- **Docker** - Contenedores
- **Docker Compose** - Orquestación
- **Nginx** - Servidor web

## 📦 Requisitos Previos

### Para instalación con Docker (Recomendado):
- [Docker Desktop](https://www.docker.com/products/docker-desktop) instalado
- Git instalado
- Al menos 4GB de RAM disponible
- 5GB de espacio en disco

### Para instalación local:
- PHP 8.1 o superior
- Composer
- Node.js 20.x o superior
- MySQL 8.0 o superior
- npm 10.x o superior

## 🔧 Instalación

### Opción 1: Con Docker (Recomendado)

Esta es la forma más rápida y sencilla de levantar el proyecto en cualquier PC.

#### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd ccv-connect
```

#### 2. Configurar variables de entorno

```bash
# Copiar el archivo de ejemplo
cp .env.docker .env
```

**Opcional**: Edita el archivo `.env` si necesitas cambiar las credenciales de la base de datos:

```env
DB_DATABASE=laravel
DB_USERNAME=laravel
DB_PASSWORD=secret
```

#### 3. Levantar los contenedores

```bash
docker-compose up -d --build
```

Este comando:
- ✅ Descarga las imágenes necesarias
- ✅ Construye el backend y frontend
- ✅ Crea la base de datos MySQL
- ✅ Levanta todos los servicios

**Nota**: La primera vez puede tardar 5-10 minutos dependiendo de tu conexión a internet.

#### 4. Configurar Laravel (Solo la primera vez)

```bash
# Generar la clave de aplicación
docker-compose exec backend php artisan key:generate

# Ejecutar las migraciones
docker-compose exec backend php artisan migrate

# (Opcional) Poblar la base de datos con datos de ejemplo
docker-compose exec backend php artisan db:seed
```

#### 5. ¡Listo! Accede a la aplicación

- **Frontend**: http://localhost:4200
- **Backend API**: http://localhost:8000
- **Base de datos**: localhost:3306

### Opción 2: Instalación Local

Si prefieres no usar Docker, sigue estos pasos:

#### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd ccv-connect
```

#### 2. Configurar el Backend

```bash
cd backend

# Instalar dependencias de PHP
composer install

# Copiar archivo de configuración
cp .env.example .env

# Generar clave de aplicación
php artisan key:generate
```

Edita el archivo `backend/.env` y configura tu base de datos:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=ccv_connect
DB_USERNAME=tu_usuario
DB_PASSWORD=tu_contraseña
```

```bash
# Ejecutar migraciones
php artisan migrate

# (Opcional) Seeders
php artisan db:seed

# Levantar el servidor
php artisan serve
```

El backend estará disponible en: http://localhost:8000

#### 3. Configurar el Frontend

Abre una nueva terminal:

```bash
cd frontend

# Instalar dependencias
npm install

# Levantar el servidor de desarrollo
npm start
```

El frontend estará disponible en: http://localhost:4200

## ⚙️ Configuración

### Variables de Entorno del Backend

Edita `backend/.env` para configurar:

```env
# Aplicación
APP_NAME="CCV Connect"
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost:8000

# Base de datos
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=ccv_connect
DB_USERNAME=root
DB_PASSWORD=

# CORS (para desarrollo local)
SANCTUM_STATEFUL_DOMAINS=localhost:4200
SESSION_DOMAIN=localhost
```

### Configuración del Frontend

Si necesitas cambiar la URL del backend, edita `frontend/src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8000/api'
};
```

## 🎯 Uso

### Comandos Docker

```bash
# Ver estado de los contenedores
docker-compose ps

# Ver logs en tiempo real
docker-compose logs -f

# Ver logs de un servicio específico
docker-compose logs -f backend
docker-compose logs -f frontend

# Detener los contenedores
docker-compose down

# Reiniciar un servicio
docker-compose restart backend

# Ejecutar comandos de Artisan
docker-compose exec backend php artisan <comando>

# Acceder a la consola del contenedor
docker-compose exec backend bash
```

### Comandos de Desarrollo Local

#### Backend (Laravel)

```bash
# Ejecutar migraciones
php artisan migrate

# Revertir migraciones
php artisan migrate:rollback

# Crear un nuevo modelo
php artisan make:model NombreModelo -m

# Crear un controlador
php artisan make:controller NombreController

# Limpiar caché
php artisan cache:clear
php artisan config:clear
php artisan route:clear
```

#### Frontend (Angular)

```bash
# Generar un componente
ng generate component nombre-componente

# Generar un servicio
ng generate service nombre-servicio

# Compilar para producción
npm run build

# Ejecutar tests
npm test
```

## 📁 Estructura del Proyecto

```
ccv-connect/
├── backend/                    # Backend Laravel
│   ├── app/
│   │   ├── Http/
│   │   │   └── Controllers/   # Controladores
│   │   └── Models/            # Modelos Eloquent
│   ├── database/
│   │   ├── migrations/        # Migraciones de BD
│   │   └── seeders/           # Seeders
│   ├── routes/
│   │   └── api.php           # Rutas de la API
│   └── .env                  # Variables de entorno
│
├── frontend/                  # Frontend Angular
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/   # Componentes
│   │   │   └── services/     # Servicios
│   │   └── environments/     # Configuración de entornos
│   └── package.json
│
├── docs/                      # Documentación
│
├── docker-compose.yml         # Orquestación Docker
├── Dockerfile.backend         # Imagen Docker del backend
├── Dockerfile.frontend        # Imagen Docker del frontend
├── nginx-backend.conf         # Configuración Nginx backend
├── nginx.conf                 # Configuración Nginx frontend
└── README.md                  # Este archivo
```

## 🛠️ Comandos Útiles

### Base de Datos

```bash
# Con Docker
docker-compose exec mysql mysql -u laravel -p

# Local
mysql -u root -p ccv_connect
```

### Backups

```bash
# Backup de la base de datos (Docker)
docker-compose exec mysql mysqldump -u laravel -p laravel > backup.sql

# Restaurar backup (Docker)
docker-compose exec -T mysql mysql -u laravel -p laravel < backup.sql
```

### Limpiar y Reiniciar

```bash
# Docker: Limpiar todo y empezar de nuevo
docker-compose down -v
docker system prune -a
docker-compose up -d --build

# Local: Limpiar caché de Laravel
cd backend
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear
```

## 🐛 Solución de Problemas

### Error: "Connection refused" al conectar con MySQL

**Solución con Docker**:
```bash
# Verificar que MySQL esté saludable
docker-compose ps

# Ver logs de MySQL
docker-compose logs mysql

# Reiniciar MySQL
docker-compose restart mysql
```

**Solución local**: Verifica que MySQL esté corriendo y las credenciales en `.env` sean correctas.

### Error: "Node.js version not supported"

El proyecto requiere Node.js 20.x o superior.

```bash
# Verificar versión
node --version

# Si es menor a v20, actualiza Node.js
# Descarga desde: https://nodejs.org/
```

### Error: "Port already in use"

Si los puertos 4200, 8000 o 3306 están ocupados:

**Opción 1**: Detén el proceso que usa ese puerto

```bash
# Windows
netstat -ano | findstr :4200
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:4200 | xargs kill -9
```

**Opción 2**: Cambia los puertos en `docker-compose.yml`

```yaml
services:
  frontend:
    ports:
      - "4201:80"  # Cambiar 4200 por 4201
```

### Error de permisos en storage (Laravel)

```bash
# Con Docker
docker-compose exec backend chmod -R 775 storage bootstrap/cache
docker-compose exec backend chown -R www-data:www-data storage bootstrap/cache

# Local
chmod -R 775 storage bootstrap/cache
```

### Frontend no carga o muestra página en blanco

```bash
# Limpiar caché de npm y reinstalar
cd frontend
rm -rf node_modules package-lock.json
npm install
npm start
```

### Migraciones fallan

```bash
# Verificar conexión a la base de datos
docker-compose exec backend php artisan tinker
>>> DB::connection()->getPdo();

# Si falla, verifica las credenciales en .env
# Luego intenta de nuevo
docker-compose exec backend php artisan migrate:fresh
```

## 📚 Documentación Adicional

- [Guía de Docker](./README.Docker.md) - Documentación detallada de Docker
- [Documentación de Laravel](https://laravel.com/docs/8.x)
- [Documentación de Angular](https://angular.io/docs)

## 🔐 Seguridad

⚠️ **IMPORTANTE para Producción**:

1. Cambia todas las contraseñas en `.env`
2. Configura `APP_DEBUG=false`
3. Usa HTTPS con certificados SSL/TLS
4. Configura CORS apropiadamente
5. Actualiza las claves secretas
6. Revisa las configuraciones de seguridad de Nginx
7. Implementa rate limiting en la API
8. Usa variables de entorno seguras

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es privado y confidencial.

## 👥 Equipo

Desarrollado para la gestión de iglesias.

## 📞 Soporte

Si tienes problemas para levantar el proyecto:

1. Revisa la sección de [Solución de Problemas](#-solución-de-problemas)
2. Verifica que cumples con todos los [Requisitos Previos](#-requisitos-previos)
3. Consulta la [Documentación de Docker](./README.Docker.md)

---

**¿Primera vez levantando el proyecto?** Sigue la [Opción 1: Con Docker](#opción-1-con-docker-recomendado) - ¡Es la más fácil! 🚀
