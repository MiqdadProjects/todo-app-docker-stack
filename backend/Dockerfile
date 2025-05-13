# Stage 1: Build stage - install dependencies
FROM python:3.13.3-alpine AS builder

# Install build dependencies
RUN apk add --no-cache gcc musl-dev libpq-dev

WORKDIR /app

# Copy requirements and install dependencies
COPY requirements.txt .
RUN pip install --prefix=/install --no-cache-dir -r requirements.txt

# Copy app source code
COPY . .

# Stage 2: Final stage - minimal runtime image
FROM python:3.13.3-alpine

# Install runtime dependencies only
RUN apk add --no-cache libpq

WORKDIR /app

# Copy installed packages from builder stage
COPY --from=builder /install /usr/local

# Copy app source code
COPY --from=builder /app /app

# Expose port
EXPOSE 5000

# Run the app
CMD ["python", "app.py"]
