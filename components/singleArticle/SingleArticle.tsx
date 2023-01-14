import Link from "next/link";
import styles from "./singleArticle.module.scss";

const SingleArticle = ({ article }: any) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.article}>
        <h2>{article.title}</h2>
        <p>{article.content}</p>
      </div>
      <form action="" className={styles.form}>
        <label htmlFor="comment">Treść komentarza</label>
        <input type="text" name="comment" id="comment" />
        <button className={styles.btn}>Dodaj</button>
      </form>
      <form action="" className={styles.rate}>
        <span>Czy wpis się podobał? Oceń w skali o 1 do 5</span>
        <label htmlFor="rate">Treść komentarza</label>
        <input
          type="number"
          name="rate"
          id="rate"
          placeholder="5"
          min={1}
          max={5}
        />
        <button className={styles.btn}>Dodaj</button>
      </form>
    </div>
  );
};

export default SingleArticle;
