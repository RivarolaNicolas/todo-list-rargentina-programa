import React, { useState } from 'react';
import '../styles/TodoTable.css';

const TodoTable = (props) => {
  const { tasks, input } = props;
  const [checked, setChecked] = useState(false);

  const checkboxHandler = () => {
    setChecked(!checked);
  };

  return (
    <span className="flex flex-col justify-center items-center">
      {JSON.parse(localStorage.getItem('task')) != null
        ? JSON.parse(localStorage.getItem('task')).map((element, index) => {
            return (
              <div
                className={` shadow-md w-3/6 items-center justify-center ${
                  index % 2 === 0 ? 'bg-yellow-900 bg-opacity-60' : ''
                }`}
              >
                <div id="tasks" className="flex flex-row ">
                  <div className={`flex flex-row `}>
                    <input
                      onChange={checkboxHandler}
                      type="checkbox"
                      id="checkbox"
                      className="flex flex-row place-self-center mx-2"
                    ></input>
                    <div className={`${checked === false ? '' : 'checked'}`}>{element}</div>
                  </div>
                </div>
              </div>
            );
          })
        : tasks.map((element, index) => {
            return (
              <div
                className={`shadow-md w-3/6 items-center justify-center ${
                  index % 2 === 0 ? 'bg-yellow-900 bg-opacity-60' : ''
                }`}
              >
                <div id="tasks" className="flex flex-row ">
                  <div className={`flex flex-row `}>
                    <input
                      onChange={checkboxHandler}
                      type="checkbox"
                      id="checkbox"
                      className="flex flex-row place-self-center mx-2"
                    ></input>
                    <div className={`${checked === false ? '' : 'checked'}`}>{element}</div>
                  </div>
                </div>
              </div>
            );
          })}
    </span>
  );
};

export default TodoTable;
