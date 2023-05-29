import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const AuthForm = ({
  formName,
  buttonText,
  invitationText,
  onSubmit,
  userData,
  userPassword,
}) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleInputChange = () => {};

  const handleInputSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <section className="auth">
      <h1 className="auth__name">{formName}</h1>
      <form className="auth__form" onSubmit={handleInputSubmit}>
        <input
          className="auth__input auth__input_email"
          type="email"
          placeholder="Email"
          ref={inputRef}
          onChange={handleInputChange}
        />
        <input
          className="auth__input auth__input_password"
          type="password"
          placeholder="Пароль"
          onChange={handleInputChange}
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
