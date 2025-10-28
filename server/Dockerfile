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
COPY ./server/src ./src
COPY --from=builder /app/client/dist ./dist

EXPOSE 3005
CMD ["node", "index.js"]
