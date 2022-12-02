import styles from "./articles.module.scss";
import { articles } from "./content";

const Articles = () => {
  return (
    <div className={styles.wrapper}>
      <ul>
        {articles.map(({ id, title, content }) => (
          <li key={id}>
            <h2>{title}</h2>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
