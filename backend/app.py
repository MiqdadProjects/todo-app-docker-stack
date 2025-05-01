from flask import Flask, jsonify
import os

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify({"message": "Hello from Flask API!"})

@app.route('/api/todos')
def get_todos():
    todos = [
        {"id": 1, "task": "Learn Docker", "done": False},
        {"id": 2, "task": "Build ToDo app", "done": False}
    ]
    return jsonify(todos)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)