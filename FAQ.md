# ❓ Preguntas Frecuentes (FAQ)

## Instalación y Configuración

### ¿Qué necesito instalar para levantar el proyecto?

Solo necesitas:
- **Docker Desktop** (incluye Docker y Docker Compose)
- **Git** (para clonar el repositorio)

Eso es todo. Docker se encarga de instalar PHP, MySQL, Node.js y todas las dependencias.

### ¿Cuánto espacio en disco necesito?

Aproximadamente **5GB** para:
- Imágenes de Docker (~3GB)
- Código fuente (~500MB)
- Base de datos (~100MB)
- Espacio temporal (~1.5GB)

### ¿Cuánta RAM necesito?

Mínimo **4GB de RAM**. Recomendado **8GB o más** para un rendimiento óptimo.

### ¿Funciona en Windows, Mac y Linux?

Sí, el proyecto funciona en los tres sistemas operativos gracias a Docker.

## Uso de Docker

### ¿Cómo sé si Docker está corriendo?

```bash
docker ps
```

Si ves una lista de contenedores (o vacía), Docker está corriendo. Si ves un error, necesitas iniciar Docker Desktop.

### ¿Qué hago si el puerto 4200, 8000 o 3306 ya está en uso?

**Opción 1**: Detén la aplicación que usa ese puerto.

**Opción 2**: Cambia el puerto en `docker-compose.yml`:

```yaml
services:
  frontend:
    ports:
      - "4201:80"  # Cambia 4200 por 4201
```

### ¿Cómo veo qué está pasando dentro de los contenedores?

```bash
# Ver logs de todos los servicios
docker-compose logs -f

# Ver logs de un servicio específico
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f mysql
```

### ¿Cómo accedo a la terminal de un contenedor?

```bash
# Backend
docker-compose exec backend bash

# MySQL
docker-compose exec mysql bash

# Frontend (aunque normalmente no es necesario)
docker-compose exec frontend sh
```

### ¿Cómo detengo el proyecto?

```bash
docker-compose down
```

### ¿Cómo elimino todo y empiezo de nuevo?

```bash
# CUIDADO: Esto eliminará la base de datos
docker-compose down -v
docker system prune -a
docker-compose up -d --build
```

## Base de Datos

### ¿Cómo accedo a la base de datos?

```bash
# Desde la línea de comandos
docker-compose exec mysql mysql -u laravel -p
# Contraseña: secret (o la que configuraste en .env)
```

O usa un cliente GUI como:
- **MySQL Workbench**
- **DBeaver**
- **TablePlus**

Configuración:
- Host: `localhost`
- Puerto: `3306`
- Usuario: `laravel`
- Contraseña: `secret`
- Base de datos: `laravel`

### ¿Cómo hago un backup de la base de datos?

```bash
docker-compose exec mysql mysqldump -u laravel -p laravel > backup_$(date +%Y%m%d).sql
```

### ¿Cómo restauro un backup?

```bash
docker-compose exec -T mysql mysql -u laravel -p laravel < backup.sql
```

### ¿Se pierden los datos al detener Docker?

No. Los datos de MySQL se guardan en un volumen de Docker que persiste entre reinicios.

Solo se pierden si ejecutas `docker-compose down -v` (la opción `-v` elimina los volúmenes).

## Desarrollo

### ¿Cómo veo los cambios que hago en el código?

**Backend**: Los cambios se reflejan automáticamente gracias al volumen montado.

**Frontend**: Si estás usando Docker, necesitas reconstruir:
```bash
docker-compose up -d --build frontend
```

Para desarrollo, es mejor usar el servidor local de Angular:
```bash
cd frontend
npm start
```

### ¿Cómo ejecuto comandos de Artisan?

```bash
docker-compose exec backend php artisan <comando>
```

Ejemplos:
```bash
# Crear migración
docker-compose exec backend php artisan make:migration create_table_name

# Crear modelo
docker-compose exec backend php artisan make:model ModelName -m

# Limpiar caché
docker-compose exec backend php artisan cache:clear
```

### ¿Cómo ejecuto comandos de npm en el frontend?

Si usas Docker:
```bash
docker-compose exec frontend npm <comando>
```

Es más fácil trabajar localmente:
```bash
cd frontend
npm install
npm start
```

### ¿Cómo instalo una nueva dependencia de PHP?

```bash
docker-compose exec backend composer require nombre/paquete
```

