import styles from "./ProgramSpeakersTitle.module.scss";

const ProgramSpeakersTitle = ({ children }) => {
  return <h4 className={styles.speakers__title}>{children}</h4>;
};

export default ProgramSpeakersTitle;

