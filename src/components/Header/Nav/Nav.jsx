import NavItem from "./NavItem/NavItem";
import styles from "./Nav.module.scss";

const Nav = () => {

 const menu = [
  { text: "О конференции", id: "about" },
  { text: "Программа", id: "program" }
];

  return (
    <nav className={styles.nav} >
   <ul>
  {menu.map((item, index) => (
    <NavItem key={index} text={item.text} id={item.id} />
  ))}
</ul>

    </nav>

  )
}
export default Nav;