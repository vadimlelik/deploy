# 1️⃣ Билдим клиент
FROM node:20 AS builder
WORKDIR /app
COPY ./client ./client
COPY ./server ./server
RUN cd client && npm ci && npm run build && ls -la ../server/dist

# 2️⃣ Сервер + статика
FROM node:20
WORKDIR /app
COPY ./server/package*.json ./
RUN npm install --omit=dev
COPY ./server ./server
# Берём готовый билд из server/dist
COPY --from=builder /app/server/dist ./server/dist

EXPOSE 3005
CMD ["node", "server/index.js"]
