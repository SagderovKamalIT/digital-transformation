import styles from "./QuestionSection.module.scss";
import Title from "../Title/Title";
import QuestionSectionCard from "./QuestionSectionCard/QuestionSectionCard";


const QuestionSection = () => {
  return (
    <div className={styles.question}>
      <div className={styles.section__wrap}>
        <div className={styles.question__container}>
          <Title className={styles.question__title}>ОСТАЛИСЬ ВОПРОСЫ?</Title>

          <QuestionSectionCard>
            <div className={styles.question__containerCard}>
              <p className={styles.question__text}>
                Контактное лицо - <br /> <br />
                <span>Чистяков Денис Игоревич</span>
              </p>

              <a
                href="mailto:chistyakov_di@pfur.ru"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.question__link}
              >
                chistyakov_di@pfur.ru
              </a>
            </div>
          </QuestionSectionCard>
        </div>
      </div>
    </div>
  );
};
export default QuestionSection;
