import React, { useState, useEffect } from "react";
import styles from "./LinksSection.module.scss";
import Title from "../Title/Title";

import tg from "../../assets/images/LinksSection/tg.svg";
import vk from "../../assets/images/LinksSection/vk.svg";
import shareLink from "../../assets/images/LinksSection/link.svg";

import tgMobile from "../../assets/images/LinksSection/tg-mobile.svg";
import vkMobile from "../../assets/images/LinksSection/vk-mobile.svg";
import shareLinkMobile from "../../assets/images/LinksSection/link-mobile.svg";

const LinksSection = () => {
  const currentUrl = "https://dt.rudn.ru/";

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 540);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 540);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    {
      href: `https://vk.com/share.php?url=${encodeURIComponent(currentUrl)}`,
      src: isMobile ? vkMobile : vk,
      alt: "VK",
    },
    {
      href: `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
        "Смотрите этот сайт!"
      )}`,
      src: isMobile ? tgMobile : tg,
      alt: "Telegram",
    },
    {
      href: currentUrl,
      src: isMobile ? shareLinkMobile : shareLink,
      alt: "Скопировать ссылку",
    },
  ];

  return (
    <div className={styles.links}>
      <div className={styles.section__wrap}>
        <div className={styles.links__container}>
          <Title className={styles.links__title}>ПОДЕЛИТЬСЯ</Title>
          <ul className={styles.links__list}>
            {links.map((item, index) => (
              <li key={index}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={styles.links__itemImg}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LinksSection;

