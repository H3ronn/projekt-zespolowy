import Link from "next/link";
import styles from "./articles.module.scss";
import type { PrismaArticle } from "../../types/prismaTypes";

type ArticlesProps = {
  articles: PrismaArticle[];
};

const Articles = ({ articles = [] }: ArticlesProps) => {
  return (
    <div className={styles.wrapper}>
      <ul>
        {articles.map(({ id, title, content }: PrismaArticle) => (
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
