import Link from "next/link";
import styles from "./header.module.scss";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Ładowanie</div>;
  }

  return (
    <div className={styles.wrapper}>
      <div>
        {!!session && (
          <div>
            <button className={styles.logOut} onClick={() => signOut()}>
              Wyloguj ({session.user?.email})
            </button>
          </div>
        )}
      </div>
      <h1 className={styles.heading}>Serwis informacyjny</h1>

      {session ? (
        <Link href="/add" className={styles.addArticle}>
          Dodaj artykuł
        </Link>
      ) : (
        <Link href="/api/auth/signin" className={styles.link}>
          Log in
        </Link>
      )}
    </div>
  );
};

export default Header;
