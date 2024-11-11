import React from "react";

const Button = ({ variant, children, onClick }) => {
  const styles = {
    primary: { backgroundColor: "blue", color: "white" },
    secondary: { backgroundColor: "gray", color: "black" },
  };

  const hasArrow =
    variant === "icon-arrow-primary" || variant === "icon-arrow-secondary";
  const style = variant?.includes("primary")
    ? styles?.primary
    : styles?.secondary;

  return (
    <button style={style} onClick={onClick}>
      {hasArrow && <span>&rarr;</span>}
      {children}
    </button>
  );
};

export default Button;
