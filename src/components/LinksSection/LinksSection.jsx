import styles from "./LinksSection.module.scss";
import Title from "../Title/Title";

import tg from "../../assets/images/LinksSection/tg.svg";
import vk from "../../assets/images/LinksSection/vk.svg";
import shareLink from "../../assets/images/LinksSection/link.svg";

const LinksSection = () => {
  const link = [
    { src: vk, alt: "VK", className: styles.links__img },
    { src: tg, alt: "tg", className: styles.links__img },
    { src: shareLink, alt: "link", className: styles.links__img },
  ];
  return (
    <div className={styles.links}>
      <div className={styles.section__wrap}>
        <div className={styles.links__container}>
          <Title className={styles.links__title}>ПОДЕЛИТЬСЯ</Title>

          <ul className={styles.links__list} >
            {link.map((item, itemIndex) => (
              <li key={itemIndex}>
                <img src={item.src} alt={item.alt} className={styles.links__itemImg} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LinksSection;
