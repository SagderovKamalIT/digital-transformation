import styles from "./DirectionSection.module.scss";
import Title from "../Title/Title";
import DirectionSectionCard from "./DirectionSectionCard/DirectionSectionCard";
import DirectionSectionSmallCard from "./DirectionSectionSmallCard/DirectionSectionSmallCard";

import topicItem from "../../assets/images/DirectionSection/topicItem.svg";

const DirectionsSection = () => {
  const data = [
    {
      text: "ЦЕЛЬ КОНФЕРЕНЦИИ",
      paragraph: (
        <>
          Обсуждение вопросов применения цифровых технологий и отечественных
          цифровых продуктовых решений для бизнеса в обеспечение
          технологического лидерства российских компаний, повышения
          эффективности управления бизнес-процессами и наращивания темпов
          экономического развития.
        </>
      ),
    },
    {
      text: "КЛЮЧЕВЫЕ ТЕМЫ КОНФЕРЕНЦИИ",
      paragraph: (
        <div className={styles.topicContaier}>
          <div className={styles.topicItem}>
            <img src={topicItem} alt="иконка" className={styles.topicIcon} />
            Цифровые платформы и экосистемы: тенденции и перспективы развития.
          </div>
          <div className={styles.topicItem}>
            <img src={topicItem} alt="иконка" className={styles.topicIcon} />
            Цифровые продуктовые решения для бизнеса.
          </div>
          <div className={styles.topicItem}>
            <img src={topicItem} alt="иконка" className={styles.topicIcon} />
            Цифровые технологии для управления гостиничным бизнесом.
          </div>
          <div className={styles.topicItem}>
            <img src={topicItem} alt="иконка" className={styles.topicIcon} />
            Цифровые модели и инструменты управления ресторанным бизнесом.
          </div>
          <div className={styles.topicItem}>
            <img src={topicItem} alt="иконка" className={styles.topicIcon} />
            Современные подходы к развитию туристической индустрии в цифровую
            эпоху.
          </div>
          <div className={styles.topicItem}>
            <img src={topicItem} alt="иконка" className={styles.topicIcon} />
            Управление промышленным производством с применением VR и ИИ: новые
            горизонты.
          </div>
        </div>
      ),
    },
    {
      text: "ДЛЯ КОГО",
      paragraph: (
        <>
          Руководители и эксперты из IT-сферы, промышленности, сферы
          гостеприимства и туризма, сферы финансов; <br /> <br />
          Ученые и преподаватели, интересующиеся современными достижениями в
          области применения цифровых технологий для бизнеса; <br />
          <br />
          Молодые ученые (студенты, аспиранты), желающие получить знания от
          опытных практиков и ученых и представить свои идеи и предложения для
          бизнеса.
        </>
      ),
    },
  ];

  return (
    <div className={styles.direction}>
      <div className={styles.direction__shadow}>
        <div className={styles.section__wrap}>
          <div className={styles.direction__container}>
            <Title className={styles.direction__title} >ФОКУСНЫЕ НАПРАВЛЕНЯ КОНФЕРЕНЦИИ</Title>

            <ul className={styles.direction__list}>
              {data.map((item, index) => (
                <li key={index} className={styles.direction__listItem}>
                  <DirectionSectionCard
                    text={item.text}
                    paragraph={item.paragraph}
                  />
                </li>
              ))}
            </ul>

            <div className={styles.direction__cardSmall}>
              <DirectionSectionSmallCard
                text="ТРЕБОВАНИЯ К ПУБЛИКАЦИЯМ"
                underline="Срок подачи 14 ноября"
              />

              <p>Сборник материалов конференции будет размещен в РИНЦ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectionsSection;
