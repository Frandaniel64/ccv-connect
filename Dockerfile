# Etapa 1: Construcción
FROM node:20-alpine as build

WORKDIR /app

# Copiar archivos de configuración del frontend
COPY frontend/package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el código fuente del frontend
COPY frontend/ .

# Construir la aplicación para producción
RUN npm run build -- --configuration production

# Etapa 2: Servidor Nginx
FROM nginx:alpine

# Copiar la configuración de Nginx personalizada
COPY nginx-custom.conf /etc/nginx/conf.d/default.conf

# Copiar los archivos construidos desde la etapa anterior
# Ajusta 'dist/frontend/browser' si tu angular.json tiene otra ruta de salida
COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
