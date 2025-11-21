# Plan de Implementación: Sistema CCV Connect

Este documento detalla paso a paso todas las tareas necesarias para completar el proyecto, desde la configuración inicial hasta el despliegue.

## Fase 1: Configuración del Entorno e Inicialización
- [ ] **Estructura de Directorios**: Crear carpetas `backend` y `frontend`.
- [ ] **Instalación Backend**: Inicializar proyecto Laravel en `/backend`.
- [ ] **Instalación Frontend**: Inicializar proyecto Angular en `/frontend`.
- [ ] **Configuración de Base de Datos**: Crear base de datos local y configurar `.env` en Laravel.
- [ ] **Configuración de Estilos**: Instalar y configurar TailwindCSS en Angular.

## Fase 2: Desarrollo del Backend (Laravel API)
### 2.1 Base de Datos y Modelos
- [ ] **Migraciones de Autenticación**: Modificar tabla `users`, crear tablas `roles`, `permissions`.
- [ ] **Migraciones de Negocio**: Crear tablas `ministries`, `ministry_user`.
- [ ] **Migraciones CMS**: Crear tablas `banners`, `events`, `sermons`, `church_config`.
- [ ] **Modelos**: Generar modelos Eloquent y definir relaciones (`hasMany`, `belongsTo`, etc.).

### 2.2 Lógica de Negocio y API
- [ ] **Autenticación**: Configurar Laravel Sanctum (Login, Logout, Me).
- [ ] **Seeders**: Crear datos iniciales (Roles básicos, Usuario Admin, Ministerios: Alabanza, Finanzas, Marketing, etc.).
- [ ] **Controladores Admin**:
    - [ ] `UserController`: CRUD usuarios y asignación múltiple de ministerios.
    - [ ] `MinistryController`: CRUD de ministerios (esto alimentará el menú del dashboard).
    - [ ] `ContentController`: Gestión de banners, eventos y sermones.
- [ ] **Controladores Públicos**:
    - [ ] Endpoints de solo lectura para el Home, Eventos y Sermones.

## Fase 3: Desarrollo del Frontend (Angular)
### 3.1 Arquitectura Base
- [ ] **Estructura de Módulos**: Definir `AuthModule`, `AdminModule`, `PublicModule`.
- [ ] **Rutas**: Configurar `app-routing.module.ts` con Lazy Loading.
- [ ] **Servicio de Menú Dinámico**: Crear servicio que consulte `GET /api/my-ministries` y genere el sidebar.

### 3.2 Módulo Público (Web de la Iglesia)
- [ ] **Layout Público**: Header (Menú), Footer.
- [ ] **Home Page**: Slider de banners, sección de bienvenida, horarios.
- [ ] **Página de Ministerios**: Listado visual de ministerios.
- [ ] **Página de Eventos**: Calendario o lista de próximos eventos.
- [ ] **Página de Sermones**: Reproductor de video/audio embebido.

### 3.3 Módulo Administrativo (Dashboard)
- [ ] **Layout Admin**: Sidebar lateral dinámico (basado en ministerios asignados).
- [ ] **Login**: Formulario de inicio de sesión.
- [ ] **Vista de Ministerio**: Plantilla genérica reutilizable para gestionar cada ministerio (Miembros, Eventos del ministerio).
- [ ] **Gestión de Usuarios**: Tabla con filtros, modal de crear/editar.
- [ ] **Gestión de Contenido Global**: Banners, Configuración.

## Fase 4: Integración y Refinamiento
- [ ] **Conexión**: Asegurar que el Frontend consuma correctamente la API.
- [ ] **Manejo de Errores**: Notificaciones (Toasts) para éxito/error en operaciones.
- [ ] **Carga de Archivos**: Implementar subida de imágenes para banners y eventos.
- [ ] **Optimización**: Revisar performance y tiempos de carga.
- [ ] **Diseño**: Pulir detalles visuales (animaciones, colores, tipografía).

## Fase 5: Despliegue (Futuro)
- [ ] Preparar build de producción de Angular.
- [ ] Configurar servidor web (Apache/Nginx) para servir Laravel y Angular.
