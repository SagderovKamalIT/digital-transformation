import styles from "./NavItem.module.scss";


const NavItem = ({ text, id }) => {
  return (
    <li className={styles.nav__element}>
      <a className={styles.nav__element} href={`#${id}`}>{text}</a>
    </li>
  );
};


export default NavItem;