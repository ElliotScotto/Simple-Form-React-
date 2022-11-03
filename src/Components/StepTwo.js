import { useState } from "react";

const StepTwo = (props) => {
  return (
    <>
      <header>Results</header>
      <form className="stepTwo-style">
        <div className="title">Name : {props.setName}</div>
        <div className="title">Email : {props.setEmail}</div>
        <div className="title">Password : {props.setPassword}</div>
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
