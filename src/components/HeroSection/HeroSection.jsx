import Button from "./HeroButton/HeroButton";
import TextBlock from "./HeroButton/TextBlock/TextBlock";
import styles from "./HeroSection.module.scss";
import Text from "./Text/Text";

const HeroSection = () => {
  return (

    <div className={styles.hero} >

    <div className={styles.section__wrap}>
      <div className={styles.hero__container}>
        <div className={styles.hero__info}>
          <Button className={styles.large} label="9 декабря 2025" />
          <Button
            className={styles.small}
            label="Конференц-зал экономического факультета РУДН"
            bg="wide"
          />
        </div>

        <div className={styles.hero__main}>
          <Text
            className={styles.hero__mainParagraph}
            children="Международная научно-практическая конференция"
          ></Text>

          <div className={styles.hero__mainContainer}>
            <h1 className={styles.hero__mainTitle}>
              ЦИФРОВАЯ <br></br>ТРАНСФОРМАЦИЯ БИЗНЕСА
            </h1>

            <Text
              className={styles.hero__mainText}
              children="Организатор - Высшая школа управления РУДН"
            ></Text>

            <a className={styles.hero__mainButton} href="">
              ЗАРЕГИСТРИРОВАТЬСЯ
            </a>
          </div>
        </div>

        <div className={styles.hero__textContainer}>
          <TextBlock
            paragraphs={[
              "В настоящее время одна из основных национальных целей Российской Федерации - цифровая трансформация бизнеса, достижение которой, возможно за счет развития цифровых платформ, программного обеспечения и разработки искусственного интеллекта.",
              "Конференция посвящена обсуждению тенденций, особенностей и эффективных путей цифровой трансформации в компаниях различных сфер экономики.",
            ]}
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
