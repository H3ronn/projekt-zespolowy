import Link from "next/link";
import styles from "./loginForm.module.scss";

export const LoginForm = () => {
  return (
    <div className={styles.container} id="container">
      <div className={styles["form-container"]}>
        <form action="#">
          <h1>Sign in</h1>
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
          <span>or use your account</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <Link href={"/register"}>
            Don&apos;t have account? <br />
            Click here
          </Link>
          <button>Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
