import React, { useState } from "react";
import styles from "../styles/add.module.scss";
import Router from "next/router";

export default function Add() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const createArticle = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/article", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });
      await Router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Dodaj artykuł</h1>
      <form onSubmit={createArticle} className={styles.form}>
        <label htmlFor="title">Tytuł:</label>
        <input
          type="text"
          name="title"
          id="title"
          required
          minLength={3}
          maxLength={30}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="content">Tekst: (maksymalnie 500znaków)</label>
        <textarea
          name="content"
          id="content"
          required
          minLength={20}
          maxLength={500}
          onChange={(e) => setContent(e.target.value)}
        />
        <button className={styles.addArticleBtn}>Dodaj artykuł</button>
      </form>
    </div>
  );
}

// export const getStaticProps: GetStaticProps = async () => {};
