import Link from "next/link";
import styles from "./registerForm.module.scss";

const RegisterForm = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container} id="container">
        <div className={styles["form-container"]}>
          <form action="#">
            <h1 className={styles.heading}>Zarejestruj się</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Hasło" />
            <Link href={"/login"}>Zaloguj się</Link>
            <button>Utwórz konto</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
