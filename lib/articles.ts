import prisma from "./prisma";

export const getArticlesPaths = async () => {
  const articles = await prisma.post.findMany();

  return articles.map((item) => ({
    params: {
      id: item.id,
    },
  }));
};

export const getArticleById = async (id: string) => {
  const articles = await prisma.post.findUnique({
    where: {
      id,
    },
  });

  return articles;
};
