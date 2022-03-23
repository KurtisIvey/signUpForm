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
        <div className={Styling.inputRow}>
          <div className={Styling.input}>
            <label className={Styling.label} for="firstName">
              FIRST NAME
            </label>
            <input
              classname={Styling.label}
              id="firstName"
              name="firstName"
              type="text"
            ></input>
          </div>

          <div className={Styling.input}>
            <label className={Styling.label} for="lastName">
              LAST NAME
            </label>
            <input id="lastName" name="lastName" type="text"></input>
          </div>
        </div>
        <div className={Styling.inputRow}>
          <div className={Styling.input}>
            <label className={Styling.label} for="email">
              EMAIL
            </label>
            <input id="email" name="email" type="email"></input>
          </div>

          <div className={Styling.input}>
            <label className={Styling.label} for="phoneNumber">
              PHONE NUMBER
            </label>
            <input id="phoneNumber" name="phoneNumber" type="tel"></input>
          </div>
        </div>
        <div className={Styling.inputRow}>
          <div className={Styling.input}>
            <label className={Styling.label} for="password">
              PASSWORD
            </label>
            <input id="password" name="password" type="password"></input>
          </div>
          <div className={Styling.input}>
            <label className={Styling.label} for="confirmPassword">
              CONFIRM PASSWORD
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
            ></input>
          </div>
        </div>

        <button>Create Account</button>
      </form>
    </div>
  );
}

export default Form;
