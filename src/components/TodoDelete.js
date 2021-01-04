import React from 'react';

const TodoDelete = (props) => {
  const { setTasks } = props;
  const deleteEntries = () => {
    setTasks([]);
    localStorage.clear();
  };

  return (
    <div>
      <span className="flex flex-col justify-center items-center ">
        <button
          className="py-1 px-3 border-white my-4 text-white text-center shadow-lg"
          onClick={deleteEntries}
        >
          Delete all entries
        </button>
      </span>
    </div>
  );
};

export default TodoDelete;
