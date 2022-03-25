import React from "react";
import Styling from "./Form.module.css";

function Form(props) {
  return (
    <div className={Styling.mainContainer}>
      <div className={Styling.serviceMessage}>
        This is not a real online service! You know you need something like this
        in your life to help you realize your deepest dreams.
        <br /> Sign up <em>now</em> to get started
        <br />
        <br /> You <em>know</em> you want to!
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.checkPassword(e);
        }}
        className={Styling.formContainer}
      >
        <div className={Styling.letsDoThis}>LET'S DO THIS!</div>
        <div className={Styling.inputRow}>
          <div className={Styling.inputContainer}>
            <label className={Styling.label} htmlFor="firstName">
              FIRST NAME
            </label>
            <input
              placeholder="John"
              required
              className={Styling.input}
              id="firstName"
              name="firstName"
              type="text"
            ></input>
          </div>

          <div className={Styling.inputContainer}>
            <label className={Styling.label} htmlFor="lastName">
              LAST NAME
            </label>
            <input
              placeholder="Doe"
              required
              className={Styling.input}
              id="lastName"
              name="lastName"
              type="text"
            ></input>
          </div>
        </div>
        <div className={Styling.inputRow}>
          <div className={Styling.inputContainer}>
            <label className={Styling.label} htmlFor="email">
              EMAIL
            </label>
            <input
              placeholder="realEmail@gmail.com"
              required
              className={Styling.input}
              id="email"
              name="email"
              type="email"
            ></input>
          </div>

          <div className={Styling.inputContainer}>
            <label className={Styling.label} htmlFor="phoneNumber">
              PHONE NUMBER
            </label>
            <input
              placeholder="123-123-1234"
              required
              className={Styling.input}
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
            ></input>
          </div>
        </div>
        <div className={Styling.inputRow}>
          <div className={Styling.inputContainer}>
            <label className={Styling.label} htmlFor="password">
              PASSWORD
            </label>
            <input
              onChange={(e) => props.handleChange(e)}
              maxLength="12"
              required
              className={Styling.input}
              id="password"
              name="password"
              type="password"
            ></input>
            <div className={Styling.passwordMessage} id="passwordMessage"></div>
            <div className={Styling.passwordMark} id="passwordMark"></div>
          </div>
          <div className={Styling.inputContainer}>
            <label className={Styling.label} htmlFor="confirmPassword">
              CONFIRM PASSWORD
            </label>
            <input
              onChange={(e) => props.handleChange(e)}
              maxLength="12"
              required
              className={Styling.input}
              id="confirmPassword"
              name="confirmPassword"
              type="password"
            ></input>
            <div
              className={Styling.passwordMessage}
              id="confirmPasswordMessage"
            ></div>
            <div
              className={Styling.passwordMark}
              id="confirmPasswordMark"
            ></div>
          </div>
        </div>
        <div className={Styling.bottomContainer}>
          <button className={Styling.createAccountBtn}>Create Account</button>
          <div className={Styling.haveAnAccount}>
            Already have an account? <a href="#">Log in</a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
