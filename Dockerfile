# Build Frontend
FROM node:20 AS frontend-builder
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ ./
RUN npm run build

# Final Stage
FROM node:20-slim
WORKDIR /app

# Install runtime dependencies for better-sqlite3
RUN apt-get update && apt-get install -y python3 make g++ --no-install-recommends && rm -rf /var/lib/apt/lists/*

# Copy backend files
COPY server/package*.json ./server/
RUN cd server && npm install --production

COPY server/ ./server/
COPY --from=frontend-builder /app/client/dist ./client/dist

# Root package.json (optional but good for context)
COPY package*.json ./

ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080

# Start server directly to avoid npm overhead
CMD ["node", "server/index.js"]