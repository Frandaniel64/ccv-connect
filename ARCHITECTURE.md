# 🏗️ Arquitectura del Proyecto CCV-Connect

## 📊 Diagrama de Arquitectura

```
┌─────────────────────────────────────────────────────────────────┐
│                         USUARIO FINAL                            │
│                      (Navegador Web)                             │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         │ HTTP
                         │
         ┌───────────────┴───────────────┐
         │                               │
         │                               │
         ▼                               ▼
┌─────────────────┐              ┌─────────────────┐
│   FRONTEND      │              │   BACKEND API   │
│   (Angular 21)  │◄────────────►│   (Laravel 8)   │
│                 │   REST API   │                 │
│  Port: 4200     │              │  Port: 8000     │
└────────┬────────┘              └────────┬────────┘
         │                                │
         │                                │
         ▼                                ▼
┌─────────────────┐              ┌─────────────────┐
│  Nginx Alpine   │              │  Nginx Alpine   │
│  (Web Server)   │              │  (Web Server)   │
└─────────────────┘              └────────┬────────┘
                                          │
                                          │
                                          ▼
                                 ┌─────────────────┐
                                 │   PHP-FPM 8.1   │
                                 │  (Procesador)   │
                                 └────────┬────────┘
                                          │
                                          │
                                          ▼
                                 ┌─────────────────┐
                                 │   MySQL 8.0     │
                                 │  (Base Datos)   │
                                 │  Port: 3306     │
                                 └─────────────────┘
```

## 🐳 Contenedores Docker

```
┌──────────────────────────────────────────────────────────────────┐
│                        Docker Network                             │
│                       (ccv-network)                               │
│                                                                   │
│  ┌────────────────┐  ┌────────────────┐  ┌──────────────────┐  │
│  │  ccv-frontend  │  │ ccv-nginx-back │  │  ccv-backend     │  │
│  │                │  │                │  │                  │  │
│  │  Angular +     │  │  Nginx for     │  │  Laravel +       │  │
│  │  Nginx         │  │  Laravel       │  │  PHP-FPM         │  │
│  │                │  │                │  │                  │  │
│  │  :4200 → :80   │  │  :8000 → :80   │  │  :9000           │  │
│  └────────────────┘  └────────────────┘  └──────────────────┘  │
│                                                                   │
│                      ┌──────────────────┐                        │
│                      │   ccv-mysql      │                        │
│                      │                  │                        │
│                      │   MySQL 8.0      │                        │
│                      │   :3306          │                        │
│                      │                  │                        │
│                      └──────────────────┘                        │
│                              │                                    │
│                              ▼                                    │
│                      ┌──────────────────┐                        │
│                      │  Docker Volume   │                        │
│                      │  mysql_data      │                        │
│                      └──────────────────┘                        │
└──────────────────────────────────────────────────────────────────┘
```

## 📂 Estructura de Directorios

```
ccv-connect/
│
├── 📁 backend/                    # Backend Laravel
│   ├── 📁 app/
│   │   ├── 📁 Http/
│   │   │   ├── 📁 Controllers/   # Controladores de la API
│   │   │   ├── 📁 Middleware/    # Middleware personalizado
│   │   │   └── Kernel.php
│   │   ├── 📁 Models/            # Modelos Eloquent
│   │   └── 📁 Providers/
│   ├── 📁 config/                # Archivos de configuración
│   ├── 📁 database/
│   │   ├── 📁 migrations/        # Migraciones de BD
│   │   ├── 📁 seeders/           # Seeders
│   │   └── 📁 factories/         # Factories
│   ├── 📁 routes/
│   │   ├── api.php               # Rutas de la API
│   │   └── web.php               # Rutas web
│   ├── 📁 storage/               # Archivos generados
│   ├── 📁 public/                # Punto de entrada público
│   ├── .env                      # Variables de entorno
│   └── composer.json             # Dependencias PHP
│
├── 📁 frontend/                   # Frontend Angular
│   ├── 📁 src/
│   │   ├── 📁 app/
│   │   │   ├── 📁 components/    # Componentes
│   │   │   ├── 📁 services/      # Servicios
│   │   │   ├── 📁 models/        # Modelos/Interfaces
│   │   │   ├── 📁 guards/        # Guards de rutas
│   │   │   └── app.component.ts
│   │   ├── 📁 assets/            # Recursos estáticos
│   │   ├── 📁 environments/      # Configuración de entornos
│   │   └── index.html
│   ├── angular.json              # Configuración Angular
│   └── package.json              # Dependencias npm
│
├── 📁 docs/                       # Documentación
│
├── 🐳 docker-compose.yml          # Orquestación Docker
├── 🐳 Dockerfile.backend          # Imagen Docker backend
├── 🐳 Dockerfile.frontend         # Imagen Docker frontend
├── ⚙️ nginx-backend.conf          # Config Nginx backend
├── ⚙️ nginx.conf                  # Config Nginx frontend
├── 📄 .env.docker                 # Variables de entorno Docker
├── 📄 .dockerignore               # Archivos ignorados por Docker
│
├── 📖 README.md                   # Documentación principal
├── 📖 QUICKSTART.md               # Inicio rápido
├── 📖 FAQ.md                      # Preguntas frecuentes
├── 📖 CHECKLIST.md                # Checklist para desarrolladores
├── 📖 README.Docker.md            # Guía de Docker
│
├── 🚀 install.bat                 # Script instalación Windows
└── 🚀 install.sh                  # Script instalación Linux/Mac
```

## 🔄 Flujo de Datos