### ¿Cómo instalo una nueva dependencia de npm?

```bash
cd frontend
npm install nombre-paquete
```

## Errores Comunes

### Error: "Connection refused" al conectar con MySQL

**Causa**: MySQL aún no está listo.

**Solución**:
```bash
# Espera unos segundos y verifica el estado
docker-compose ps

# Si MySQL no está "healthy", revisa los logs
docker-compose logs mysql
```

### Error: "Application key not set"

**Solución**:
```bash
docker-compose exec backend php artisan key:generate
```

### Error: "SQLSTATE[HY000] [2002] Connection refused"

**Causa**: Laravel no puede conectar con MySQL.

**Solución**:
1. Verifica que MySQL esté corriendo: `docker-compose ps`
2. Verifica las credenciales en `backend/.env`
3. Reinicia el backend: `docker-compose restart backend`

### Error: "Port is already allocated"

**Causa**: El puerto ya está en uso por otra aplicación.

**Solución**: Ver [¿Qué hago si el puerto ya está en uso?](#qué-hago-si-el-puerto-4200-8000-o-3306-ya-está-en-uso)

### Frontend muestra página en blanco

**Solución**:
```bash
# Reconstruir el frontend
docker-compose up -d --build frontend

# O trabajar localmente
cd frontend
rm -rf node_modules
npm install
npm start
```

### Error: "No application encryption key has been specified"

**Solución**:
```bash
docker-compose exec backend php artisan key:generate
```

## Rendimiento

### ¿Por qué la primera vez tarda tanto?

La primera vez Docker necesita:
- Descargar imágenes base (PHP, Node, MySQL, Nginx)
- Instalar dependencias de Composer
- Instalar dependencias de npm
- Compilar el frontend

Las siguientes veces será mucho más rápido porque Docker usa caché.

### ¿Cómo puedo mejorar el rendimiento?

1. Asigna más recursos a Docker Desktop:
   - Abre Docker Desktop
   - Settings → Resources
   - Aumenta CPU y RAM

2. Para desarrollo del frontend, usa el servidor local en lugar de Docker:
   ```bash
   cd frontend
   npm start
   ```

### ¿Puedo usar el proyecto sin Docker?

Sí, consulta la sección [Opción 2: Instalación Local](./README.md#opción-2-instalación-local) en el README principal.

## Producción

### ¿Puedo usar esta configuración en producción?

La configuración actual es para **desarrollo**. Para producción necesitas:

1. Cambiar `APP_ENV=production` en `.env`
2. Configurar `APP_DEBUG=false`
3. Usar HTTPS con certificados SSL
4. Configurar un dominio real
5. Usar contraseñas seguras
6. Configurar backups automáticos
7. Implementar monitoreo y logs

### ¿Cómo despliego en producción?

Recomendamos usar servicios como:
- **AWS** (EC2, RDS, S3)
- **DigitalOcean** (Droplets, Managed Databases)
- **Heroku**
- **Laravel Forge** (específico para Laravel)

## Otros

### ¿Dónde están los archivos de la base de datos?

En un volumen de Docker llamado `ccv-connect_mysql_data`.

Para ver su ubicación:
```bash
docker volume inspect ccv-connect_mysql_data
```

### ¿Puedo cambiar las credenciales de la base de datos?

Sí, edita el archivo `.env` antes de levantar Docker por primera vez:

```env
DB_DATABASE=mi_base_datos
DB_USERNAME=mi_usuario
DB_PASSWORD=mi_contraseña_segura
```

Si ya levantaste Docker, necesitas eliminar el volumen y volver a crear:
```bash
docker-compose down -v
# Edita .env
docker-compose up -d --build
```

### ¿Cómo actualizo el proyecto con los últimos cambios?

```bash
# Detén los contenedores
docker-compose down

# Obtén los últimos cambios
git pull

# Reconstruye y levanta
docker-compose up -d --build

# Ejecuta las nuevas migraciones si las hay
docker-compose exec backend php artisan migrate
```

### ¿Necesito conocimientos de Docker para usar el proyecto?

No. Los scripts de instalación automática (`install.bat` o `install.sh`) hacen todo por ti.

Solo necesitas:
1. Instalar Docker Desktop
2. Ejecutar el script
3. ¡Listo!

---

**¿No encontraste tu pregunta?** Consulta el [README principal](./README.md) o abre un issue en el repositorio.
