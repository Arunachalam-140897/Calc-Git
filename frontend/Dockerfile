# frontend/Dockerfile - Multi-stage
# Build stage
FROM node:18-alpine AS build
WORKDIR /app

# Copy package json and lock
COPY package*.json ./

# Install dependencies
RUN npm ci --silent

# Copy source and build
COPY . .
RUN npm run build

# Production Nginx stage
FROM nginx:alpine
# Optional: copy custom nginx config if needed
COPY nginx.conf /etc/nginx/nginx.conf

# Remove default static content
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]












# # Step 1: Use Node.js image to build React app
# FROM node:20-alpine AS build

# # Set working directory
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install
# # Install axios specifically (though it should already be in package.json)
# RUN npm install axios

# # Copy all source files
# COPY . .

# # Build the React app
# RUN npm run build

# # Step 2: Use Nginx to serve the app
# FROM nginx:alpine

# # Copy custom Nginx config
# COPY nginx.conf /etc/nginx/nginx.conf

# # Remove default Nginx static content
# RUN rm -rf /usr/share/nginx/html/*

# # Copy React build from previous stage
# COPY --from=build /app/build /usr/share/nginx/html

# # Expose port 80
# EXPOSE 80

# # Start Nginx
# CMD ["nginx", "-g", "daemon off;"]
