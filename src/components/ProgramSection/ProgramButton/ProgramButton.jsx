import React from "react";
import "../../../styles/_fonts.scss";
import styles from "./ProgramButton.module.scss";

const ProgramButton = ({ children, className = "" }) => {
  return (
    <div className={`${styles.button} ${className}`}>
      <div className={styles.buttonContent}>{children}</div>
    </div>
  );
};

export default ProgramButton;
