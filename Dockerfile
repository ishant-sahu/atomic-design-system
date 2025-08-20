# Multi-stage Dockerfile for Atomic Design System Storybook
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Build the application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build
RUN npm run build:storybook

# Production runtime
FROM base AS runner
WORKDIR /app

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 storybook

# Copy built files
COPY --from=builder /app/storybook-static ./storybook-static
COPY --from=builder /app/dist ./dist

# Set ownership
RUN chown -R storybook:nodejs /app
USER storybook

# Expose port
EXPOSE 6006

# Start Storybook
CMD ["npx", "http-server", "storybook-static", "-p", "6006", "-a", "0.0.0.0"] 