import React from 'react';

const TodoDelete = (props) => {
  const { setTask } = props;
  const deleteEntries = () => {
    setTask([]);
    localStorage.clear();
  };

  return (
    <div>
      <button className='' onClick={deleteEntries}>Delete all entries</button>
    </div>
  );
};

export default TodoDelete;
