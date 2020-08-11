import React, { useState, useEffect, createRef } from "react";

import LoginPage from "./components/LoginPage";
import ChatContainer from "./components/ChatContainer";

import { SERVER_ADDRESS } from "./constants";

import "./App.scss";

interface UserData {
  name: string;
  avatar: string;
}

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData>();
  const [message, setMessage] = React.useState<string>("");
  const popUpRef = createRef<HTMLDivElement>();

  const serverErrorMessage = "Server error!";
  const authenticationErrorMessage = "Wrong Login or Password!";

  const getUserData = async (login: string) => {
    try {
      const response = await fetch(`${SERVER_ADDRESS}/users?_email=${login}`);
      const data: UserData[] = await response.json();
      if (data) {
        setUserData({ name: data[0].name, avatar: data[0].avatar });
      } else {
        setMessage(serverErrorMessage);
      }
    } catch (error) {
      setMessage(serverErrorMessage);
    }
  };

  const loginCallback = async (login: string, password: string) => {
    try {
      const response = await fetch(`${SERVER_ADDRESS}/login`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: login, password }),
      });
      const result = await response.json();
      if (result.accessToken) {
        setIsAuthenticated(true);
        getUserData(login);
      } else {
        setMessage(authenticationErrorMessage);
      }
    } catch (error) {
      setMessage(serverErrorMessage);
    }
  };

  useEffect(() => {
    if (message !== "") {
      popUpRef.current?.classList.remove("pop_up--hidden");
      setTimeout(() => {
        popUpRef.current?.classList.add("pop_up--hidden");
        setTimeout(() => {
          setMessage("");
        }, 500);
      }, 1500);
    }
  }, [message, popUpRef]);

  if (isAuthenticated && userData) {
    return (
      <ChatContainer
        currentUserName={userData.name}
        userAvatar={userData.avatar}
      />
    );
  }
  return (
    <div className="App">
      <LoginPage loginCallback={loginCallback} />;
      <div className="pop_up pop_up--hidden" ref={popUpRef}>
        <div className="pop_up-message">{message}</div>
      </div>
    </div>
  );
};

export default App;
