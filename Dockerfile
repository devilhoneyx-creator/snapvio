# Build Frontend
FROM node:20 AS frontend-builder
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ ./
RUN npm run build

# Final Stage - Using full node:20 for better native module support
FROM node:20
WORKDIR /app

# Ensure build tools are present for native modules
RUN apt-get update && apt-get install -y python3 make g++ --no-install-recommends && rm -rf /var/lib/apt/lists/*

# Copy backend dependencies
COPY server/package*.json ./server/
RUN cd server && npm install --production

# Copy backend source
COPY server/ ./server/
# Copy frontend build
COPY --from=frontend-builder /app/client/dist ./client/dist

# Root package.json
COPY package*.json ./

ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080

# Start server
CMD ["node", "server/index.js"]