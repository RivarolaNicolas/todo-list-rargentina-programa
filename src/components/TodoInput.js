import React from 'react';

const TodoInput = (props) => {
  const { handleInputChange, handleSubmit } = props;

  return (
    <span className="flex flex-col justify-center items-center ">
      <p className="font-yellowtail text-7xl text-opacity-60 text-black py-2 mb-5">Todo List</p>
      <form onSubmit={handleSubmit} className="py-2 items-center w-3/6 justify-center">
        <input
          onChange={handleInputChange}
          name=""
          className="flex-grow py-1 w-11/12 shadow-lg mb-4 "
          type="text"
          placeholder="What do you wanna do?"
        ></input>
        <button className="py-1 px-3 mb-4 border-white my-1 text-white text-center shadow-lg">
          Add
        </button>
      </form>
    </span>
  );
};

export default TodoInput;
