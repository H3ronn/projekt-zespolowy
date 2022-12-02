import Link from "next/link";
import styles from "./loginForm.module.scss";

export const LoginForm = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container} id="container">
        <div className={styles["form-container"]}>
          <form action="#">
            <h1>Zaloguj się</h1>
            <div className={styles["social-container"]}>
              <a href="#" className={styles.social}>
                <i>X</i>
              </a>
              <a href="#" className={styles.social}>
                <i>X</i>
              </a>
              <a href="#" className={styles.social}>
                <i>X</i>
              </a>
            </div>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Hasło" />

            <Link href={"/register"}>
              Nie masz konta? <br />
              Kliknij tutaj
            </Link>
            <button>Zaloguj się</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
