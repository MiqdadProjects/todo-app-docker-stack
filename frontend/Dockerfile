# Stage 1: Build React app
FROM node:slim AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./

# This allows npm to install dependencies based on these files.

RUN npm install

# Installs the Node.js dependencies defined in package.json.

# Copy source code and build app
COPY . .
# Copies the entire project source code into the container.

RUN npm run build
# Executes the build script defined in package.json (typically creates an optimized production build of the React app).

# Stage 2: Serve built app with lightweight nginx server
FROM nginx:alpine

# Copy built static files from build stage to nginx html folder
COPY --from=build /app/build /usr/share/nginx/html
# Copies the production build artifacts from the 'build' stage into the Nginx web server's document root.

COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copies a custom Nginx configuration file into the Nginx configuration directory

# Expose port 80 (nginx default)
EXPOSE 80
# Declares that the container will listen on port 80, the standard HTTP port.

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
# Specifies the command to run when the container starts, which in this case starts the Nginx server in the foreground.