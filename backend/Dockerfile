# Estágio de construção
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Estágio final
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .

# Variáveis de ambiente (substitua pelos seus valores)
ENV MONGODB_URI=mongodb://admin:senhaadmin@mongodb:27017/emprestimos?authSource=admin
ENV JWT_SECRET=sua_chave_secreta_aqui
ENV NODE_ENV=production
ENV PORT=5000

EXPOSE 5000
USER node
CMD ["node", "src/server.js"]