import React, { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Fetch existing todos
  useEffect(() => {
    fetch('/api/todos')
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  // Add new task
  const handleAdd = () => {
    if (newTask.trim() === '') return;
    fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task: newTask })
    })
      .then(res => res.json())
      .then(added => {
        setTodos([...todos, added]);
        setNewTask('');
      });
  };

  // Delete task
  const handleDelete = (id) => {
    fetch(`/api/todos/${id}`, { method: 'DELETE' })
      .then(() => setTodos(todos.filter(todo => todo.id !== id)));
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h1>To-Do List</h1>

      <div style={{ display: 'flex', marginBottom: '1rem' }}>
        <input
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder="Add a new task"
          style={{ flex: 1, padding: '0.5rem' }}
        />
        <button onClick={handleAdd} style={{ marginLeft: '0.5rem' }}>
          Add
        </button>
      </div>

      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ marginBottom: '0.5rem' }}>
            {todo.task}
            <button onClick={() => handleDelete(todo.id)} style={{ marginLeft: '1rem', color: 'red' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
