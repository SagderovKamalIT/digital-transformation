import styles from "./NavSection.module.scss";

import RUDNLogo from "../../assets/icons/rudn_log.svg";
import Title from "../Title/Title";
import NavButton from "./NavButton/NavButton";

const NavSection = () => {

 const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

  return (
    <div className={styles.nav}>
      <div className={styles.section__wrap}>
        <div className={styles.nav__container}>
          <a
            href="https://www.rudn.ru/"
            target="_blank"
            rel="noopener noreferrer"
  
          >
            <img src={RUDNLogo} alt="RUDN Logo" className={styles.nav__logo} />
          </a>

          <div className={styles.nav__links}>

  


<NavButton onClick={() => scrollToSection("about")}>О конференции</NavButton>
<NavButton onClick={() => scrollToSection("program")}>Программа</NavButton>


          {/* <NavButton href="#about" className={styles.nav__linksBtn} >О конференции</NavButton>

          <NavButton href="#program" className={styles.nav__linksBtn}>Программа</NavButton> */}

          <a className={styles.nav__linksRegistration} href="https://forms.yandex.ru/u/690074fd49363922ca9376fd  " target="_blank" rel="noopener noreferrer">ЗАРЕГИСТРИРОВАТЬСЯ</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavSection;
