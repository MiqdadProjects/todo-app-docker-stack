# Use Python Alpine base image with version 3.13.1
FROM python:3.13.3-alpine

# Install dependencies
RUN apk add --no-cache gcc musl-dev libpq-dev

# Set working directory
WORKDIR /app

# Copy requirement file and install Python dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy environment variables and app code and all files 
COPY . .  

# Expose Flask port
EXPOSE 5000

# Run the application
CMD ["python", "app.py"]
