import NavItem from "./NavItem/NavItem";
import styles from "./Nav.module.scss";

const Nav = () => {

  const menu = ['О конференции', 'Программа'];

  return (
    <nav className={styles.nav} >
    <ul>
      {menu.map((item, index) => (
       <NavItem key={index} text={item} />
      ))}
    </ul>
    </nav>

  )
}
export default Nav;