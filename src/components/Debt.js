import React from "react";

const Debt = ({ name, hours, minutes }) => {
  return (
    <div>
      <span className="inline-flex">
        <h3>{name}</h3>
        <h4>{`( ${hours}:${minutes < 10 ? `0${minutes}` : minutes} )`}</h4>
      </span>
    </div>
  );
};

export default Debt;
