import React, { useState } from "react";

import InputBlock from "./InputBlock";

import "./LoginPage.scss";

export interface LPProps {
  loginCallback: (login: string, password: string) => void;
}

const LoginPage: React.FC<LPProps> = ({ loginCallback }: LPProps) => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submit = (e: React.FormEvent<HTMLButtonElement>) => {
    if (login && password) {
      e.preventDefault();
      loginCallback(login, password);
    }
  };

  return (
    <div className="login_page">
      <form className="login_page-container">
        <h2 className="login_page-title">Please LogIn</h2>
        <InputBlock
          className="login_page-data"
          label="login"
          value={login}
          placeholder="login"
          callback={setLogin}
        />
        <InputBlock
          className="login_page-data"
          label="password"
          value={password}
          placeholder="password"
          isPassword
          callback={setPassword}
        />
        <button onClick={submit} type="submit" className="login_page-submit">
          LogIn
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
