# Stage 1: Build React
FROM node:22.14-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build

# Stage 2: Serve React bằng Nginx
FROM nginx:alpine AS production
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
