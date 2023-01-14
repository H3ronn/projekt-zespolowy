import Link from "next/link";
import styles from "./articles.module.scss";

const Articles = ({ articles = [] }: any) => {
  console.log(articles);
  return (
    <div className={styles.wrapper}>
      <ul>
        {articles.map(({ id, title, content }: any) => (
          <li key={id} className={styles.article}>
            <Link href={`/article/${id}`}>
              <h2>{title}</h2>
              <p>{content}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
