import React from "react";

const Task = ({ name, completed }) => {
  return (
    <div>
      <span className="inline-flex">
        <h3>{name}</h3>
        <input type="checkbox" value={completed} />
      </span>
    </div>
  );
};

export default Task;
