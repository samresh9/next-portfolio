export const getProjects = async () => {
  try {
    const res = await fetch("http://localhost:1337/api/projects?populate=*", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (err) {
    console.log(err);
    return {
      data: [],
      error: true,
    };
  }
};

export const getBlogs = async () => {
  try {
    const res = await fetch(
      "http://localhost:1337/api/blogs?sort=createdAt:desc&fields[0]=title&fields[1]=description&fields[2]=date&fields[3]=readTime&fields[4]=slug&fields[5]=featured&fields[6]=updatedAt&populate[0]=imgUrl",
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch the data");
    }
    return res.json();
  } catch (err) {
    return {
      data: [],
      error: true,
    };
  }
};

export const getBlogArticle = async (slug: string) => {
  try {
    const res = await fetch(
      `http://localhost:1337/api/blogs?filters[slug][$eq]=${slug}&populate=*`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const article = await res.json();

    if (article.data.length === 0) {
      throw new Error("Not Found");
    }
    return article;
  } catch (err) {
    console.log(err);
    return {
      data: [],
      error: true,
    };
  }
};
