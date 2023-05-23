import React from "react";

const Register = () => {
  console.log("Register");
  return (
    <section className="auth">
          <h1 className="auth__name">Регистрация</h1>
          <form className="auth__form">
              <input className="auth__input auth__input_email" type="email" placeholder="Email" />
              <input className="auth__input auth__input_password" type="password" placeholder="Пароль" />
          <button className="auth__button" type="submit">Зарегистрироваться</button>
          </form>
          <p className="auth__invitation">Уже зарегистрированы? Войти</p>
    </section>
  );
};

export default Register;
