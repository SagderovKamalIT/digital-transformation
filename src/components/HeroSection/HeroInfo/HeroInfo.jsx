import styles from "./HeroInfo.module.scss"

const HeroInfo = ({children}) => {
  return (


      <div className={styles.heroCard} >

      <h3 className={styles.heroContent}>

        {children}
        
      </h3>

      
        
    </div>

  )
}
export default HeroInfo;