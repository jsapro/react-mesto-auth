import React from "react";
import AuthForm from "./AuthForm";

const Register = (props) => {
  console.log("Register");
  return (
    <AuthForm
      formName="Регистрация"
      buttonText="Зарегистрироваться"
      invitationText="Уже зарегистрированы?"
      {...props}
    />
  );
};

export default Register;
