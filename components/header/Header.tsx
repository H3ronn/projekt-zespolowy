import Link from "next/link";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Serwis informacyjny</h1>
      <Link href="/login" className={styles.link}>
        Zaloguj
      </Link>
    </div>
  );
};

export default Header;
