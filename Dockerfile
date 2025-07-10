# Build stage
FROM --platform=linux/amd64 node:18 as build
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# Development stage
FROM --platform=linux/amd64 node:18 as development
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps && \
    npm install @rollup/rollup-linux-x64-gnu --no-save
COPY . .
ENV NODE_OPTIONS=--max_old_space_size=4096

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist/portfolio/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"] 