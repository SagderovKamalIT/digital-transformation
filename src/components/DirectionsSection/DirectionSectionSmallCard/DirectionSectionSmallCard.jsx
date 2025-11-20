import styles from "./DirectionSectionSmallCard.module.scss";

const DirectionSectionSmallCard = ({ text, underline }) => {
  return (
    <div className={styles.card} >
      <h4 className={styles.card__title}>{text}</h4>

      <div className={styles.card__Underline} >

      <p className={styles.card__UnderlineText} >
        {underline}
      </p>

      <button>
        <svg  className={styles.card__UnderlineButton} width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M29.3447 3C43.8945 3.00002 55.6894 14.795 55.6895 29.3447C55.6895 43.8945 43.8945 55.6894 29.3447 55.6895C14.7949 55.6895 3 43.8945 3 29.3447C3.00005 14.795 14.795 3 29.3447 3Z" stroke="#191A4D" stroke-width="6" />
  <path d="M31.3447 17.1729C31.3447 16.0683 30.4493 15.1729 29.3447 15.1729C28.2402 15.1729 27.3447 16.0683 27.3447 17.1729L29.3447 17.1729L31.3447 17.1729ZM27.9305 42.9308C28.7116 43.7118 29.9779 43.7118 30.7589 42.9308L43.4869 30.2029C44.2679 29.4218 44.2679 28.1555 43.4869 27.3744C42.7058 26.5934 41.4395 26.5934 40.6584 27.3744L29.3447 38.6881L18.031 27.3744C17.25 26.5934 15.9836 26.5934 15.2026 27.3744C14.4215 28.1555 14.4215 29.4218 15.2026 30.2029L27.9305 42.9308ZM29.3447 17.1729L27.3447 17.1729L27.3447 41.5166L29.3447 41.5166L31.3447 41.5166L31.3447 17.1729L29.3447 17.1729Z" fill="#191A4D" />
</svg>
      </button>
      </div>


    
    </div>


  );
};

export default DirectionSectionSmallCard;
