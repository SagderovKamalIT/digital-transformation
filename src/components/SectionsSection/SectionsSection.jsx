import React from "react";
import Title from "../Title/Title";
import SectionsCard from "./SectionsCard/SectionsCard";
import styles from "./SectionsSection.module.scss";
const SectionsSection = () => {
  const sections = [
    { number: "1", text: <>Цифровые технологии в сфере гостеприимства и туризма <br />(модератор - В.В. Гернеший)</>, link: "#" },
    { number: "2", text: <>Цифровые технологии на предприятии <br />(модератор - А.С. Семенов)</>, link: "https://telemost.yandex.ru/j/5175145689" },
    { number: "3", text: <>Молодежная секция: брейншторм <br />(модератор - Д.И. Чистяков)</>, link: "https://telemost.yandex.ru/j/2812243957" },
    { number: "4", text: <>Цифровые технологии в управлении <br />(модераторы - О.П. Овчинникова,Т.В. Кокуйцева)</>, link: "https://telemost.yandex.ru/j/2812243957" }
  ];

  return (
    <div className={styles.section}>
      <section className={styles.sections}>
        <div className={styles.section__wrap}>
          <div className={styles.sections__container}>
            <Title className={styles.sections__title}>СЕКЦИИ</Title>

            <ul className={styles.sections__list}>
              {sections.map((item, i) => (
                <li key={i} className={styles.sections__listItem}>
                  <SectionsCard className={styles.section__listCard} flipped={i % 2 === 1}>
                    <div className={styles.section__item}>
                      <p className={styles.section__number}>{item.number}</p>

                      <a 
                        href={item.link} 
                        className={styles.section__link}
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {item.text}
                      </a>
                    </div>
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
