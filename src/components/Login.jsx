import React from "react";
import AuthForm from "./AuthForm";
import InfoTooltip from "./InfoTooltip";
import authSuccessImg from "../images/auth-success.png";
import authFailImg from "../images/auth-fail.png";

const Login = () => {
  console.log("Login");
  return (
    <>
      <AuthForm formName="Вход" buttonText="Войти" />
      {0 && (
        <InfoTooltip img={authSuccessImg}>
          Вы успешно зарегистрировались!
        </InfoTooltip>
      )}
      {1 && (
        <InfoTooltip img={authFailImg}>
          Что-то пошло не так! Попробуйте ещё раз.
        </InfoTooltip>
      )}
    </>
  );
};

export default Login;
