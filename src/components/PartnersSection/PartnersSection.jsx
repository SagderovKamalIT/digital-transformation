import Title from "../Title/Title";
import styles from "./PartnersSection.module.scss";

import sberPng from "../../assets/images/PartnersSection/sber.png";
import yandex from "../../assets/images/PartnersSection/yandex.png";
import ozonTech from "../../assets/images/PartnersSection/ozon_tech.png";
import C1 from "../../assets/images/PartnersSection/C1.png";
import X5 from "../../assets/images/PartnersSection/X5.png";
import WB from "../../assets/images/PartnersSection/wb.png";
import Linux from "../../assets/images/PartnersSection/astra_linuxpng.png";
import Pognali from "../../assets/images/PartnersSection/pognali.png";
import SM from "../../assets/images/PartnersSection/sm.png";
import restorants from "../../assets/images/PartnersSection/restorants.png";
import analytic from "../../assets/images/PartnersSection/analytic_ws.png";
import travelline from "../../assets/images/PartnersSection/travelline.png";

const PartnersSection = () => {
  const partners1 = [
    { src: sberPng, alt: "Сбер", className: styles.partner__img },
    { src: yandex, alt: "Яндекс", className: styles.specialLogo },
    { src: ozonTech, alt: "Ozon Tech", className: styles.partner__img },
    { src: C1, alt: "C1", className: styles.partner__img },
    { src: X5, alt: "X5", className: styles.partner__img },
  ];

  const partners2 = [
    { src: WB, alt: "WB", className: styles.partner__img },
    { src: Linux, alt: "Linux", className: styles.partner__img },
    { src: Pognali, alt: "Pognali", className: styles.partner__img },
    { src: SM, alt: "SM", className: styles.specialLogo3 },
  ];

  const partners3 = [
    { src: restorants, alt: "Restorants", className: styles.partner__img },
    { src: analytic, alt: "Analytic", className: styles.partner__img },
    { src: travelline, alt: "Travelline", className: styles.specialLogo2 },
  ];

  return (
    <div className={styles.partners}>
      <div className={styles.section__wrap}>
        <div className={styles.partners__container}>
          <Title>ПАРТНЕРЫ КОНФЕРЕНЦИИ</Title>
          <ul className={styles.partners__list}>
            {[partners1, partners2, partners3].map((row, rowIndex) => (
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
