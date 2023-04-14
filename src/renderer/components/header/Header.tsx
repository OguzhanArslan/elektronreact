import { Link } from 'react-router-dom';
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">Home Page</Link>
      <Link to="/analytcs">Analytcs</Link>
    </header>
  );
}

export default Header;
