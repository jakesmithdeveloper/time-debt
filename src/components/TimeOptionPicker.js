import React from "react";
import { Field } from "react-final-form";

const TimeOptionPicker = ({ currentOption, handleClick }) => {
  return (
    <Field name="timeOptionPicker">
      {() => (
        <div className="group inline-block relative">
          <h1 className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
            {currentOption}
          </h1>
          <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
            <li
              className="block select-none hover:bg-gray-400"
              id={0}
              onClick={handleClick}
            >
              Minutes
            </li>
            <li
              className="block select-none hover:bg-gray-400"
              id={1}
              onClick={handleClick}
            >
              Hours
            </li>
          </ul>
        </div>
      )}
    </Field>
  );
};
export default TimeOptionPicker;
