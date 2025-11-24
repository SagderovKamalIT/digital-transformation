import styles from "./Logo.module.scss";
import logoDesktop from "../../../assets/images/rund-logo.png";
import logoTablet from "../../../assets/images/rudn-logo_tablet.png";

const Logo = () => {
  return (
    <a
      className={styles.header__logo}
      href="https://www.rudn.ru/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <picture>
        <source srcSet={logoTablet} media="(max-width: 960px)" />
        <img src={logoDesktop} alt="Логотип РУДН" />
      </picture>
    </a>
  );
};

export default Logo;
