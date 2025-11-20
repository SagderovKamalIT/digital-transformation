import React from "react";
import styles from "./TextBlock.module.scss";

const TextBlock = ({ paragraphs = [], className = "" }) => {
  return (
    <div className={`${styles.textContainer} ${className}`}>
      {paragraphs.map((text, index) => (
        <p key={index} className={styles.textP}>
          {text}
        </p>
      ))}
    </div>
  );
};

export default TextBlock;
