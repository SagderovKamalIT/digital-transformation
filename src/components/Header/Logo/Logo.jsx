import styles from "./Logo.module.scss";
import logo from "../../../assets/images/rund-logo.png";

const Logo = () => {
  return (
    <>
      <a
        className={styles.header__logo}
        href="https://www.rudn.ru/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={logo} alt="Логотип РУДН" />
      </a>
    </>
  );
};
export default Logo;
