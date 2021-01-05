import './App.css';
import React, { useEffect, useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoTable from './components/TodoTable';
import TodoDelete from './components/TodoDelete';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    if (localStorage.getItem('tasks') != null) {
      setTasks(JSON.parse(localStorage.getItem('tasks')));
    }
  }, []);

  const handleInputChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTasks([...tasks, input]);
  };

  useEffect(() => {
    for (let index = 0; index < tasks.length; index++) {
      localStorage.setItem(
        `task${index}`,
        JSON.stringify([{ task: tasks[index], checked: false }])
      );
    }
  }, [tasks]);

  return (
    <div>
      <TodoInput handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
      <TodoTable tasks={tasks} input={input} />
      <TodoDelete setTasks={setTasks} />
    </div>
  );
}

export default App;
