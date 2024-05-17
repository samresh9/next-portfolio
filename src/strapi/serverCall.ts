const authHeaders = (): RequestInit => {
  return {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
      "Content-Type": "application/json",
    },
    cache: "no-store",
  };
};

export const getProjects = async () => {
  try {
    const res = await fetch(
     `${process.env.SERVER}/api/projects?populate=*`,
      authHeaders()
    );
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
      `${process.env.SERVER}/api/blogs?sort=createdAt:desc&fields[0]=title&fields[1]=description&fields[2]=date&fields[3]=readTime&fields[4]=slug&fields[5]=featured&fields[6]=updatedAt&populate[0]=imgUrl`,
      authHeaders()
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
      `${process.env.SERVER}/api/blogs?filters[slug][$eq]=${slug}&populate=*`,
      authHeaders()
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

export const getAllStacks = async () => {
  try {
    const res = await fetch(`${process.env.SERVER}/api/stacks`, authHeaders());
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
