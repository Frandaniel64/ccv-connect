#!/bin/bash

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "========================================"
echo "  CCV-Connect - Instalación Automática"
echo "========================================"
echo ""

# Verificar si Docker está instalado
if ! command -v docker &> /dev/null; then
    echo -e "${RED}[ERROR]${NC} Docker no está instalado."
    echo "Por favor instala Docker desde: https://www.docker.com/products/docker-desktop"
    exit 1
fi

echo -e "${GREEN}[OK]${NC} Docker está instalado"
echo ""

# Verificar si Docker está corriendo
if ! docker ps &> /dev/null; then
    echo -e "${RED}[ERROR]${NC} Docker no está corriendo."
    echo "Por favor inicia Docker y vuelve a ejecutar este script."
    exit 1
fi

echo -e "${GREEN}[OK]${NC} Docker está corriendo"
echo ""

# Copiar archivo de variables de entorno
if [ ! -f .env ]; then
    echo -e "${YELLOW}[*]${NC} Copiando archivo de configuración..."
    cp .env.docker .env
    echo -e "${GREEN}[OK]${NC} Archivo .env creado"
else
    echo -e "${YELLOW}[!]${NC} El archivo .env ya existe, se mantendrá el actual"
fi
echo ""

# Levantar contenedores
echo -e "${YELLOW}[*]${NC} Levantando contenedores Docker..."
echo -e "${YELLOW}[!]${NC} Esto puede tardar 5-10 minutos la primera vez..."
echo ""
docker-compose up -d --build

if [ $? -ne 0 ]; then
    echo ""
    echo -e "${RED}[ERROR]${NC} Falló al levantar los contenedores"
    exit 1
fi

echo ""
echo -e "${GREEN}[OK]${NC} Contenedores levantados exitosamente"
echo ""

# Esperar a que MySQL esté listo
echo -e "${YELLOW}[*]${NC} Esperando a que MySQL esté listo..."
sleep 10

# Configurar Laravel
echo -e "${YELLOW}[*]${NC} Configurando Laravel..."
docker-compose exec -T backend php artisan key:generate

if [ $? -ne 0 ]; then
    echo -e "${RED}[ERROR]${NC} Falló al generar la clave de aplicación"
    exit 1
fi

echo -e "${GREEN}[OK]${NC} Clave de aplicación generada"
echo ""

echo -e "${YELLOW}[*]${NC} Ejecutando migraciones de base de datos..."
docker-compose exec -T backend php artisan migrate --force

if [ $? -ne 0 ]; then
    echo -e "${RED}[ERROR]${NC} Falló al ejecutar las migraciones"
    exit 1
fi

echo -e "${GREEN}[OK]${NC} Migraciones ejecutadas exitosamente"
echo ""

# Mostrar estado
echo "========================================"
echo "  ✅ Instalación Completada!"
echo "========================================"
echo ""
echo "El proyecto está corriendo en:"
echo ""
echo "  Frontend:  http://localhost:4200"
echo "  Backend:   http://localhost:8000"
echo "  MySQL:     localhost:3306"
echo ""
echo "Para ver los logs:"
echo "  docker-compose logs -f"
echo ""
echo "Para detener el proyecto:"
echo "  docker-compose down"
echo ""
echo "========================================"
