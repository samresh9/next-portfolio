export const getProjects = async () => {
  try {
    const res = await fetch("http://localhost:1337/api/projects?populate=*");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data.data;
  } catch (err) {
    console.log(err);
    return {
      data: [],
      error: true,
    };
  }
};
