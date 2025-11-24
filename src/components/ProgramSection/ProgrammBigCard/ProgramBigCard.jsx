import React from "react";
import styles from "./ProgramBigCard.module.scss";

const ProgramBigCard = ({ children, className = "" }) => {
  return (
    <div className={`${styles.card} ${className}`}>
     
      <div className={styles.cardContent}>
        {children}
      </div>
    </div>
  );
};

export default ProgramBigCard;
