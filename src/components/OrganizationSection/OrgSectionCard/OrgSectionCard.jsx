import React from "react";
import styles from "./OrgSectionCard.module.scss";

const OrgCard = ({ children, className = "" }) => {
  return (
    <div className={`${styles.card} ${className}`}>
 
      <div className={styles.cardContent}>{children}</div>
    </div>
  );
};

export default OrgCard;
