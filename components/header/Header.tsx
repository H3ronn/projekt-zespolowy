import Link from "next/link";
import styles from "./header.module.scss";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session, status } = useSession();
  console.log(session);
  console.log(status);

  if (status === "loading") {
    return <div>Loading</div>;
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
      <Link href="/api/auth/signin" className={styles.link}>
        Log in
      </Link>
      {!!session && (
        <Link href="/add" className={styles.addArticle}>
          Dodaj artykuł
        </Link>
      )}
    </div>
  );
};

export default Header;
