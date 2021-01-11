import React from 'react';
import { useState } from 'react';
import '../styles/TodoList.css';

export default function TodoList() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  function inputHandler(event) {
    event.preventDefault();
    setInput(event.target.value);
  }

  function tasksHandler(event) {
    event.preventDefault();
    setTasks([...tasks, { text: input, checked: false }]);
  }

  function checkTask(index) {
    let tasksArray = [...tasks];
    tasksArray[index].checked = !tasksArray[index].checked;
    setTasks(tasksArray);
  }

  return (
    <div>
      <div>
        <h1>Todo List</h1>
      </div>
      <div>
        <input onChange={inputHandler} type="text" placeholder="Things you have to do"></input>
        <button onClick={tasksHandler}>Submit</button>
      </div>
      <br />
      <br />
      <br />
      <br />
      {tasks.map((task, index) => (
        <div>
          <input onClick={() => checkTask(index)} type="checkbox"></input>
          <p className={task.checked ? 'isClicked' : ''}>{task.text}</p>
        </div>
      ))}
    </div>
  );
}
