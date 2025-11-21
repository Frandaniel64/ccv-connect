@echo off
REM Script para ver logs de Docker

echo ========================================
echo   CCV-Connect - Docker Logs
echo ========================================
echo.
echo Selecciona qué logs quieres ver:
echo.
echo 1. Todos los servicios
echo 2. Backend (Laravel)
echo 3. Frontend (Angular)
echo 4. MySQL
echo 5. Nginx Backend
echo.
set /p choice="Ingresa tu opción (1-5): "

if "%choice%"=="1" (
    echo.
    echo Mostrando logs de todos los servicios...
    docker-compose logs -f
) else if "%choice%"=="2" (
    echo.
    echo Mostrando logs del backend...
    docker-compose logs -f backend
) else if "%choice%"=="3" (
    echo.
    echo Mostrando logs del frontend...
    docker-compose logs -f frontend
) else if "%choice%"=="4" (
    echo.
    echo Mostrando logs de MySQL...
    docker-compose logs -f mysql
) else if "%choice%"=="5" (
    echo.
    echo Mostrando logs de Nginx Backend...
    docker-compose logs -f nginx-backend
) else (
    echo.
    echo [ERROR] Opción inválida
    pause
    exit /b 1
)
