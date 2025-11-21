# Visión General del Proyecto: Sistema de Gestión Eclesiástica (CCV Connect)

## 1. Introducción
Este proyecto consiste en el desarrollo de una plataforma integral para la gestión de una iglesia. El sistema se divide en dos componentes principales:
1.  **Portal Público (Web):** Una landing page dinámica para mostrar información de la iglesia, eventos, sermones y ministerios.
2.  **Panel Administrativo (Dashboard):** Una interfaz privada para gestionar el contenido del portal público, administrar usuarios, ministerios y permisos.

## 2. Stack Tecnológico

### Backend (API REST)
-   **Framework:** Laravel (PHP)
-   **Base de Datos:** MySQL / MariaDB
-   **Autenticación:** Laravel Sanctum (Tokens)

### Frontend (SPA)
-   **Framework:** Angular (TypeScript)
-   **Estilos:** TailwindCSS (Recomendado para diseño moderno) o CSS Vanilla.
-   **Gráficos/UI:** Componentes modernos y responsivos.

## 3. Módulos Principales

### A. Gestión de Usuarios y Seguridad (ACL)
-   Sistema de Roles y Permisos (RBAC).
-   Gestión de usuarios por Ministerios.
-   Autenticación segura.

### B. Gestión de Ministerios
-   CRUD de Ministerios (Alabanza, Medios, Niños, etc.).
-   Asignación de líderes y miembros.

### C. CMS (Gestor de Contenido Web)
-   **Home:** Configuración de banners, textos de bienvenida.
-   **Eventos:** Calendario de actividades próximas.
-   **Sermones:** Repositorio de videos (YouTube/Vimeo) o audios.
-   **Configuración General:** Datos de la iglesia, redes sociales, pie de página.

## 4. Flujo de Trabajo
1.  Diseño de Base de Datos.
2.  Configuración del Backend (Laravel).
3.  Desarrollo de API Endpoints.
4.  Configuración del Frontend (Angular).
5.  Integración y Desarrollo de Vistas.
