import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <span>menuisier</span>

      <div className={styles.navItems}>
        <button>store</button>
        <button>about</button>
      </div>

      <div className={styles.avatar}></div>
    </div>
  );
};

export default Navbar;
