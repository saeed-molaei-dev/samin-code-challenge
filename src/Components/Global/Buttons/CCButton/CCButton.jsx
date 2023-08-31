import React from "react";
import "./CCButton.scss";
function CCButton({ text, disabled, click, testId }) {
  return (
    <button
      className={disabled ? "cc-button osh-button--disabled" : "cc-button"}
      disabled={disabled}
      onClick={click}
    >
      {text}
    </button>
  );
}

export default CCButton;
