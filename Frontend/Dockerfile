# Этап сборки
FROM node:20-alpine AS builder
WORKDIR /app
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

# Этап запуска
FROM node:20-alpine
WORKDIR /app

# Устанавливаем статический сервер (альтернатива vite preview)
RUN npm install -g serve

# Копируем production-сборку
COPY --from=builder /app/dist ./dist

EXPOSE 4173
CMD ["serve", "-s", "dist", "-l", "4173"]