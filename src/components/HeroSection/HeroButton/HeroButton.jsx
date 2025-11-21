import React, { useState, useCallback } from "react";
import styles from "./HeroButton.module.scss";


const Button = ({ label = "Нажать", onToggle, className = "", size = "small", bg = "default" }) => {
  const [active, setActive] = useState(false);

  const handleToggle = useCallback(() => {
    setActive(prev => {
      const next = !prev;
      if (typeof onToggle === "function") onToggle(next);
      return next;
    });
  }, [onToggle]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle();
    }
  };



  return (
    <div
      className={`${styles.button} ${active ? styles.active : ""} ${styles[size]} ${className}`}
      role="button"
      tabIndex={0}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      aria-pressed={active}
    >
      <BGComponent className={styles.svg} />
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default Button;
