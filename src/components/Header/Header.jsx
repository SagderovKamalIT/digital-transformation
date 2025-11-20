import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import styles from "./Header.module.scss";
import Button from "./HeaderButton/HeaderButton";

const Header = () => {

  return (
    <>

    <div className={styles.wrap} >

      <div className={styles.header__container} >

    <Logo />
    <Nav />
    <Button />
      </div>
  
    </div>
    
    </>
  )

}

export default Header;