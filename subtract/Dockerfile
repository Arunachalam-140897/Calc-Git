# add/Dockerfile
FROM node:18-slim AS build
WORKDIR /app

# Copy package files first to leverage Docker cache
COPY package*.json ./

# Use npm ci in CI contexts; fallback to npm install if package-lock not present
RUN npm ci --only=production || npm install --only=production

# Copy app source
COPY . .

# Expose port and run
EXPOSE 9000
CMD ["node", "server.js"]






# FROM node:20-alpine
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# RUN npm install axios
# COPY . .
# # Expose the correct port (8000 for backend1, 9000 for backend2)
# EXPOSE 9000
# CMD ["npm", "start"]
