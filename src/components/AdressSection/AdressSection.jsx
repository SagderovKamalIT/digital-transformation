import Title from "../Title/Title";
import styles from "./AdressSection.module.scss";
import AdressSectionMap from "./AdressSectionMap/AdressSectionMap";

const AdressSection = () => {
  return (
    <div className={styles.adress}>
      <div className={styles.section__wrap}>
        <div className={styles.adress__container}>
          <Title className={styles.adress__title}>АДРЕС</Title>

          <div className={styles.adress__link}>
            <a className={styles.adress__linkText} href="https://yandex.ru/maps/org/rossiyskiy_universitet_druzhby_narodov/1023090723/?ll=37.496162%2C55.652014&z=16.36" target="_blank" rel="noopener noreferrer">
              117198, Москва, ул. Миклухо-Маклая, 6, м. Унивеситет дружбы
              народов

            </a>

            <AdressSectionMap>

            </AdressSectionMap>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdressSection;
