import React from "react";
import { Form, Field } from "react-final-form";

const AddDebtForm = ({ handleSubmit }) => {
  return (
    <Form
      onSubmit={handleSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="debtName" component="input" placeholder="debt name" />
          <button type="submit">add</button>
        </form>
      )}
    ></Form>
    // <form
    //   action="submit"
    //   onSubmit={(e) => {
    //     e.preventDefault();
    //     handleSubmit(userInput);
    //     setUserInput("");
    //   }}
    // >
    //   <input
    //     type="text"
    //     placeholder="debt name"
    //     value={userInput}
    //     onChange={(e) => {
    //       setUserInput(e.target.value);
    //     }}
    //   />
    //   <button>add</button>
    // </form>
  );
};

export default AddDebtForm;
