import React, { useState } from "react";

import AddDebtForm from "./AddDebtForm";
import Debt from "./Debt";
import Task from "./Task";

const App = () => {
  const [debts, setDebts] = useState([]);
  const [tasks, setTasks] = useState([]);

  const renderDebts = debts.map((debt) => {
    return (
      <Debt
        name={debt.name}
        hours={debt.hours}
        minutes={debt.minutes}
        key={debt.name}
      />
    );
  });

  const renderTasks = tasks.map((task) => {
    return <Task name={task.name} completed={task.time} key={task.name} />;
  });

  const addDebt = (values, form) => {
    form.reset();

    if (values.debtTask) {
      setTasks([...tasks, { name: values.debtName, completed: false }]);
    } else {
      let time = {
        minutes: values.minutes ? values.minutes : 0,
        hours: values.hours ? values.hours : 0,
      };
      setDebts([...debts, { ...time, name: values.debtName }]);
    }
  };

  return (
    <div className="w-full flex flex-col items-center ">
      <h1>Time Debt</h1>
      {renderTasks}
      {renderDebts}
      <AddDebtForm handleSubmit={addDebt} />
    </div>
  );
};

export default App;
