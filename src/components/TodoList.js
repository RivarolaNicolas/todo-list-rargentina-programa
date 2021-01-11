import React from 'react';
import { useState } from 'react';

export default function TodoList() {
  const [input, setInput] = useState('');
  const [task, setTask] = useState([]);

  function inputHandler(event) {
    event.preventDefault();
    setInput(event.target.value);
    console.log(event.target.value);
  }

  function taskHandler(event) {
    event.preventDefault();
    setTask([...task, { text: input, checked: false }]);
    console.log(task);
  }

  return (
    <div>
      <div>
        <h1>Todo List</h1>
      </div>
      <div>
        <input onChange={inputHandler} type="text" placeholder="Things you have to do"></input>
        <button onClick={taskHandler}>Submit</button>
      </div>
    </div>
  );
}
