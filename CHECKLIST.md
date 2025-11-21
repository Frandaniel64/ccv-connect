# ✅ Checklist para Nuevos Desarrolladores

Usa este checklist para asegurarte de que tienes todo configurado correctamente.

## 📋 Antes de Empezar

- [ ] Tengo instalado **Docker Desktop**
- [ ] Docker Desktop está **corriendo** (ícono en la barra de tareas)
- [ ] Tengo instalado **Git**
- [ ] Tengo al menos **4GB de RAM** disponible
- [ ] Tengo al menos **5GB de espacio** en disco

## 🚀 Instalación

- [ ] Cloné el repositorio: `git clone <url>`
- [ ] Entré al directorio: `cd ccv-connect`
- [ ] Copié las variables de entorno: `cp .env.docker .env`
- [ ] Levanté Docker: `docker-compose up -d --build`
- [ ] Esperé 5-10 minutos a que termine el build
- [ ] Generé la clave de Laravel: `docker-compose exec backend php artisan key:generate`
- [ ] Ejecuté las migraciones: `docker-compose exec backend php artisan migrate`

## ✅ Verificación

- [ ] Puedo ver 4 contenedores corriendo: `docker-compose ps`
- [ ] MySQL está "healthy" en el estado
- [ ] Puedo acceder a http://localhost:4200 (Frontend)
- [ ] Puedo acceder a http://localhost:8000 (Backend)
- [ ] No veo errores en los logs: `docker-compose logs`

## 🛠️ Configuración del Entorno de Desarrollo

### Editor de Código

- [ ] Tengo instalado **VS Code** (o tu editor preferido)
- [ ] Instalé las extensiones recomendadas:
  - [ ] PHP Intelephense
  - [ ] Laravel Extension Pack
  - [ ] Angular Language Service
  - [ ] Docker
  - [ ] GitLens

### Git

- [ ] Configuré mi nombre: `git config --global user.name "Tu Nombre"`
- [ ] Configuré mi email: `git config --global user.email "tu@email.com"`
- [ ] Puedo hacer commits y push

## 📚 Familiarización con el Proyecto

- [ ] Leí el [README.md](./README.md) completo
- [ ] Revisé la [Guía de Inicio Rápido](./QUICKSTART.md)
- [ ] Leí las [Preguntas Frecuentes](./FAQ.md)
- [ ] Entiendo la estructura del proyecto
- [ ] Sé dónde están los archivos importantes:
  - [ ] Backend: `backend/app/Http/Controllers/`
  - [ ] Modelos: `backend/app/Models/`
  - [ ] Migraciones: `backend/database/migrations/`
  - [ ] Rutas API: `backend/routes/api.php`
  - [ ] Frontend: `frontend/src/app/`
  - [ ] Servicios: `frontend/src/app/services/`
  - [ ] Componentes: `frontend/src/app/components/`

## 🧪 Pruebas Básicas

- [ ] Puedo ver los logs: `docker-compose logs -f`
- [ ] Puedo acceder a la terminal del backend: `docker-compose exec backend bash`
- [ ] Puedo ejecutar comandos de Artisan: `docker-compose exec backend php artisan list`
- [ ] Puedo acceder a MySQL: `docker-compose exec mysql mysql -u laravel -p`
- [ ] Puedo detener el proyecto: `docker-compose down`
- [ ] Puedo volver a levantar el proyecto: `docker-compose up -d`

## 💻 Desarrollo Local (Opcional pero Recomendado)

Para un desarrollo más ágil del frontend:

- [ ] Instalé Node.js 20.x o superior
- [ ] Entré a la carpeta frontend: `cd frontend`
- [ ] Instalé dependencias: `npm install`
- [ ] Puedo levantar el servidor de desarrollo: `npm start`
- [ ] El frontend local funciona en http://localhost:4200

## 🔧 Comandos Esenciales que Debo Conocer

### Docker

- [ ] Ver contenedores: `docker-compose ps`
- [ ] Ver logs: `docker-compose logs -f`
- [ ] Detener: `docker-compose down`
- [ ] Levantar: `docker-compose up -d`
- [ ] Reconstruir: `docker-compose up -d --build`

### Laravel (Backend)

- [ ] Ejecutar Artisan: `docker-compose exec backend php artisan <comando>`
- [ ] Crear migración: `docker-compose exec backend php artisan make:migration <nombre>`
- [ ] Ejecutar migraciones: `docker-compose exec backend php artisan migrate`
- [ ] Crear modelo: `docker-compose exec backend php artisan make:model <Nombre>`
- [ ] Crear controlador: `docker-compose exec backend php artisan make:controller <Nombre>`
- [ ] Limpiar caché: `docker-compose exec backend php artisan cache:clear`

### Angular (Frontend)

Si trabajas localmente:
- [ ] Generar componente: `ng generate component <nombre>`
- [ ] Generar servicio: `ng generate service <nombre>`
- [ ] Build: `npm run build`

## 🐛 Solución de Problemas

Si algo no funciona:

- [ ] Revisé la sección de [Solución de Problemas](./README.md#-solución-de-problemas)
- [ ] Revisé las [Preguntas Frecuentes](./FAQ.md)
- [ ] Verifiqué los logs: `docker-compose logs`
- [ ] Intenté reiniciar Docker: `docker-compose restart`
- [ ] Como último recurso, limpié todo y empecé de nuevo:
  ```bash
  docker-compose down -v
  docker-compose up -d --build
  docker-compose exec backend php artisan key:generate
  docker-compose exec backend php artisan migrate
  ```

## 🎯 Primer Task

Para verificar que todo funciona, intenta:

- [ ] Crear una nueva migración de prueba
- [ ] Ejecutar la migración
- [ ] Crear un nuevo componente en Angular
- [ ] Hacer un commit de tus cambios
- [ ] Ver tus cambios reflejados en el proyecto

## 📞 Ayuda

Si tienes problemas:

1. Revisa este checklist de nuevo
2. Consulta la [FAQ](./FAQ.md)
3. Revisa los logs: `docker-compose logs`
4. Pregunta al equipo

## ✨ ¡Listo para Desarrollar!

Una vez que hayas completado este checklist, estás listo para empezar a desarrollar.

**Comandos más usados en el día a día:**

```bash
# Levantar el proyecto
docker-compose up -d

# Ver logs
docker-compose logs -f backend

# Ejecutar migraciones nuevas
docker-compose exec backend php artisan migrate

# Crear algo nuevo en Laravel
docker-compose exec backend php artisan make:model NombreModelo -m

# Trabajar en el frontend (recomendado localmente)
cd frontend
npm start

# Al final del día, detener todo
docker-compose down
```

---

**💡 Tip**: Guarda este checklist y úsalo cada vez que configures el proyecto en una nueva PC.
