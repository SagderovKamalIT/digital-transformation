import Title from "../Title/Title";
import styles from "./PartnersSection.module.scss";

import C1 from "../../assets/images/PartnersSection/C1.png";
import Linux from "../../assets/images/PartnersSection/astra_linuxpng.png";
import Pognali from "../../assets/images/PartnersSection/pognali.png";
import SM from "../../assets/images/PartnersSection/sm.png";
import travelline from "../../assets/images/PartnersSection/travelline.png";

const PartnersSection = () => {
  const partners1 = [
    { src: C1, alt: "C1", className: styles.partner__img },

     { src: travelline, alt: "Travelline", className: styles.specialLogo2 },

      { src: Linux, alt: "Linux", className: styles.partner__img },
    { src: Pognali, alt: "Pognali", className: styles.partner__img },
    { src: SM, alt: "SM", className: styles.specialLogo3 },
  ];

  


  return (
    <div className={styles.partners}>
      <div className={styles.section__wrap}>
        <div className={styles.partners__container}>
          <Title className={styles.section__containerTitle} >ПАРТНЕРЫ КОНФЕРЕНЦИИ</Title>
          <ul className={styles.partners__list}>
            {[partners1].map((row, rowIndex) => (
              <li key={rowIndex} className={styles.partners__item}>
                {row.map((logo, index) => (
                  <img
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    className={logo.className}
                  />
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
