import React from "react";
import { Field } from "react-final-form";

const TimeField = ({ name, placeholder, label, disabled }) => {
  return (
    <Field name={name} placeholder={placeholder} key={name}>
      {({ input, placeholder }) => (
        <div className="flex">
          <label className="mr-2">{label}</label>
          <input
            className={`${
              disabled ? "text-red-500 bg-gray-600 select-none" : ""
            }`}
            disabled={disabled}
            {...input}
            placeholder={placeholder}
          />
        </div>
      )}
    </Field>
  );
};

export default TimeField;
