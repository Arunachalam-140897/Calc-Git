FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install axios
COPY . .
# Expose the correct port (8000 for backend1, 9000 for backend2)
EXPOSE 9000
CMD ["npm", "start"]
