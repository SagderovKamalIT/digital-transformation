import React from "react";
import styles from "./SectionsCard.module.scss";

const SectionsCard = ({ children, className, flipped = false }) => {
  return (
    <div className={`${styles.card} ${className || ""} ${flipped ? styles.flipped : ""}`}>
      {children}
    </div>
  );
};

export default SectionsCard;
