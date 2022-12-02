import Link from "next/link";
import styles from "./registerForm.module.scss";

const RegisterForm = () => {
  return (
    <div className={styles.container} id="container">
      <div className={styles["form-container"]}>
        <form action="#">
          <h1>Sign up</h1>
          <span>or use your account</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <Link href={"/login"}>Sign in</Link>
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
