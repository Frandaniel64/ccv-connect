@echo off
echo ========================================
echo   CCV-Connect - Instalacion Automatica
echo ========================================
echo.

REM Verificar si Docker esta instalado
docker --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Docker no esta instalado.
    echo Por favor instala Docker Desktop desde: https://www.docker.com/products/docker-desktop
    pause
    exit /b 1
)

echo [OK] Docker esta instalado
echo.

REM Verificar si Docker esta corriendo
docker ps >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Docker no esta corriendo.
    echo Por favor inicia Docker Desktop y vuelve a ejecutar este script.
    pause
    exit /b 1
)

echo [OK] Docker esta corriendo
echo.

REM Copiar archivo de variables de entorno
if not exist .env (
    echo [*] Copiando archivo de configuracion...
    copy .env.docker .env >nul
    echo [OK] Archivo .env creado
) else (
    echo [!] El archivo .env ya existe, se mantendra el actual
)
echo.

REM Levantar contenedores
echo [*] Levantando contenedores Docker...
echo [!] Esto puede tardar 5-10 minutos la primera vez...
echo.
docker-compose up -d --build

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Fallo al levantar los contenedores
    pause
    exit /b 1
)

echo.
echo [OK] Contenedores levantados exitosamente
echo.

REM Esperar a que MySQL este listo
echo [*] Esperando a que MySQL este listo...
timeout /t 10 /nobreak >nul

REM Configurar Laravel
echo [*] Configurando Laravel...
docker-compose exec -T backend php artisan key:generate
if %errorlevel% neq 0 (
    echo [ERROR] Fallo al generar la clave de aplicacion
    pause
    exit /b 1
)

echo [OK] Clave de aplicacion generada
echo.

echo [*] Ejecutando migraciones de base de datos...
docker-compose exec -T backend php artisan migrate --force
if %errorlevel% neq 0 (
    echo [ERROR] Fallo al ejecutar las migraciones
    pause
    exit /b 1
)

echo [OK] Migraciones ejecutadas exitosamente
echo.

REM Mostrar estado
echo ========================================
echo   Instalacion Completada!
echo ========================================
echo.
echo El proyecto esta corriendo en:
echo.
echo   Frontend:  http://localhost:4200
echo   Backend:   http://localhost:8000
echo   MySQL:     localhost:3306
echo.
echo Para ver los logs:
echo   docker-compose logs -f
echo.
echo Para detener el proyecto:
echo   docker-compose down
echo.
echo ========================================
pause
