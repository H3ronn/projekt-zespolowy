import Head from "next/head";
import Articles from "../components/articles/Articles";
import AuthHeader from "../components/AuthHeader";
import Header from "../components/header/Header";
import type { GetStaticProps } from "next";
import prisma from "../lib/prisma";

export default function Home({ articles }: any) {
  console.log(articles);
  return (
    <div>
      <Head>
        <title>Serwis informacyjny</title>
        <meta name="description" content="Serwis informacyjny" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Articles articles={articles} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allArticles = await prisma.post.findMany();
  const articles = JSON.parse(JSON.stringify(allArticles));

  return {
    props: { articles },
    revalidate: 10,
  };
};
