import type { GetStaticProps } from "next";
import { getArticleById, getArticlesPaths } from "../../lib/articles";
import type Prisma from "@prisma/client";
import SingleArticle from "../../components/singleArticle/SingleArticle";

type ArticlePageProps = {
  articleData: Prisma.Post;
};

export default function AdvertPage({ articleData }: ArticlePageProps) {
  return <SingleArticle article={articleData} />;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    return {
      props: {},
    };
  }

  const articleData = await getArticleById(params.id as string);
  return {
    props: { articleData },
  };
};

export const getStaticPaths = async () => {
  const paths = await getArticlesPaths();
  return {
    paths,
    fallback: false,
  };
};
