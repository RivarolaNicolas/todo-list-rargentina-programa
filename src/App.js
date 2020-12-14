import './App.css';
import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoTable from './components/TodoTable';

function App() {
  const [task, setTask] = useState([]);
  const [input, setInput] = useState('');

  return (
    <div>
      <TodoInput input={input} setInput={setInput} task={task} setTask={setTask} />
      <TodoTable task={task} setTask={setTask} />
    </div>
  );
}

export default App;
