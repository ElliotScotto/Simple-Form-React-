import { useState } from "react";

const StepTwo = (props) => {
  return (
    <>
      <header>Results</header>
      <form className="stepTwo-style">
        <div className="title">Name : {props.name}</div>
        <div className="title">Email : {props.email}</div>
        <div className="title">Password : {props.password}</div>
      </form>
      <div
        className="editBtn"
        type="submit"
        name="edit"
        if
        onSubmit={(event) => {
          event.preventDefault();
          //afficher le 1er formulaire avec infos persistantes.
        }}
      >
        <p>Edit your information</p>
      </div>
    </>
  );
};
export default StepTwo;
