import React from "react";
import styles from "./Button.module.css";
import cn from "classnames";

function Button(props) {
  const { children, onClick, className } = props;
  return (
    <button className={cn(className, styles.button)} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
