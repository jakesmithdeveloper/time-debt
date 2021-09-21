import React from "react";
import TimeField from "./TimeField";

const DebtTimeField = ({ timeOption, values }) => {
  return timeOption === "minutes" ? (
    <TimeField
      name="minutes"
      placeholder="minutes"
      label="minutes"
      disabled={values.debtTask}
    />
  ) : (
    <div className="flex">
      <TimeField
        name="hours"
        placeholder="hours"
        label="hours"
        disabled={values.debtTask}
      />
      <TimeField
        name="minutes"
        placeholder="minutes"
        label="minutes"
        disabled={values.debtTask}
      />
    </div>
  );
};

export default DebtTimeField;
