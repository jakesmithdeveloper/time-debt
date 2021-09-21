import React, { useState } from "react";
import { Form, Field } from "react-final-form";

import TimeOptionPicker from "./TimeOptionPicker";
import DebtTimeField from "./DebtTimeFields";

const AddDebtForm = ({ handleSubmit }) => {
  const timeOptions = ["minutes", "hours"];

  const [timeOption, setTimeOption] = useState(timeOptions[0]);

  const handleTimeOptionClicked = (e) => {
    e.preventDefault();
    setTimeOption(timeOptions[e.target.id]);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      timeOption={timeOption}
      render={({ handleSubmit, values }) => (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm md:max-w-lg  flex flex-col"
        >
          <Field name="debtName" placeholder="debt name">
            {({ input, placeholder }) => (
              <div className="flex justify-evenly mb-4 mt-4">
                <label>Debt Name</label>
                <input className="" {...input} placeholder={placeholder} />
              </div>
            )}
          </Field>
          <div className="flex justify-evenly mb-4">
            <DebtTimeField timeOption={timeOption} values={values} />
            <TimeOptionPicker
              currentOption={timeOption}
              handleClick={handleTimeOptionClicked}
            />
          </div>
          <div>
            <label>Task</label>
            <Field name="debtTask" type="checkbox" component="input" />
          </div>
          <button type="submit">add</button>
        </form>
      )}
    ></Form>
  );
};

export default AddDebtForm;
