# Use Python Alpine base image with version 3.13.1
FROM python:3.13.1-alpine3.9

# Install dependencies.  Alpine uses apk, and we're installing
# build tools (gcc, musl-dev) and postgres client libraries.
RUN apk add --no-cache gcc musl-dev libpq-dev

# Set the working directory within the container.
# All subsequent commands will be executed in this directory.
WORKDIR /app

# Copy the requirements file into the container.

COPY requirements.txt .

# Install Python packages from requirements.txt.
# The --no-cache-dir flag reduces the size of the final image.
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application code into the container. 
COPY . .

# Expose the port that  Flask application listens on.
# The default Flask port is 5000.
EXPOSE 5000

# Command to run when the container starts.  
CMD ["python", "app.py"]
