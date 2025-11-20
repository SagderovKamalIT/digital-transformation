import styles from "./NavItem.module.scss";


const NavItem = ({ text }) => {
  return (

  <li className={styles.nav__element} >
    {text}
  </li>
  )
  
};

export default NavItem;