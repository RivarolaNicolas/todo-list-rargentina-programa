import './App.css';
import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoTable from './components/TodoTable';
import useLocalStorage from 'react-use-localstorage';

function App() {
  const [task, setTask] = useState([]);
  const [input, setInput] = useState('');
  const [taskLocalStorage, setTaskLocalStorage] = useLocalStorage('key', '');

  return (
    <div>
      <TodoInput
        taskLocalStorage={taskLocalStorage}
        setTaskLocalStorage={setTaskLocalStorage}
        input={input}
        setInput={setInput}
        task={task}
        setTask={setTask}
      />
      <TodoTable
        taskLocalStorage={taskLocalStorage}
        setTaskLocalStorage={setTaskLocalStorage}
        task={task}
        setTask={setTask}
      />
    </div>
  );
}

export default App;
