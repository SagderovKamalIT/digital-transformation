import styles from "./QuestionSectionCard.module.scss";

const QuestionSectionCard = ({ children, className = "" }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.cardContent}>{children}</div>
    </div>
  );
};

export default QuestionSectionCard;
