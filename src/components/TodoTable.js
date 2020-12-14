import React from 'react';

const TodoTable = (props) => {
  const { task } = props;
  return (
    <span className="flex flex-col justify-center items-center">
      {task.map((element, index) => {
        return (
          <div
            className={` shadow-md w-3/6 items-center justify-center ${
              index % 2 === 0 ? 'bg-yellow-900 bg-opacity-60' : ''
            }`}
          >
            <div id="tasks" className="flex flex-row ">
              <div className={`flex flex-row `}>
                <input
                  type="checkbox"
                  id="checkbox"
                  className="flex flex-row place-self-center mx-2"
                ></input>
                {element}
              </div>
            </div>
          </div>
        );
      })}
    </span>
  );
};

export default TodoTable;
