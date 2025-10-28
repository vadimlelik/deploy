# 1️⃣ Билдим клиент
FROM node:20 AS builder
WORKDIR /app
COPY ./client ./client
RUN cd client && npm install && npm run build

# 2️⃣ Сервер + статика
FROM node:20
WORKDIR /app
COPY ./server/package*.json ./
RUN npm install --omit=dev

# Копируем весь серверный код
COPY ./server ./server

# Копируем собранный React (dist) в корень /app
COPY --from=builder /app/client/dist ./dist

EXPOSE 3005
CMD ["node", "server/index.js"]
