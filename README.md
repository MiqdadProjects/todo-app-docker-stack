# Todo App Docker Stack

A simple and efficient Todo application, containerized and orchestrated using Docker. This project demonstrates how to build, run, and scale a full-stack Todo app with minimal setup.

## 🚀 Features

- Add and delete to-do tasks  
- REST API with Flask and SQLAlchemy  
- PostgreSQL integration  
- CORS-enabled for frontend-backend communication  
- Containerized with Docker Compose  

## 📦 Tech Stack

- **Frontend**: React + JavaScript  
- **Backend**: Flask (Python)  
- **Database**: PostgreSQL  
- **DevOps**: Docker, Docker Compose  


## 📦 Getting Started

### Prerequisites

- [Docker] (https://www.docker.com/get-started)

- [Node.js] (https://nodejs.org/) (required for frontend development tasks outside Docker, e.g., running React locally or building the frontend)

## 🐳 Running the App with Docker Compose

1. Clone the repository:
   git clone https://github.com/MiqdadProjects/todo-app-docker-stack.git

    ```
   cd todo-app-docker-stack
  ```

  2. **(Optional) Configure environment variables:**

  - Edit `backend/.env` if you want to change database credentials or settings.  

  The default is:
  ```
    DB_USER=postgres
    DB_PASSWORD=secret_pass
    DB_HOST=db
    DB_NAME=tododb
  ```

3. **Build and run the containers:** `docker-compose up --build`
   

4. **Access the application:**

- Frontend:  [http://localhost:3000](http://localhost:3000)
- Backend API:  [http://localhost:5000/api/todos](http://localhost:5000/api/todos)

5. **Next Steps:**

- Open the frontend URL in your browser to use the To-Do app.
- Use the API endpoints for programmatic access or testing.
- To stop the app, press `Ctrl+C` in your terminal and run:

  ```
  docker-compose down
  ```

- To rebuild containers without cache (if you change code or Dockerfiles):
  ```
  docker-compose build --no-cache
  docker-compose up
  ```

---

## 🌐 API Endpoints

| Method | Endpoint           | Description          |
|--------|--------------------|----------------------|
| GET    | `/api/todos`       | Get all to-do items  |
| POST   | `/api/todos`       | Add a new to-do      |
| DELETE | `/api/todos/<id>`  | Delete a to-do       |

---




---

## 🧹 Useful Commands

-   Rebuild containers without cache:

    ```bash
    docker-compose build --no-cache

- Stop and remove containers:

    ```bash
    docker-compose down


🙌 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change. 


