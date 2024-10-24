# Use the official Nginx image from the Docker Hub
FROM nginx:alpine

# Create healthcheck endpoint
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copy static files to the Nginx html directory
COPY ./static /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]