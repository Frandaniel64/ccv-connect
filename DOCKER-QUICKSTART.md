# 🐳 Guía Rápida - Iniciar Docker Backend

## ⚠️ Problema Detectado

El backend de Docker no está corriendo porque **Docker Desktop no está iniciado**.

## ✅ Solución Rápida (3 pasos)

### Paso 1: Iniciar Docker Desktop
1. Abre el menú de inicio de Windows
2. Busca "Docker Desktop"
3. Haz clic para abrirlo
4. **Espera** a que el ícono de Docker en la barra de tareas deje de parpadear (puede tomar 1-2 minutos)

### Paso 2: Verificar que Docker está corriendo
Abre PowerShell o CMD y ejecuta:
```bash
docker info
```

Si ves información sobre Docker (versión, contenedores, etc.), ¡está funcionando! ✅

### Paso 3: Iniciar los contenedores

**Opción A - Fácil (recomendado):**
Haz doble clic en el archivo:
```
docker-start.bat
```

**Opción B - Manual:**
```bash
docker-compose up -d --build
```

---

## 🎯 ¿Qué hace esto?

El comando iniciará 4 servicios:
- 🗄️ **MySQL** (Base de datos) - Puerto 3306
- 🔧 **Backend Laravel** (API) - Puerto 8000
- 🌐 **Frontend Angular** - Puerto 4200
- 🔀 **Nginx** (Servidor web para el backend)

---

## 📊 Verificar que todo funciona

### Ver el estado de los contenedores:
```bash
docker-compose ps
```

Deberías ver algo como:
```
NAME                STATUS              PORTS
ccv-mysql           Up (healthy)        0.0.0.0:3306->3306/tcp
ccv-backend         Up                  9000/tcp
ccv-nginx-backend   Up                  0.0.0.0:8000->80/tcp
ccv-frontend        Up                  0.0.0.0:4200->80/tcp
```

### Probar el backend:
Abre tu navegador en: http://localhost:8000

### Probar el frontend:
Abre tu navegador en: http://localhost:4200

---

## 📝 Ver los logs

**Ver todos los logs:**
```bash
docker-compose logs -f
```

**Ver solo logs del backend:**
```bash
docker-compose logs -f backend
```

**O usa el script interactivo:**
```
docker-logs.bat
```

---

## 🛑 Detener los contenedores

```bash
docker-compose down
```

---

## 🔧 Comandos útiles

### Ejecutar comandos de Laravel:
```bash
# Ejecutar migraciones
docker-compose exec backend php artisan migrate

# Limpiar caché
docker-compose exec backend php artisan cache:clear

# Ver rutas
docker-compose exec backend php artisan route:list

# Entrar al contenedor
docker-compose exec backend bash
```

### Acceder a MySQL:
```bash
docker-compose exec mysql mysql -u laravel -p
# Contraseña: secret
```

---

## ❌ ¿Problemas?

Consulta la guía completa de solución de problemas:
- [DOCKER-TROUBLESHOOTING.md](./DOCKER-TROUBLESHOOTING.md)

O revisa la documentación completa:
- [README.Docker.md](./README.Docker.md)

---

## 🚀 Mejoras Implementadas

El backend ahora incluye:
- ✅ Configuración automática de Laravel
- ✅ Generación automática de APP_KEY
- ✅ Ejecución automática de migraciones
- ✅ Espera inteligente de MySQL
- ✅ Mejor manejo de permisos
- ✅ Scripts de ayuda para Windows

---

## 📞 Resumen

1. **Abre Docker Desktop** ← Esto es lo más importante
2. **Ejecuta** `docker-start.bat`
3. **Espera** 1-2 minutos
4. **Accede** a http://localhost:8000 (backend) o http://localhost:4200 (frontend)

¡Eso es todo! 🎉
