import React from "react";
import styles from "./Text.module.scss"; 

const Text = ({
  children,
  className = "",       
}) => {

  return (
    <p className={`${styles.base}  ${className}`}>
      {children}
    </p>
  );
};

export default Text;
