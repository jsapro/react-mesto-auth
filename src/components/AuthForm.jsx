import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const AuthForm = ({ formName, buttonText, invitationText }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <section className="auth">
      <h1 className="auth__name">{formName}</h1>
      <form className="auth__form">
        <input
          className="auth__input auth__input_email"
          type="email"
          placeholder="Email"
          ref={inputRef}
        />
        <input
          className="auth__input auth__input_password"
          type="password"
          placeholder="Пароль"
        />
        <button className="auth__button" type="submit">
          {buttonText || ""}
        </button>
      </form>
      <div className="auth__invitation-wrapper">
        <p className="auth__invitation-text">{invitationText}</p>
        <Link className="auth__invitation-link" to="/sign-in">
          {invitationText ? "Войти" : ""}
        </Link>
      </div>
    </section>
  );
};

export default AuthForm;
