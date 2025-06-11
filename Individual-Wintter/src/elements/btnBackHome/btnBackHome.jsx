import { Link } from 'react-router-dom';
import styles from './btnBHome.module.css';

export function HomeButton() {
  return (
    <div className={styles.btnHome}>
      <Link className={styles.Link} to='/'>
        Home
      </Link>
    </div>
  );
}
