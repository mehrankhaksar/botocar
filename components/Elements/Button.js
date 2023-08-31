import React from "react";

function Button({ styles, type, onClick, value }) {
  return (
    <button className={styles} type={type} onClick={onClick}>
      {value}
    </button>
  );
}

export default Button;
