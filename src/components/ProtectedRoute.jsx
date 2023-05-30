import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRouteElement = ({element: Component, ...props}) => {
  // console.log("ProtectedRouteElement");
  return (props.loggedIn ? <Component {...props} /> : <Navigate to="/sign-in" replace /> );
};

export default ProtectedRouteElement;
