import styles from "./HeroInfoBig.module.scss"

const HeroInfoBig = ({children}) => {
  return (

  <div className={styles.heroCardBig} >

        <h3 className={styles.heroContentBig} >

          {children}

        </h3>

      </div>

  )
}

export default HeroInfoBig;