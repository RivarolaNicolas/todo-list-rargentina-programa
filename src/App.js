import './App.css';
import React, { useEffect, useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoTable from './components/TodoTable';
import TodoDelete from './components/TodoDelete';

function App() {
  const [task, setTask] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    if (localStorage.getItem('task') != null) {
      setTask(JSON.parse(localStorage.getItem('task')));
    }
  }, []);

  const handleInputChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTask([...task, input]);
    localStorage.setItem('task', JSON.stringify([...task, input]));
  };

  return (
    <div>
      <TodoInput handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
      <TodoTable task={task} input={input} />
      <TodoDelete setTask={setTask} />
    </div>
  );
}

export default App;
