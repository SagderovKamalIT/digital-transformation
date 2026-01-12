import Title from "../Title/Title";
import styles from "./AdressSection.module.scss";
import AdressSectionMap from "./AdressSectionMap/AdressSectionMap";

const AdressSection = () => {
  return (
    <div className={styles.adress}>
      <div className={styles.section__wrap}>
        <div className={styles.adress__container}>
          <Title className={styles.adress__title}>АДРЕС</Title>

       

            <AdressSectionMap>

            </AdressSectionMap>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdressSection;
