import './App.css';
import React, { useEffect, useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoTable from './components/TodoTable';
import TodoDelete from './components/TodoDelete';
import { UseLocalStorageObjectState } from './customHooks/UseLocalStorageObjectState';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('tasks')) == null) {
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
    const taskObjects = tasks.map((task) => ({ task, checked: false }));
    if (JSON.parse(localStorage.getItem('tasks')) != tasks) {
      localStorage.setItem('tasks', JSON.stringify(taskObjects));
    }
  }, [tasks]);

  // useEffect(() => {
  //   const taskObjects = tasks.map((task) => ({ task, checked: false }));
  //   localStorage.setItem('tasks', JSON.stringify(taskObjects));
  // }, [tasks]);

  return (
    <div>
      <TodoInput handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
      <TodoTable tasks={tasks} input={input} />
      <TodoDelete setTasks={setTasks} />
    </div>
  );
}

export default App;
