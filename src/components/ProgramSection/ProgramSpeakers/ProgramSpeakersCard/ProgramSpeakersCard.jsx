import styles from "./ProgramSpeakersCard.module.scss";
import ProgramSpeakersCardImg from "./ProgramSpeakersCardImg/ProgramSpeakersCardImg";

const ProgramSpeakersCard = ({ src, alt, name, children }) => {
  return (
    <div className={styles.speakers__card}>

      <h4 className={styles.speakers__cardName}>{name}</h4>

      <div className={styles.speakers__cardContainer} >
     
      <ProgramSpeakersCardImg src={src} alt={alt} />

  

   
      <div className={styles.speakers__cardText}>
        {Array.isArray(children)
          ? children.map((line, idx) => <p key={idx}>{line}</p>)
          : <p>{children}</p>}
      </div>

      </div>
    </div>
  );
};

export default ProgramSpeakersCard;
