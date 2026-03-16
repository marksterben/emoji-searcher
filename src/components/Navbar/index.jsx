import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.navTitle}>Emoji Searcher</h1>
    </nav>
  );
};

export default Navbar;