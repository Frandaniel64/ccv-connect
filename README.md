# ccv-connect

Proyecto Laravel con Inertia y Jetstream utilizando Docker.

## Requisitos

- Docker
- Docker Compose

## Configuración

1. Clona el repositorio
2. Copia el archivo `.env.example` a `.env`
3. Ejecuta `docker-compose up -d`
4. Ejecuta `docker-compose exec app composer install`
5. Ejecuta `docker-compose exec app php artisan key:generate`
6. Ejecuta `docker-compose exec app npm install`
7. Ejecuta `docker-compose exec app npm run dev`

## Servicios

- **app**: Aplicación Laravel (PHP 8.2)
- **mysql**: Base de datos MySQL 8.0
- **nginx**: Servidor web Nginx
- **redis**: Cache Redis