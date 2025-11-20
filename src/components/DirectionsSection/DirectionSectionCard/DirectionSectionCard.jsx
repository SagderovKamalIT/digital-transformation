import styles from "./DirectionSectionCard.module.scss"

const DirectionSectionCard = ({ text, paragraph }) => {

  return (

    <div className={styles.card} >

      
      <h4 className={styles.card__title} >
         {text}
      </h4>

      <p className={styles.card__paragraph} >
        {paragraph}
      </p>
    </div>

  )
}

export default DirectionSectionCard;