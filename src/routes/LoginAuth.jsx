import React from "react";
import { Navigate } from "react-router-dom";
import { getLocalItem } from "utils/functions";

export default function LoginAuth({ children }) {
  const isAuth = getLocalItem("token");
  if (isAuth) {
    return <Navigate to={"/"} />;
  }
  return <div>{children}</div>;
}
