# 🔧 Solución de Problemas - Docker Backend

## Problema Principal: Docker no está corriendo

### ❌ Error:
```
error during connect: Get "http://%2F%2F.%2Fpipe%2FdockerDesktopLinuxEngine/v1.51/containers/json?all=1": 
open //./pipe/dockerDesktopLinuxEngine: The system cannot find the file specified.
```

### ✅ Solución:
1. **Abre Docker Desktop**
   - Busca "Docker Desktop" en el menú de inicio
   - Haz clic para abrirlo
   - Espera a que el ícono de Docker en la barra de tareas deje de parpadear

2. **Verifica que Docker está corriendo**
   ```bash
   docker info
   ```
   Si ves información sobre Docker, está funcionando correctamente.

3. **Inicia los contenedores**
   - Opción fácil: Ejecuta `docker-start.bat`
   - Opción manual:
     ```bash
     docker-compose up -d --build
     ```

---

## Otros Problemas Comunes

### 🔴 El backend no se conecta a MySQL

**Síntomas:**
- Error "SQLSTATE[HY000] [2002] Connection refused"
- El backend no puede ejecutar migraciones

**Solución:**
```bash
# Verificar estado de los contenedores
docker-compose ps

# Verificar logs de MySQL
docker-compose logs mysql

# Reiniciar el servicio MySQL
docker-compose restart mysql

# Esperar a que MySQL esté saludable
docker-compose up -d
```

### 🔴 Error de permisos en storage/

**Síntomas:**
- Error "The stream or file could not be opened"
- Problemas al escribir logs

**Solución:**
```bash
# Arreglar permisos
docker-compose exec backend chmod -R 775 storage bootstrap/cache
docker-compose exec backend chown -R www-data:www-data storage bootstrap/cache
```

### 🔴 Error "No application encryption key has been specified"

**Síntomas:**
- Página en blanco o error 500
- Mensaje sobre APP_KEY

**Solución:**
El nuevo Dockerfile ya maneja esto automáticamente, pero si persiste:
```bash
docker-compose exec backend php artisan key:generate
```

### 🔴 Las migraciones no se ejecutan

**Solución:**
```bash
# Ejecutar migraciones manualmente
docker-compose exec backend php artisan migrate

# Si hay problemas, reiniciar desde cero
docker-compose exec backend php artisan migrate:fresh
```

### 🔴 Cambios en el código no se reflejan

**Solución:**
```bash
# Limpiar caché de Laravel
docker-compose exec backend php artisan cache:clear
docker-compose exec backend php artisan config:clear
docker-compose exec backend php artisan route:clear
docker-compose exec backend php artisan view:clear

# Si aún no funciona, reconstruir el contenedor
docker-compose up -d --build backend
```

### 🔴 Puerto 3306, 8000 o 4200 ya está en uso

**Síntomas:**
- Error "port is already allocated"

**Solución:**
```bash
# Ver qué está usando el puerto
netstat -ano | findstr :8000

# Detener el proceso o cambiar el puerto en docker-compose.yml
# Por ejemplo, cambiar "8000:80" a "8001:80"
```

### 🔴 Contenedores no se detienen correctamente

**Solución:**
```bash
# Forzar detención
docker-compose down --remove-orphans

# Si aún hay problemas
docker-compose kill
docker-compose rm -f
```

---

## 🧹 Empezar desde Cero

Si nada funciona, puedes empezar completamente desde cero:

```bash
# ⚠️ ADVERTENCIA: Esto eliminará TODOS los datos de la base de datos

# 1. Detener y eliminar todo
docker-compose down -v

# 2. Eliminar imágenes antiguas (opcional)
docker system prune -a

# 3. Reconstruir todo
docker-compose up -d --build

# 4. Verificar logs
docker-compose logs -f backend
```

---

## 📊 Comandos Útiles para Diagnóstico

```bash
# Ver estado de todos los contenedores
docker-compose ps

# Ver logs en tiempo real
docker-compose logs -f

# Ver logs solo del backend
docker-compose logs -f backend

# Entrar al contenedor del backend
docker-compose exec backend bash

# Ejecutar comandos de Artisan
docker-compose exec backend php artisan <comando>

# Ver uso de recursos
docker stats

# Inspeccionar un contenedor
docker inspect ccv-backend
```

---

## 🚀 Flujo de Inicio Correcto

1. **Abrir Docker Desktop** y esperar a que esté listo
2. **Ejecutar** `docker-start.bat` o `docker-compose up -d --build`
3. **Esperar** a que todos los servicios estén saludables (~1-2 minutos)
4. **Verificar** que todo funciona:
   - Frontend: http://localhost:4200
   - Backend: http://localhost:8000
   - API Health: http://localhost:8000/api/health (si existe)

---

## 📝 Mejoras Implementadas

El `Dockerfile.backend` ha sido mejorado con:

✅ Script de inicio automático que:
- Espera a que MySQL esté disponible
- Crea el archivo `.env` si no existe
- Genera la clave de aplicación automáticamente
- Ejecuta migraciones automáticamente
- Limpia y optimiza el caché

✅ Mejor manejo de permisos

✅ Instalación completa de dependencias

✅ Configuración automática de Laravel

---

## 🆘 ¿Aún tienes problemas?

1. Revisa los logs: `docker-compose logs -f backend`
2. Verifica que Docker Desktop esté corriendo
3. Asegúrate de que los puertos 3306, 8000 y 4200 estén disponibles
4. Intenta empezar desde cero (ver sección arriba)
