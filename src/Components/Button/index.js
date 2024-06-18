import React from "react";
import "./styles.css";
function Button({ text, blue, disabled }) {
  return (
    <div>
      <button className={blue ? "btn blue-btn" : "btn"} disabled={disabled}>{text}</button>
    </div>
  );
}

export default Button;
