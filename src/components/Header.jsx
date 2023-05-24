import React from "react";
import logo from "../images/header-logo.svg";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  let location = useLocation();
  console.log(location.pathname)
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="лого Mesto" />
      {location.pathname === "/sign-up" && (<NavLink to="/sign-in" className="header__link">Войти</NavLink>)}
      {location.pathname === "/sign-in" && (<NavLink to="/sign-up" className="header__link">Регистрация</NavLink>)}
    </header>
  );
}
