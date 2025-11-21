# 🚀 Inicio Rápido - CCV Connect

Esta guía te ayudará a levantar el proyecto en **menos de 10 minutos**.

## ✅ Checklist Previo

Antes de empezar, asegúrate de tener instalado:

- [ ] [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [ ] [Git](https://git-scm.com/downloads)

## 📝 Pasos (Solo 5!)

### 1️⃣ Clonar el Proyecto

```bash
git clone <url-del-repositorio>
cd ccv-connect
```

### 2️⃣ Copiar Variables de Entorno

```bash
cp .env.docker .env
```

### 3️⃣ Levantar Docker

```bash
docker-compose up -d --build
```

⏱️ **Espera 5-10 minutos** mientras se descargan y construyen las imágenes.

### 4️⃣ Configurar Laravel

```bash
docker-compose exec backend php artisan key:generate
docker-compose exec backend php artisan migrate
```

### 5️⃣ ¡Listo! Abre tu navegador

- **Frontend**: http://localhost:4200
- **Backend API**: http://localhost:8000

## 🎉 ¡Eso es todo!

El proyecto ya está corriendo en tu PC.

## 🛑 Para Detener el Proyecto

```bash
docker-compose down
```

## 🔄 Para Volver a Levantar el Proyecto

```bash
docker-compose up -d
```

(Ya no necesitas `--build` ni los comandos de artisan)

## ❓ ¿Problemas?

Consulta el [README principal](./README.md#-solución-de-problemas) para solución de problemas detallada.

## 📊 Verificar que Todo Funciona

```bash
# Ver estado de los contenedores (todos deben estar "Up")
docker-compose ps

# Ver logs
docker-compose logs -f
```

Deberías ver algo como:

```
NAME                STATUS
ccv-backend         Up
ccv-frontend        Up
ccv-mysql           Up (healthy)
ccv-nginx-backend   Up
```

---

**💡 Tip**: Guarda esta página en tus favoritos para la próxima vez que necesites levantar el proyecto.
