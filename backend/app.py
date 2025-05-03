from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# In-memory list to simulate database
todos = [
    {"id": 1, "task": "Learn Docker"},
    {"id": 2, "task": "Build ToDo app"}
]
next_id = 3

@app.route('/')
def home():
    return "Welcome to the To-Do API! Use /api/todos to get the list."

@app.route('/api/todos', methods=['GET'])
def get_todos():
    return jsonify(todos)

@app.route('/api/todos', methods=['POST'])
def add_todo():
    global next_id
    data = request.get_json()
    new_task = {"id": next_id, "task": data['task']}
    todos.append(new_task)
    next_id += 1
    return jsonify(new_task), 201

@app.route('/api/todos/<int:todo_id>', methods=['DELETE'])
def delete_todo(todo_id):
    global todos
    todos = [t for t in todos if t['id'] != todo_id]
    return '', 204

if __name__ == '__main__':
    app.run(debug=True)
