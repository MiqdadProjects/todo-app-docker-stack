# Use a lightweight Node.js base image for smaller size and security.
FROM node:slim

# Create a working directory inside the container for our application code.
WORKDIR /app

# Copy the package.json and package-lock.json 

COPY package*.json ./

# Install the Node.js dependencies defined in package.json.
RUN npm install

# Copy the rest of the application code from the host machine to the container.
COPY . .

# Expose port 3000 to allow external access to the application.
EXPOSE 3000

# Define the command to run the application when the container starts.

CMD ["npm", "start"]