# 1️⃣ Билдим клиент
FROM node:20 AS builder
WORKDIR /app
COPY ./client ./client
RUN cd client && npm ci && npm run build 

# 2️⃣ Сервер + статика
FROM node:20
WORKDIR /app/server
COPY ./server/package*.json ./
RUN npm ci --omit=dev
COPY ./server ./
# Берём готовый билд из server/dist
COPY --from=builder /app/client/dist ./dist

EXPOSE 3005
CMD ["node", "index.js"]
