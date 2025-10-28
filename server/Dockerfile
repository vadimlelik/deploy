# 1️⃣ Билдим клиент
FROM node:20 AS builder
WORKDIR /app/client
COPY ./client/package*.json ./
RUN npm ci
COPY ./client ./
RUN npm run build  # билд уходит в default: client/dist

# 2️⃣ Сервер + статика
FROM node:20
WORKDIR /app/server
COPY ./server/package*.json ./
RUN npm install --omit=dev
COPY ./server ./

# Копируем готовый билд React
COPY --from=builder /app/client/dist ./dist

EXPOSE 3005
CMD ["node", "index.js"]
