import React from "react";
import AuthForm from "./AuthForm";

const Register = () => {
  console.log("Register");
  return (
    <AuthForm
      formName="Регистрация"
      buttonText="Зарегистрироваться"
      invitationText="Уже зарегистрированы?"
    />
  );
};

export default Register;
