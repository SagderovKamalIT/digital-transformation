import React from "react";
import Title from "../Title/Title";
import SectionsCard from "./SectionsCard/SectionsCard";
import styles from "./SectionsSection.module.scss";

const SectionsSection = () => {
  const sections = [
    '1. Секция "Цифровые технологии в сфере гостеприимства и туризма" (модератор - В.В. Гернеший)',
    '2. Секция "Цифровые технологии в комплаенсе и контроллинге" (модератор - Ю.В. Рагулина)',
    '3. Секция "Цифровые технологии на предприятии" (модератор - В.Ф. Уколов)',
    '4. Молодежная секция: брейншторм (на англ. яз.)',
    '5. Секция для аспирантов (модератор - О.П. Овчинникова)'
  ];

  return (
    <div className={styles.section} >

    <section className={styles.sections}>
      <div className={styles.section__wrap}>
        <div className={styles.sections__container}>
          <Title className={styles.sections__title}>СЕКЦИИ</Title>

          <ul className={styles.sections__list}>
            {sections.map((text, i) => (
              <li key={i} className={styles.sections__listItem}>
               
               
                <SectionsCard className={styles.section__listCard} flipped={i % 2 === 1}>
                  {text}
                </SectionsCard>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    </div>
  );
};

export default SectionsSection;
