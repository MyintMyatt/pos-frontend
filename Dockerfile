# Use lightweight Node image
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./


RUN npm install

COPY . .

# Expose Vite port
EXPOSE 5173

# Run dev server accessible to host
CMD ["npm", "run", "dev"]
