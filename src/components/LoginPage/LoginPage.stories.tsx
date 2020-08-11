import React from "react";

import LoginPage from "./index";

export default {
  title: "Login Page",
  component: LoginPage,
};

export const Default: React.FC = () => {
  const loginCallback = (login: string, password: string) => {
    console.log("loginCallback:void -> password", password);
    console.log("loginCallback:void -> login", login);
  };
  return <LoginPage loginCallback={loginCallback} />;
};
