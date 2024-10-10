FROM node:18.18-alpine AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

## run stage ##
FROM nginx:alpine
WORKDIR /app

COPY --from=build /app/dist /usr/share/nginx/html

# RUN mkdir -p /var/cache/nginx && chown -R 1000:1000 /var/cache/nginx

# RUN touch /var/run/nginx.pid && chown -R 1000:1000 /var/run/nginx.pid

# RUN chown -R 1000:1000 /app

# COPY nginx.conf /etc/nginx/nginx.conf
# USER 1000

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]