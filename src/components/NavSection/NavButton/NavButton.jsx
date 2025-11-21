import styles from "./NavButton.module.scss";

const NavButton = ({ children, onClick }) => {
  return (
    <div
      className={styles.navCard}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <div className={styles.navContent}>{children}</div>
    </div>
  );
};

export default NavButton;
