@echo off
REM Script para iniciar Docker en Windows
echo ========================================
echo   CCV-Connect - Docker Startup Script
echo ========================================
echo.

REM Verificar si Docker Desktop está corriendo
docker info >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Docker Desktop no está corriendo.
    echo.
    echo Por favor:
    echo 1. Abre Docker Desktop
    echo 2. Espera a que esté completamente iniciado
    echo 3. Ejecuta este script nuevamente
    echo.
    pause
    exit /b 1
)

echo [OK] Docker Desktop está corriendo
echo.

REM Detener contenedores existentes si los hay
echo Deteniendo contenedores existentes...
docker-compose down 2>nul

echo.
echo Construyendo e iniciando contenedores...
echo Esto puede tomar varios minutos la primera vez...
echo.

REM Construir e iniciar contenedores
docker-compose up -d --build

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Hubo un problema al iniciar los contenedores.
    echo Revisa los logs con: docker-compose logs
    pause
    exit /b 1
)

echo.
echo ========================================
echo   Contenedores iniciados exitosamente!
echo ========================================
echo.
echo Servicios disponibles:
echo   - Frontend: http://localhost:4200
echo   - Backend:  http://localhost:8000
echo   - MySQL:    localhost:3306
echo.
echo Para ver los logs en tiempo real:
echo   docker-compose logs -f
echo.
echo Para detener los contenedores:
echo   docker-compose down
echo.
pause
