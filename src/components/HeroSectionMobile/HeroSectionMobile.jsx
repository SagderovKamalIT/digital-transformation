import styles from "./HeroSectionMobile.module.scss";

import HeroSectionNav from "./HeroSectionNav/HeroSectionNav";
import heroTag from "../../assets/images/HeroSection/hero__navTag.png";

const HeroSectionMobile = () => {
  return (
    <div className={styles.hero}>

      <div className={styles.hero__animation} >


      <div className={styles.hero__wrap}>
        <HeroSectionNav />

        <div className={styles.hero__container}>
          <div className={styles.hero__main}>
            <div className={styles.hero__sectionFirst}>
              <p 
                id="about-mobile">
                Международная <br />
                научно-практическая конференция
              </p>

              <h1 className={styles.hero__mainTitle}>
                ЦИФРОВАЯ <br></br>ТРАНСФОРМАЦИЯ БИЗНЕСА
              </h1>

              <p className={styles.hero__sectionFirstP}>
                Организатор - Высшая школа управления РУДН
              </p>
            </div>

            <div className={styles.hero__sectionSecond}>
              <h3>11:00-18:00</h3>

              <div className={styles.hero__sectionContainer}>
                <img src={heroTag} alt="Навигационная иконка" />
                <div className={styles.hero__sectionItems}>
                  <h2
                    className={`${styles.hero__mainTitle} ${styles.hero__sectionTitle}`}
                  >
                    9 ДЕКАБРЯ 2025
                  </h2>

                  <p
                    className={`${styles.hero__mainTitle} ${styles.hero__sectionParagraph}`}
                  >
                    Конференц-зал РУДН (Главный корпус)
                  </p>
                </div>
              </div>

              <div className={styles.hero__sectionText}>
                <p>
                  Конференция посвящена обсуждению тенденций, особенностей и
                  эффективных путей цифровой трансформации в компаниях различных
                  сфер экономики
                </p>
              </div>
            </div>

            <a
              className={styles.hero__mainButton}
              href="https://forms.yandex.ru/u/690074fd49363922ca9376fd"
              target="_blank"
              rel="noopener noreferrer"
            >
              ЗАРЕГИСТРИРОВАТЬСЯ
            </a>
          </div>

          <div className={styles.hero__btn}></div>
        </div>
      </div>
        </div>

      </div>
  );
};

export default HeroSectionMobile;
