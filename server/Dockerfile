# 1️⃣ Билдим клиент
FROM node:20 AS builder
WORKDIR /app

# Копируем только клиент
COPY ./client ./client

# Ставим зависимости и билдим
RUN cd client && npm ci && npm run build && ls -la client/dist

# 2️⃣ Сервер + статика
FROM node:20
WORKDIR /app

COPY ./server/package*.json ./
RUN npm install --omit=dev

# Копируем весь сервер
COPY ./server ./server

# Копируем React dist из первого этапа
COPY --from=builder /app/client/dist ./dist

EXPOSE 3005
CMD ["node", "server/index.js"]
