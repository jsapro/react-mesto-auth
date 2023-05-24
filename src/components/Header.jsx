import React from "react";
import logo from "../images/header-logo.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="лого Mesto" />
      <NavLink to="/main" className="header__link">Регистрация</NavLink>
    </header>
  );
}
