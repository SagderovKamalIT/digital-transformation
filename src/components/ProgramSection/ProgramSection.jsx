import React from "react";
import styles from "./ProgramSection.module.scss";
import ProgramSmallCard from "./ProgramSmallCard/ProgramSmallCard";
import ProgramButton from "./ProgramButton/ProgramButton";
import ProgramBigCard from "./ProgrammBigCard/ProgramBigCard";
import ProgramSpeakersCard from "./ProgramSpeakers/ProgramSpeakersCard/ProgramSpeakersCard";
import ProgramSpeakers, {
  speakersData,
  speakersDataPart2,
} from "./ProgramSpeakers/ProgramSpeakers";
import Title from "../Title/Title";

const ProgramSection = () => {
  return (
    <div className={styles.program}>
      <div className={styles.section__wrap}>
        <div id="program" className={styles.program__container}>
          <Title className={styles.program__title}>ПРОГРАММА КОНФЕРЕНЦИИ</Title>

          <div className={styles.program__sections}>
            <div className={styles.program__section}>
              <ProgramSmallCard className="myCustomClass">
                <h3 className={styles.program__sectionTitle}>11:00-12:00</h3>

                <ProgramButton>РЕГИСТРАЦИЯ</ProgramButton>
                <span className={styles.program__span}></span>
              </ProgramSmallCard>

              <ProgramBigCard>
                <h3 className={styles.program__sectionTitle}>12:00-13:00</h3>

                <div className={styles.program__sectionContainer}>
                  <ProgramButton>ПАНЕЛЬНАЯ ДИСКУССИЯ</ProgramButton>

                  <p>"Цифровые технологии для бизнеса"</p>
                </div>

                <span className={styles.program__span}></span>

                <div className={styles.program__container}>
                  <h3 className={styles.program__sectionTitle}>СПИКЕРЫ</h3>

                  <div>
                    <ProgramSpeakers data={speakersData} />
                  </div>
                </div>
              </ProgramBigCard>
            </div>

            <div className={styles.program__sectionPart2}>
              <ProgramBigCard>
                <h3 className={styles.program__sectionTitle}>13:00-14:00</h3>

                <div className={styles.program__sectionContainer}>
                  <ProgramButton>ПАНЕЛЬНАЯ ДИСКУССИЯ</ProgramButton>

                  <p>"Цифровые технологии в сфере индустрии гостеприимства"</p>
                </div>

                <span className={styles.program__span}></span>

                <div className={styles.program__container}>
                  <h3 className={styles.program__sectionTitle}>СПИКЕРЫ</h3>

                  <div>
                    <ProgramSpeakers data={speakersDataPart2} />
                  </div>
                </div>
              </ProgramBigCard>
            </div>

            <div className={styles.program__sectionSmall}>
              <ProgramSmallCard className="myCustomClass">
                <h3 className={styles.program__sectionTitle}>14:00-15:00</h3>

                <ProgramButton>КОФЕ-БРЕЙК</ProgramButton>
                <span className={styles.program__span}></span>
              </ProgramSmallCard>

              <ProgramSmallCard className="myCustomClass">
                <h3 className={styles.program__sectionTitle}>15:00-18:00</h3>

                <ProgramButton>РАБОТА ПО СЕКЦИЯМ</ProgramButton>
                <span className={styles.program__span}></span>
              </ProgramSmallCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramSection;
