# Build
FROM node:22.19 AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build-prod

# Runtime
FROM nginx:alpine
COPY --from=build /app/dist/Workline-FrontEnd-Angular/browser /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
