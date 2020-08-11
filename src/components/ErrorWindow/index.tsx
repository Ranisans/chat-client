import React from "react";
import ReactDom from "react-dom";

import "./ErrorWindow.scss";

const ErrorWindow: React.FC = () => {
  const errorElement = document.querySelector("#root");
  if (errorElement) {
    return ReactDom.createPortal(
      <>
        <div className="error_block" />
        <div className="error_block-message">Something Went Wrong!</div>
      </>,
      errorElement
    );
  }
  return null;
};

export default ErrorWindow;
