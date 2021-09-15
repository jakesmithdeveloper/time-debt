import React, { useState } from "react";

import AddDebtForm from "./AddDebtForm";
import Debt from "./Debt";

const App = () => {
  const [debts, setDebts] = useState([]);

  const renderDebts = debts.map((debt) => {
    return <Debt name={debt} key={debt} />;
  });

  const addDebt = (values, form) => {
    form.reset();
    setDebts([...debts, values.debtName]);
  };

  return (
    <div>
      <h1>Time Debt</h1>
      {renderDebts}
      <AddDebtForm handleSubmit={addDebt} />
    </div>
  );
};

export default App;
