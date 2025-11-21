# 🐳 Guía de Docker para CCV-Connect

Este proyecto incluye una configuración completa de Docker que contiene tanto el backend (Laravel) como el frontend (Angular).

## 📋 Requisitos Previos

- Docker Desktop instalado
- Docker Compose instalado

## 🚀 Inicio Rápido

### 1. Configurar Variables de Entorno

Copia el archivo de ejemplo y ajusta las variables según sea necesario:

```bash
cp .env.docker .env
```

### 2. Construir y Levantar los Contenedores

```bash
docker-compose up -d --build
```

Este comando:
- Construye las imágenes de Docker
- Levanta los contenedores en segundo plano
- Crea la red y los volúmenes necesarios

### 3. Configurar Laravel (Primera vez)

```bash
# Generar la clave de aplicación
docker-compose exec backend php artisan key:generate

# Ejecutar las migraciones
docker-compose exec backend php artisan migrate

# (Opcional) Ejecutar los seeders
docker-compose exec backend php artisan db:seed
```

## 🌐 Acceder a la Aplicación

- **Frontend (Angular)**: http://localhost:4200
- **Backend API (Laravel)**: http://localhost:8000
- **MySQL**: localhost:3306

## 📦 Servicios Incluidos

### MySQL
- Puerto: 3306
- Base de datos: laravel (configurable)
- Usuario: laravel (configurable)
- Contraseña: secret (configurable)

### Backend (Laravel + PHP-FPM)
- Puerto interno: 9000
- Servido por Nginx en puerto: 8000

### Frontend (Angular + Nginx)
- Puerto: 4200

## 🛠️ Comandos Útiles

### Ver logs de los contenedores
```bash
docker-compose logs -f
```

### Ver logs de un servicio específico
```bash
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f mysql
```

### Detener los contenedores
```bash
docker-compose down
```

### Detener y eliminar volúmenes (⚠️ Elimina la base de datos)
```bash
docker-compose down -v
```

### Reconstruir un servicio específico
```bash
docker-compose up -d --build backend
docker-compose up -d --build frontend
```

### Ejecutar comandos en el backend
```bash
# Artisan
docker-compose exec backend php artisan <comando>

# Composer
docker-compose exec backend composer <comando>

# Bash
docker-compose exec backend bash
```

### Acceder a MySQL
```bash
docker-compose exec mysql mysql -u laravel -p
```

## 🔧 Desarrollo

### Modificar el Backend
Los cambios en el código del backend se reflejan automáticamente gracias al volumen montado.

### Modificar el Frontend
Para desarrollo del frontend, es recomendable usar el servidor de desarrollo de Angular:

```bash
cd frontend
npm install
npm start
```

Para reconstruir el contenedor del frontend con los cambios:
```bash
docker-compose up -d --build frontend
```

## 🐛 Solución de Problemas

### El backend no conecta con MySQL
Verifica que el servicio MySQL esté saludable:
```bash
docker-compose ps
```

### Permisos en storage (Laravel)
```bash
docker-compose exec backend chmod -R 775 storage bootstrap/cache
docker-compose exec backend chown -R www-data:www-data storage bootstrap/cache
```

### Limpiar todo y empezar de nuevo
```bash
docker-compose down -v
docker system prune -a
docker-compose up -d --build
```

## 📝 Notas

- Los datos de MySQL se persisten en un volumen de Docker
- El frontend se construye en modo producción dentro del contenedor
- El backend usa PHP-FPM con Nginx como servidor web
- Todos los servicios están en la misma red Docker para comunicarse entre sí

## 🔐 Seguridad

⚠️ **IMPORTANTE**: Antes de desplegar en producción:

1. Cambia las contraseñas en `.env`
2. Configura `APP_DEBUG=false` en el backend
3. Usa certificados SSL/TLS
4. Configura CORS apropiadamente
5. Revisa las configuraciones de seguridad de Nginx
