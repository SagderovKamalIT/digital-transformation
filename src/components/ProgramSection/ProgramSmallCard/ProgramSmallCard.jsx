import React from "react";
import styles from "./ProgramSmallCard.module.scss";

const ProgramSmallCard = ({ children, className }) => {
  return (
    <div className={`${styles.card} ${className || ""}`}>
      
      <div className={styles.cardContent}>{children}</div>
    </div>
  );
};

export default ProgramSmallCard;