### 1. Autenticación

```
Usuario → Frontend → Backend API → MySQL
                ↓
         Guarda Token
                ↓
    Incluye en requests
```

### 2. Operación CRUD Típica

```
1. Usuario interactúa con Frontend (Angular)
   ↓
2. Servicio Angular hace petición HTTP
   ↓
3. Request pasa por Nginx (puerto 4200)
   ↓
4. Backend recibe request en Nginx (puerto 8000)
   ↓
5. Nginx pasa request a PHP-FPM
   ↓
6. Laravel procesa la petición
   ↓
7. Controlador ejecuta lógica de negocio
   ↓
8. Modelo Eloquent consulta MySQL
   ↓
9. MySQL retorna datos
   ↓
10. Laravel formatea respuesta JSON
    ↓
11. Respuesta viaja de vuelta al Frontend
    ↓
12. Angular actualiza la vista
```

## 🗄️ Modelo de Base de Datos

### Tablas Principales

```
┌─────────────┐         ┌──────────────┐         ┌─────────────┐
│   users     │────────►│ ministry_user│◄────────│ ministries  │
│             │  N:M    │              │  N:M    │             │
│ - id        │         │ - user_id    │         │ - id        │
│ - name      │         │ - ministry_id│         │ - name      │
│ - email     │         └──────────────┘         │ - desc      │
│ - password  │                                  └─────────────┘
└─────────────┘
      │
      │ N:M
      ▼
┌─────────────┐         ┌──────────────┐
│ role_user   │         │    roles     │
│             │  N:M    │              │
│ - user_id   │────────►│ - id         │
│ - role_id   │         │ - name       │
└─────────────┘         └──────────────┘
                               │
                               │ N:M
                               ▼
                        ┌──────────────────┐
                        │ permission_role  │
                        │                  │
                        │ - role_id        │
                        │ - permission_id  │
                        └──────────────────┘
                               │
                               ▼
                        ┌──────────────┐
                        │ permissions  │
                        │              │
                        │ - id         │
                        │ - name       │
                        └──────────────┘

┌─────────────┐    ┌─────────────┐    ┌──────────────┐
│   banners   │    │   events    │    │   sermons    │
│             │    │             │    │              │
│ - id        │    │ - id        │    │ - id         │
│ - title     │    │ - title     │    │ - title      │
│ - image     │    │ - date      │    │ - speaker    │
│ - active    │    │ - location  │    │ - video_url  │
└─────────────┘    └─────────────┘    └──────────────┘

┌──────────────────┐
│  church_config   │
│                  │
│ - id             │
│ - key            │
│ - value          │
└──────────────────┘
```

## 🔐 Seguridad

```
┌─────────────────────────────────────────────────────────┐
│                    Capa de Seguridad                     │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Frontend (Angular)                                      │
│  ├── Guards de Rutas (AuthGuard)                        │
│  ├── Interceptores HTTP (Token)                         │
│  └── Validación de Formularios                          │
│                                                          │
│  Backend (Laravel)                                       │
│  ├── Laravel Sanctum (Autenticación API)                │
│  ├── Middleware de Autenticación                        │
│  ├── Middleware de Autorización                         │
│  ├── CORS Configurado                                   │
│  ├── Validación de Requests                             │
│  └── Protección CSRF                                    │
│                                                          │
│  Base de Datos                                           │
│  ├── Contraseñas Hasheadas (bcrypt)                     │
│  ├── Prepared Statements (Eloquent)                     │
│  └── Validación de Datos                                │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## 🚀 Flujo de Despliegue

### Desarrollo

```
Código Local → Git → Pull → Docker Build → Contenedores Locales
```

### Producción (Recomendado)

```
Git Repository
    ↓
CI/CD Pipeline (GitHub Actions, GitLab CI, etc.)
    ↓
Build Docker Images
    ↓
Push to Registry (Docker Hub, AWS ECR, etc.)
    ↓
Deploy to Server (AWS, DigitalOcean, etc.)
    ↓
Run Migrations
    ↓
Aplicación en Producción
```

## 📊 Monitoreo y Logs

```
┌──────────────────────────────────────────────────────┐
│                  Sistema de Logs                      │
├──────────────────────────────────────────────────────┤
│                                                       │
│  Frontend                                             │
│  └── Console Logs (Desarrollo)                       │
│                                                       │
│  Backend                                              │
│  ├── Laravel Logs (storage/logs/laravel.log)         │
│  ├── Nginx Access Logs                               │
│  └── Nginx Error Logs                                │
│                                                       │
│  Base de Datos                                        │
│  ├── MySQL Error Log                                 │
│  └── MySQL Slow Query Log                            │
│                                                       │
│  Docker                                               │
│  └── docker-compose logs                             │
│                                                       │
└──────────────────────────────────────────────────────┘
```

## 🔧 Tecnologías y Versiones

| Componente | Tecnología | Versión |
|------------|------------|---------|
| Frontend Framework | Angular | 21.0.0 |
| Frontend Language | TypeScript | 5.9.2 |
| Backend Framework | Laravel | 8.x |
| Backend Language | PHP | 8.1 |
| Database | MySQL | 8.0 |
| Web Server | Nginx | Alpine |
| Containerization | Docker | Latest |
| Orchestration | Docker Compose | Latest |
| Authentication | Laravel Sanctum | 2.11 |
| HTTP Client | RxJS | 7.8.0 |

---

**💡 Tip**: Imprime este diagrama y tenlo cerca mientras desarrollas para entender mejor cómo interactúan los componentes.
