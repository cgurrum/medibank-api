FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY src/ ./server
CMD ["node", "server/server.js"]