# 📝 Todo App Docker Stack

A simple, full-stack to-do list application built with [React](https://react.dev/) and [Flask](https://flask.palletsprojects.com/), using PostgreSQL for storage.  
Easily manage your daily tasks with a modern web interface, powered by Docker for seamless deployment and development.

---

## 🚀 Getting Started

Choose your preferred setup method and follow the step-by-step instructions:

---

## 🐳 Docker Setup (Recommended for All Platforms)

1. **Install Docker & Docker Compose:**  
   - [Docker installation guide](https://docs.docker.com/get-docker/)

2. **Clone the repository:**
    ```
    git clone https://github.com/MiqdadProjects/todo-app-docker-stack.git
    cd todo-app-docker-stack
    ```

3. **(Optional) Configure environment variables:**  
   Edit `backend/.env` if you want to change database credentials. Defaults:
    ```
    DB_USER=postgres
    DB_PASSWORD=secret_pass
    DB_HOST=db
    DB_NAME=tododb
    ```

4. **Build and start the containers:**
    ```
    docker-compose up --build
    ```

5. **Access the application:**  
   - Frontend UI: [http://localhost:3000](http://localhost:3000)  
   - Backend API: [http://localhost:5000/api/todos](http://localhost:5000/api/todos)

6. **Stopping the app:**  
    Press `Ctrl+C` in your terminal, then run:
    ```
    docker-compose down
    ```

7. **Rebuild containers without cache (if needed):**
    ```
    docker-compose build --no-cache
    docker-compose up
    ```

---

## 🛠 Local Development (Optional)

### Frontend (React)

1. **Install Node.js**  
   [Node.js download page](https://nodejs.org/)

2. **Run the frontend locally:**
    ```
    cd frontend
    npm install
    npm start
    ```
   The React app will run at [http://localhost:3000](http://localhost:3000) by default.

### Backend (Flask)

1. **Install Python 3 & pip**

2. **Set up a Python virtual environment:**
    ```
    python3 -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```

3. **Install dependencies:**
    ```
    pip install -r backend/requirements.txt
    ```

4. **Set environment variables (optional):**  
   Edit or create `backend/.env` as shown above.

5. **Run the Flask backend:**
    ```
    cd backend
    flask run
    ```
   The API will be available at [http://localhost:5000/api/todos](http://localhost:5000/api/todos).

---

## 🌐 API Endpoints

| Method | Endpoint           | Description              |
|--------|--------------------|--------------------------|
| GET    | `/api/todos`       | Retrieve all to-do items |
| POST   | `/api/todos`       | Add a new to-do item     |
| DELETE | `/api/todos/<id>`  | Delete a to-do item by ID|

---

## 💡 Tips

- All environment variables can be customized in `backend/.env`.
- Use `docker-compose down` to stop and remove containers.
- Use `docker-compose build --no-cache` to force a rebuild after changes.
- For production, consider using a production-ready WSGI server for Flask and a reverse proxy for React.

---

## 🙌 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

**Happy coding! 🚀**
