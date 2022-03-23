import React from "react";
import Styling from "./Form.module.css";

function Form() {
  return (
    <div className={Styling.mainContainer}>
      <div>
        This is not a real online service! You know you need somethiung like
        this in your life to help you realize your deepest dreams. Sign up{" "}
        <em>now</em> to get started
      </div>
      <form className={Styling.formContainer}>
        <label>FIRST NAME</label>
        <input type="text"></input>

        <label>LAST NAME</label>
        <input type="text"></input>

        <label>EMAIL</label>
        <input type="email"></input>

        <label>PHONE NUMBER</label>
        <input type="tel"></input>

        <label>PASSWORD</label>
        <input type="password"></input>

        <label>CONFIRM PASSWORD</label>
        <input type="password"></input>

        <button>Create Account</button>
      </form>
    </div>
  );
}

export default Form;
