import React from "react";
import styles from "./Text.module.scss"; 

const Text = ({
  children,
  className = "", 
  id,      
}) => {

  return (
    <p id={id} className={`${styles.base}  ${className}`}>
      {children}
    </p>
  );
};

export default Text;
