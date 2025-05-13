# Stage 1: Build React app
FROM node:slim AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./

RUN npm install

# Copy source code and build app
COPY . .

RUN npm run build

# Stage 2: Serve built app with lightweight nginx server
FROM nginx:alpine

# Copy built static files from build stage to nginx html folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 (nginx default)
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
